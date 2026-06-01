import { FaWallet } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-5 border-b border-slate-800 bg-slate-950">
      <div className="flex items-center gap-3">
        <FaWallet className="text-sky-400 text-2xl" />
        <h1 className="text-white text-xl font-bold">
          SpendWise
        </h1>
      </div>

      <button className="bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-xl text-white font-semibold transition-all">
        Login
      </button>
    </nav>
  );
};

export default Navbar;