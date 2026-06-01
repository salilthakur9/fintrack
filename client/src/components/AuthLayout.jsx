// src/components/AuthLayout.jsx

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-5">
      <div
        className="
        w-full
        max-w-md
        bg-zinc-950
        border
        border-zinc-800
        rounded-3xl
        p-8
        shadow-2xl
        "
      >
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;