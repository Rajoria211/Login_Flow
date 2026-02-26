import { useState } from "react";
import type { FormData } from "../App";
import person_selected from "/images/person_selected.png"
import person_not_selected from "/images/person_not_selected.png"
import briefcase_selected from "/images/briefcase_selected.png"
import briefcase_not_selected from "/images/briefcase_not_selected.png"
import check_box from "/images/Checkbox.png"
interface Props {
  data: FormData;
  updateData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

export default function AccountTypeStep({ data, updateData, onNext }: Props) {
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    if (!data.accountType) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNext();
    }, 1000);
  };

  const personalIcon: string =
    data.accountType === "personal"
      ? person_selected
      : person_not_selected;
  const businessIcon: string =
    data.accountType === "business"
      ? briefcase_selected
      : briefcase_not_selected;

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
            src={check_box}
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
            src={check_box}
            alt="selected"
          />
        </div>
      </div>

      <div className="button-row">
        <button className="btn secondary">Back</button>
        <button
          className="btn primary"
          disabled={!data.accountType || loading}
          onClick={handleContinue}
        >
          {loading ? "Loading..." : "Continue"}
        </button>
      </div>
    </div>
  );
}
