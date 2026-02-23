import { useState } from "react";
import type { FormData } from "../App";

interface Props {
  onNext: () => void;
  onBack: () => void;
  updateData: (data: Partial<FormData>) => void;
}

export default function PasswordStep({ onNext, onBack, updateData }: Props) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirm) {
      setError("Passwords must match");
      return;
    }

    updateData({ password });
    onNext();
  };

  return (
    <div className="step-container">
      <h2 className="step-title">Create Password for your account</h2>

      <div className="form-group">
        <label>Enter new password</label>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
      </div>

      <div className="form-group">
        <label>Confirm password</label>
        <input
          type="password"
          className="input"
          value={confirm}
          onChange={(e) => {
            setConfirm(e.target.value);
            setError("");
          }}
        />
        {error && <p className="error-text">{error}</p>}
      </div>

      <div className="button-row">
        <button className="btn secondary" onClick={onBack}>
          Back
        </button>
        <button className="btn primary" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}
