import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";

// 1. Tangkap props onLogin dan isLoading yang dikirim dari LoginPage
const LoginCard = ({ onBack, onLogin, isLoading }) => {
  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white px-8 py-10 shadow-md">
      <button
        onClick={onBack}
        className="mb-6 text-sm font-medium text-slate-500 hover:text-cyan-600"
      >
        ← Back to Home
      </button>

      <LoginHeader />

      {/* 2. Oper lagi props-nya ke dalam LoginForm */}
      <LoginForm onLogin={onLogin} isLoading={isLoading} />

      <div className="my-8 h-px w-full bg-slate-200"></div>

      <p className="text-center text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <span className="font-bold text-cyan-600">Contact Sales</span>
      </p>
    </div>
  );
};

export default LoginCard;