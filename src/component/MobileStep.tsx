import { useState } from "react";
import type { FormData } from "../App";

interface Props {
  onNext: () => void;
  onBack: () => void;
  updateData: (data: Partial<FormData>) => void;
}

export default function MobileStep({ onNext, onBack, updateData }: Props) {
  const [countryCode, setCountryCode] = useState("+1");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (mobile.length !== 10) {
      setError("Mobile number must be 10 digits");
      return;
    }

    updateData({ mobile: `${countryCode}${mobile}` });
    onNext();
  };

  return (
    <div className="step-container">
      <h2 className="step-title">OTP Verification</h2>

      <div className="form-group">
        <label>Mobile Number</label>

        <div className={`phone-input-wrapper ${error ? "input-error" : ""}`}>
          {/* Country Selector */}
          <div className="country-selector">
            <span className="flag">🇺🇸</span>

            <select
              className="country-code-select"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+1">+1 (US)</option>
              <option value="+91">+91 (IN)</option>
              <option value="+44">+44 (UK)</option>
            </select>
          </div>

          {/* Divider */}
          <div className="divider" />

          {/* Mobile Input */}
          <input
            type="tel"
            className="mobile-input"
            value={mobile}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setMobile(value);
              setError("");
            }}
            placeholder="Enter mobile number"
          />
        </div>

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
