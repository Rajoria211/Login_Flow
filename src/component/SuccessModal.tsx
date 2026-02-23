import type { FormData } from "../App";

interface Props {
  data: FormData;
}

export default function SuccessModal({ data }: Props) {
  return (
    <div className="success-overlay">
      <div className="success-modal">
        <h2>You’re all set!</h2>

        <div className="summary-box">
          <p>Account Type: {data.accountType}</p>
          <p>
            Name: {data.firstName} {data.lastName}
          </p>
          <p>Mobile: {data.mobile}</p>
        </div>

        <button className="btn primary">Go To Dashboard</button>
      </div>
    </div>
  );
}
