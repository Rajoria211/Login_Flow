import type { Step } from "./type/step";
import AuthLayout from "./component/layout/AuthLayout";
import StepRenderer from "./component/step/StepRenderer";
import { useState } from "react";

function App() {
  const [step, setStep] = useState<Step>("accountType");

  const nextStep = (next: Step) => setStep(next);
  const prevStep = (prev: Step) => setStep(prev);

  return (
    <AuthLayout>
      <StepRenderer step={step} nextStep={nextStep} prevStep={prevStep} />
    </AuthLayout>
  );
}

export default App;
