import { useState } from "react";
import type { FormData } from "../App";

interface Props {
  onNext: () => void;
  onBack: () => void;
  updateData: (data: Partial<FormData>) => void;
}

interface ShowState {
  password: boolean;
  confirm: boolean;
}

export default function PasswordStep({ onNext, onBack, updateData }: Props) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState<ShowState>({
    password: false,
    confirm: false,
  });

  const handleContinue = () => {
    setLoading(true);
    setTimeout(() => {
      updateData({ password });
      setLoading(false);
      onNext();
    }, 1000);
  };

  const isLengthValid = password.length >= 6;
  const doPasswordsMatch = password === confirm;
  return (
    <div className="step-container">
      <h2 className="password-step-title">Create Password for your account</h2>
      <div className="password-input-container">
        <div className="form-group password">
          <label>Enter new password</label>
          <input
            type={show.password ? "text" : "password"}
            className="input password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="show-password"
            onClick={() => {
              setShow((prev) => ({ ...prev, password: !prev.password }));
            }}
          >
            <img src="src/styles/images/eye_icon.png" alt="show" />
          </button>
          <p
            className={`password-guide ${
              password.length > 0 && !isLengthValid ? "error-text" : ""
            }`}
          >
            Must be atleast 6 characters
          </p>
        </div>

        <div className="form-group password">
          <label>Confirm password</label>
          <input
            type={show.confirm ? "text" : "password"}
            className="input password"
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
          />
          <button
            className="show-password"
            onClick={() => {
              setShow((prev) => ({ ...prev, confirm: !prev.confirm }));
            }}
          >
            <img src="src/styles/images/eye_icon.png" alt="show" />
          </button>
          <p
            className={`password-guide ${
              confirm.length > 0 && !doPasswordsMatch ? "error-text" : ""
            }`}
          >
            Both passwords must match
          </p>
        </div>
      </div>
      <div className="button-row">
        <button className="btn secondary" onClick={onBack}>
          Back
        </button>
        <button
          className="btn primary"
          onClick={handleContinue}
          disabled={!isLengthValid || !doPasswordsMatch || loading}
        >
          {loading ? "Loading..." : "Continue"}
        </button>
      </div>
    </div>
  );
}
