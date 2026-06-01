import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import AuthLayout from "../components/AuthLayout";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      return toast.error("All fields are required");
    }

    toast.success("Login API coming next 🚀");
  };

  return (
    <AuthLayout>
      {/* Logo */}

      <div className="flex justify-center mb-5">
        <div
          className="
          h-14
          w-14
          rounded-2xl
          bg-cyan-400
          flex
          items-center
          justify-center
          text-black
          font-bold
          text-xl
          "
        >
          ₹
        </div>
      </div>

      <h1 className="text-3xl font-bold text-white text-center">
        Welcome Back
      </h1>

      <p className="text-zinc-500 text-center mt-2">
        Login to FinTrack
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4"
      >
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
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

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
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

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-4 text-zinc-500"
          >
            {showPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}
          </button>
        </div>

        <Link
  to="/login"
  className="
  px-5
  py-2
  rounded-xl
  border
  border-zinc-700
  hover:border-cyan-400
  hover:text-cyan-400
  transition
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