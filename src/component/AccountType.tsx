import type { FormData } from "../App";

interface Props {
  data: FormData;
  updateData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

export default function AccountTypeStep({ data, updateData, onNext }: Props) {
  return (
    <div className="step-container">

      <div className="account-options">
      <h4 className="account-title">
        To join us tell us <b>what type of account</b> you are opening
      </h4>
        <div className="personal-account">
          <img className="icon-image" src="/src/styles/images/person_icon.png" alt="" />
          <button
          className={`account-option ${
            data.accountType === "personal" ? "active" : ""
          }`}
          onClick={() => updateData({ accountType: "personal" })}
        >
          Personal
        </button>
        <img className={`check-mark ${
            data.accountType === "personal" ? "active" : ""
          }`} src="/src/styles/images/Checkbox.png" alt="selected" />
        </div>
        <div className="business-account">
          <img className="icon-image" src="src/styles/images/brief_case.png" alt="" />
          <button
          className={`account-option ${
            data.accountType === "business" ? "active" : ""
          }`}
          onClick={() => updateData({ accountType: "business" })}
        >
          Business
        </button>
        <img className={`check-mark ${
            data.accountType === "business" ? "active" : ""
          }`} src="/src/styles/images/Checkbox.png" alt="selected" />
        </div>
        
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
