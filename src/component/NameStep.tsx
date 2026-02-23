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
      <h2 className="step-title">What is your name?</h2>

      <div className="form-group">
        <label>First Name</label>
        <input
          className="input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          className="input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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
