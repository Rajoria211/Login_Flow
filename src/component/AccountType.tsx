import type { FormData } from "../App";

interface Props {
  data: FormData;
  updateData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

export default function AccountTypeStep({ data, updateData, onNext }: Props) {
  return (
    <div className="step-container">
      <h2 className="step-title">What type of account are you opening?</h2>

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
