interface Props {
  otp: string;
}

export default function OtpPopup({ otp }: Props) {
  return (
    <div className="otp-toast">
      <p>Your OTP Code</p>
      <h3>{otp}</h3>
    </div>
  );
}
