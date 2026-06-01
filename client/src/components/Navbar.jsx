import { FaWallet } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FaWallet className="text-cyan-400 text-2xl" />

          <h1 className="text-white text-xl font-bold tracking-wide">
            FinTrack
          </h1>
        </div>

        <button className="px-5 py-2 rounded-xl bg-white text-black font-semibold hover:scale-105 transition-all">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;