import { useRef, useState } from "react";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function OtpStep({ onNext, onBack }: Props) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const isValid = otp.every((digit) => digit !== "");

  return (
    <div className="step-container">

      <div className="otp-container">
        <h2 className="otp-step-title">OTP Verification</h2>
        <div className="otp-input-container">
          <p className="otp-input-title">An OTP has been sent to your mobile number</p>
          <div className="otp-blocks">
            {otp.map((digit, index) => (
            <input
              key={index}
              className="otp-input"
              value={digit}
              maxLength={1}
              ref={(el) => {
                inputs.current[index] = el;
              }}
              onChange={(e) => handleChange(e.target.value, index)}
            />
            ))}
          </div>
            <p className="resend-otp">Did not receive OTP?<span>Resend OTP</span></p>
        </div>
      </div>

      <div className="button-row">
        <button className="btn secondary" onClick={onBack}>
          Back
        </button>
        <button className="btn primary" disabled={!isValid} onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
}
