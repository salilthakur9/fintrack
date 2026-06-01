import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
const Login = () => {
  return (
    <AuthLayout>
      <h1 className="text-3xl font-bold text-white text-center">
        Welcome Back
      </h1>

      <p className="text-zinc-500 text-center mt-2">
        Login to your FinTrack account
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

        <Link
  to="/login"
  className="
  px-5
  py-2
  rounded-xl
  bg-white
  text-black
  font-semibold
  "
>
  Login
</Link>
      </form>

      <p className="text-zinc-500 text-center mt-6">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-cyan-400"
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;