import { useState } from "react";
import type { Step } from "./type/step";
import AuthLayout from "./layout/AuthLayout";
import AccountType from "./component/AccountType";
import OtpStep from "./component/OtpStep";
import PasswordStep from "./component/PasswordStep";
import NameStep from "./component/NameStep";
import MobileStep from "./component/MobileStep";
import SuccessModal from "./component/SuccessModal";
import ProgressBar from "./component/ProgressBar";

export interface FormData {
  accountType?: "personal" | "business";
  mobile?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
}

function App() {
  const [step, setStep] = useState<Step>("accountType");
  const [data, setData] = useState<FormData>({});

  const next = (nextStep: Step) => setStep(nextStep);
  const back = (prevStep: Step) => setStep(prevStep);

  const stepOrder: Step[] = [
    "accountType",
    "mobile",
    "otp",
    "name",
    "password",
  ];

  const currentIndex = stepOrder.indexOf(step);

  const updateData = (values: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...values }));
  };
  return (
    <AuthLayout>
      {step !== "accountType" && < ProgressBar currentStep={currentIndex} total={stepOrder.length} />}
      {step === "accountType" && (
        <AccountType
          onNext={() => next("mobile")}
          updateData={updateData}
          data={data}
        />
      )}
      {step === "mobile" && (
        <MobileStep
          onNext={() => next("otp")}
          onBack={() => back("accountType")}
          updateData={updateData}
        />
      )}
      {step === "otp" && (
        <OtpStep onNext={() => next("name")} onBack={() => back("mobile")} />
      )}
      {step === "name" && (
        <NameStep
          onNext={() => next("password")}
          onBack={() => back("otp")}
          updateData={updateData}
        />
      )}
      {step === "password" && (
        <PasswordStep
          onNext={() => next("success")}
          onBack={() => back("name")}
          updateData={updateData}
        />
      )}
      {step === "success" && <SuccessModal data={data} />}
    </AuthLayout>
  );
}

export default App;
