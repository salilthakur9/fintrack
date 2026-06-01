import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import AuthLayout from "../components/AuthLayout";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return toast.error("All fields are required");
    }

    if (formData.password.length < 6) {
      return toast.error(
        "Password must be at least 6 characters"
      );
    }

    if (
      formData.password !== formData.confirmPassword
    ) {
      return toast.error("Passwords do not match");
    }

    toast.success("Register API coming next 🚀");
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
        Create Account
      </h1>

      <p className="text-zinc-500 text-center mt-2">
        Start your financial journey
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

        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
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
          py-3
          rounded-xl
          bg-cyan-400
          text-black
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