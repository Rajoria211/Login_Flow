import type { FormData } from "../App";

interface Props {
  data: FormData;
}

export default function SuccessModal({ data }: Props) {
  return (
    <div className="success-overlay">
      <div className="success-modal">
        <img
          className="verification-icon"
          src="src/styles/images/okay.png"
          alt="checkmark"
        />
        <h2>You’re all set!</h2>
        <p>Here's a quick summary of your account details</p>
        <div className="summary-box">
          <p className="summary-field">
            Account Type{" "}
            <span>
              {data.accountType === "personal" ? "Personal" : "Business"}
            </span>
          </p>
          <p className="summary-field">
            Email{" "}
            <span>
              {data.firstName?.toLowerCase().slice(0, 2)}
              ***@example.com
            </span>
          </p>
          <p className="summary-field">
            Name
            <span>
              {" "}
              {data.firstName} {data.lastName}
            </span>
          </p>
          <p className="summary-field">
            Mobile Number <span>{data.mobile}</span>
          </p>
        </div>
        <span className="secure-title">
          <img src="src/styles/images/shield.png" alt="shield" />
          <p>Your account is secured with bank-grade security</p>
        </span>
        <button className="btn primary dashboard">Go To Dashboard</button>
      </div>
    </div>
  );
}
