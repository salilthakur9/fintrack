import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <FaWallet className="text-cyan-400 text-2xl" />

          <h1 className="text-white text-2xl font-bold">
            FinTrack
          </h1>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <button className="text-zinc-400 hover:text-cyan-400 transition">
            Dashboard
          </button>

          <button className="text-zinc-400 hover:text-cyan-400 transition">
            Reports
          </button>

          <Link
            to="/login"
            className="
            px-4
            py-2
            rounded-xl
            border
            border-zinc-700
            text-white
            hover:border-cyan-400
            hover:text-cyan-400
            transition
            "
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;