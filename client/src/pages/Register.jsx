import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

const Register = () => {
  return (
    <AuthLayout>
      <h1 className="text-3xl font-bold text-white text-center">
        Create Account
      </h1>

      <p className="text-zinc-500 text-center mt-2">
        Start tracking your finances
      </p>

      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="
          w-full
          bg-black
          border
          border-zinc-800
          rounded-xl
          px-4
          py-3
          text-white
          outline-none
          focus:border-cyan-400
          "
        />

        <input
          type="password"
          placeholder="Password"
          className="
          w-full
          bg-black
          border
          border-zinc-800
          rounded-xl
          px-4
          py-3
          text-white
          outline-none
          focus:border-cyan-400
          "
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="
          w-full
          bg-black
          border
          border-zinc-800
          rounded-xl
          px-4
          py-3
          text-white
          outline-none
          focus:border-cyan-400
          "
        />

        <button
          type="submit"
          className="
          w-full
          bg-cyan-400
          text-black
          py-3
          rounded-xl
          font-semibold
          hover:opacity-90
          transition
          "
        >
          Register
        </button>
      </form>

      <p className="text-zinc-500 text-center mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-cyan-400"
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Register;