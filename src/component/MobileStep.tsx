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
      <div className="form-group">
        <h2 className="mobile-step-title">OTP Verification</h2>
        <label className="mobile-number">
          Mobile Number<span>*</span>
        </label>

        <div className={`phone-input-wrapper ${error ? "input-error" : ""}`}>
          {/* Country Selector */}
          <div className="country-selector">
            <span className="flag">
              <img
                src={`src/styles/images/us.png`}
                style={{ width: "20px" }}
                alt="country-flag"
              />
            </span>

            <select
              className="country-code-select"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+1">+1</option>
            </select>
          </div>

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
            maxLength={10}
          />
        </div>

        {error && <p className="error-text">{error}</p>}
      </div>

      <div className="button-row">
        <button className="btn secondary" onClick={onBack}>
          Back
        </button>
        <button
          className="btn primary"
          onClick={handleContinue}
          disabled={mobile.length !== 10}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
