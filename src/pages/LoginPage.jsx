import LoginCard from "../components/login/LoginCard";

const LoginPage = ({ onBack }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16">
      <LoginCard onBack={onBack} />
    </main>
  );
};

export default LoginPage;