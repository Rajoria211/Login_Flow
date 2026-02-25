type Props = {
  children: React.ReactNode;
  otpToast?: React.ReactNode;
};

const AuthLayout = ({ children, otpToast }: Props) => {
  return (
    <div className="layout">
      <div className="left">
        <div className="title">
          <h4>Let's get started</h4>
          <h1>Create your account</h1>
          <p>Follow the steps to create your account</p>
        </div>
        <div className="illustration">
          <img src="src/layout/illustration.png" alt="illustration" />
        </div>
      </div>
      <div className="right">
        {children} {otpToast}
      </div>
    </div>
  );
};

export default AuthLayout;
