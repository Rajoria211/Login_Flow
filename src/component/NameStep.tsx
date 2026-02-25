import { useState } from "react";
import type { FormData } from "../App";

interface Props {
  onNext: () => void;
  onBack: () => void;
  updateData: (data: Partial<FormData>) => void;
}

export default function NameStep({ onNext, onBack, updateData }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const isValid = firstName.trim() && lastName.trim();

  const handleContinue = () => {
    updateData({ firstName, lastName });
    onNext();
  };

  return (
    <div className="step-container">
      <div className="name-container">
      <h2 className="name-step-title">What is your name?</h2>
      <div className="form-group">
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          className="input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Oliver"
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastname"
          className="input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="LastName"
        />
      </div>
    </div>
    
      <div className="button-row">
        <button className="btn secondary" onClick={onBack}>
          Back
        </button>
        <button
          className="btn primary"
          disabled={!isValid}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
