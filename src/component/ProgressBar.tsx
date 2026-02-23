interface Props {
  currentStep: number;
  total: number;
}

export default function ProgressBar({ currentStep, total }: Props) {
  const percentage = ((currentStep + 1) / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }} />
    </div>
  );
}
