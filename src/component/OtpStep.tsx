import { useRef, useState } from "react";

interface Props {
  onNext: () => void;
  onBack: () => void;
  onResend: () => void;
}

export default function OtpStep({ onNext, onBack, onResend }: Props) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
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

  const handleContinue = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNext();
    }, 1000);
  };

  return (
    <div className="step-container">
      <div className="otp-container">
        <h2 className="otp-step-title">OTP Verification</h2>
        <div className="otp-input-container">
          <p className="otp-input-title">
            An OTP has been sent to your mobile number
          </p>
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
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !otp[index] && index > 0) {
                    inputs.current[index - 1]?.focus();
                  }
                }}
              />
            ))}
          </div>
          <p className="resend-otp">
            Did not receive OTP?<span onClick={onResend}>Resend OTP</span>
          </p>
        </div>
      </div>

      <div className="button-row">
        <button className="btn secondary" onClick={onBack}>
          Back
        </button>
        <button
          className="btn primary"
          disabled={!isValid || loading}
          onClick={handleContinue}
        >
          {loading ? "Loading..." : "Continue"}
        </button>
      </div>
    </div>
  );
}
