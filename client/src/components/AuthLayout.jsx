const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">

      <div className="absolute top-0 left-0 h-72 w-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 h-72 w-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div
        className="
        relative
        w-full
        max-w-md
        bg-zinc-950
        border
        border-zinc-800
        rounded-3xl
        p-8
        "
      >
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;