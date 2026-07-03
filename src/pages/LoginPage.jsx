import LoginCard from "../components/login/LoginCard";
import { useAuth } from "../hooks/useAuth"; // 1. Import custom hook-nya

const LoginPage = ({ onBack }) => {
  // 2. Panggil hook-nya di sini
  const { loginAction, loading } = useAuth(); 

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16">
      {/* 3. Oper fungsinya ke dalam LoginCard sebagai props */}
      <LoginCard 
        onBack={onBack} 
        onLogin={loginAction} 
        isLoading={loading} 
      />
    </main>
  );
};

export default LoginPage;