import type { Step } from "../../type/step";

type Props = {
  step: Step;
  nextStep: (step: Step) => void;
  prevStep: (step: Step) => void;
};

const StepRenderer = ({ step, nextStep, prevStep }: Props) => {
  switch (step) {
    case "accountType":
      return <div>Account Type</div>;
    case "mobile":
      return <div>Mobile</div>;
    case "otp":
      return <div>OTP</div>;
    case "name":
      return <div>Name</div>;
    case "password":
      return <div>Password</div>;
    case "success":
      return <div>Success</div>;
  }
};

export default StepRenderer;
