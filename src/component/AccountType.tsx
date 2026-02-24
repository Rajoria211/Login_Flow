import type { FormData } from "../App";

interface Props {
  data: FormData;
  updateData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

export default function AccountTypeStep({ data, updateData, onNext }: Props) {
  return (
    <div className="step-container">
      <h4 className="account-title">
        To join us tell us <b>what type of account</b> you are opening
      </h4>

      <div className="account-options">
        <button
          className={`account-option ${
            data.accountType === "personal" ? "active" : ""
          }`}
          onClick={() => updateData({ accountType: "personal" })}
        >
          Personal
        </button>

        <button
          className={`account-option ${
            data.accountType === "business" ? "active" : ""
          }`}
          onClick={() => updateData({ accountType: "business" })}
        >
          Business
        </button>
      </div>

      <div className="button-row">
        <button className="btn secondary">Back</button>
        <button
          className="btn primary"
          disabled={!data.accountType}
          onClick={onNext}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
