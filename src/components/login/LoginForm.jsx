import { useState } from "react";
import { useLogin } from "../../hooks/useLogin"; // 🎯 Note: Pastikan folder 'hooks' huruf kecil sesuai struktur kemarin

const LoginForm = () => { // 1. Hapus ({}) kosong yang di sini
  const { loginAction, isLoading } = useLogin(); // Lu udah dapet loginAction di sini

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    // 2. PERBAIKAN: Ganti 'onLogin' menjadi 'loginAction' sesuai nama dari hook di atas
    const result = await loginAction(email, password); 
    
    if (result.success) {
      alert("Login Berhasil!");
      window.location.href = "/Jobs"; 
    } else {
      alert(result.message); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Corporate Email
        </label>
        <input
          type="email"
          placeholder="name@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-lg bg-cyan-600 py-3 text-sm font-bold text-white hover:bg-cyan-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
      >
        {isLoading ? "Connecting to Mock API..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;