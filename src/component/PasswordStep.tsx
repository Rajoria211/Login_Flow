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
  const [error, setError] = useState("");
  const [show,setShow] = useState<ShowState>({
    password:false,
    confirm:false,
  });

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
      <h2 className="password-step-title">Create Password for your account</h2>

      <div className="form-group password">
        <label>Enter new password</label>
        <input
          type={show.password? "text":"password"}
          className="input password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
        <button className="show-password"
        onClick={()=>{setShow((prev)=>({...prev,password:!prev.password}))}}
        ><img src="src/styles/images/eye_icon.png" alt="show" /></button>
        <p className="password-guide">Must be atleast 6 characters</p>
      </div>

      <div className="form-group password">
        <label>Confirm password</label>
        <input
          type={show.confirm? "text":"password"}
          className="input password"
          value={confirm}
          onChange={(e) => {
            setConfirm(e.target.value);
            setError("");
          }}
          />
        <button className="show-password"
        onClick={()=>{setShow((prev)=>({...prev,confirm:!prev.confirm}))}}
        ><img src="src/styles/images/eye_icon.png" alt="show" /></button>
        <p className="password-guide">Both passwords must match</p>
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
