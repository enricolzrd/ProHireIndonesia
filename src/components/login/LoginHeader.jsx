const LoginHeader = () => {
  return (
    <>
      <div className="mb-6 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-50">
          <span className="text-4xl font-bold text-cyan-600">∞</span>
        </div>
      </div>

      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>

        <p className="mt-2 text-sm text-slate-500">
          Log in to your ProHireIndonesia workspace
        </p>
      </div>
    </>
  );
};

export default LoginHeader;