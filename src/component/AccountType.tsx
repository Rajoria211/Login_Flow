import type { FormData } from "../App";

interface Props {
  data: FormData;
  updateData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

export default function AccountTypeStep({ data, updateData, onNext }: Props) {
  const personalIcon: string =
    data.accountType === "personal"
      ? "/src/styles/images/person_selected.png"
      : "/src/styles/images/person_not_selected.png";
  const businessIcon: string =
    data.accountType === "business"
      ? "/src/styles/images/briefcase_selected.png"
      : "/src/styles/images/briefcase_not_selected.png";

  return (
    <div className="step-container">
      <div className="account-options">
        <h4 className="account-title">
          To join us tell us <b>what type of account</b> you are opening
        </h4>
        <div className="personal-account">
          <img className="icon-image" src={personalIcon} alt="" />
          <button
            className={`account-option ${
              data.accountType === "personal" ? "active" : ""
            }`}
            onClick={() => updateData({ accountType: "personal" })}
          >
            Personal
          </button>
          <img
            className={`check-mark ${
              data.accountType === "personal" ? "active" : ""
            }`}
            src="/src/styles/images/Checkbox.png"
            alt="selected"
          />
        </div>
        <div className="business-account">
          <img className="icon-image" src={businessIcon} alt="" />
          <button
            className={`account-option ${
              data.accountType === "business" ? "active" : ""
            }`}
            onClick={() => updateData({ accountType: "business" })}
          >
            Business
          </button>
          <img
            className={`check-mark ${
              data.accountType === "business" ? "active" : ""
            }`}
            src="/src/styles/images/Checkbox.png"
            alt="selected"
          />
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
