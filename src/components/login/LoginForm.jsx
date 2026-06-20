const LoginForm = () => {
  return (
    <form className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Corporate Email
        </label>

        <input
          type="email"
          placeholder="name@company.com"
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
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
        />
      </div>

      <button
        type="button"
        className="w-full rounded-lg bg-cyan-600 py-3 text-sm font-bold text-white hover:bg-cyan-700"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;