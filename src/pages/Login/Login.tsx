import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const successMessage = location.state?.message as string | undefined;
  const redirectTo =
    (location.state?.from?.pathname as string | undefined) ?? "/";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setIsSubmitting(true);

    try {
      await login({
        email,
        password,
      });

      navigate(redirectTo, { replace: true });
    } catch (error) {
      setError(error instanceof Error ? error.message : "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[75vh] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
        {/* Left Section */}
        <div className="relative hidden min-h-[560px] overflow-hidden md:block">
          <img
            src="/src/assets/images/Krishna_pic.jpg"
            alt="Krishna Ji"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="relative z-10 flex h-full flex-col justify-end p-10 text-white">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em]">
              Gopal Ji Ki Dukaan
            </p>

            <h2 className="text-3xl font-semibold leading-tight">
              श्रद्धा से सजे,
              <br />
              प्रेम से बने...
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/90">
              आपके लड्डू गोपाल के लिए सुंदर पोशाक, मुकुट और श्रृंगार सामग्री।
            </p>
          </div>
        </div>

        {/* Login Section */}
        <div className="flex items-center justify-center px-6 py-10 sm:px-10">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-amber-200 bg-amber-50">
                <img
                  src="/src/assets/images/logo.jpg"
                  alt="Gopal Ji Ki Dukaan"
                  className="h-full w-full object-cover"
                />
              </div>

              <h1 className="text-3xl font-semibold text-gray-800">
                Welcome Back
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Login to your Gopal Ji Ki Dukaan account
              </p>
            </div>

            {/* Registration Success Message */}
            {successMessage && (
              <div
                role="status"
                className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
              >
                <p className="font-semibold">Registration successful!</p>

                <p className="mt-1">
                  Your account has been created successfully. Please log in
                  using your registered email and password.
                </p>
              </div>
            )}

            {/* Login Error Message */}
            {error && (
              <div
                role="alert"
                className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                {error}
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-amber-600 px-4 py-3 font-medium text-white shadow-md transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-amber-700 transition hover:text-amber-800"
                >
                  Sign Up
                </Link>
              </p>
            </div>

            {/* Back to Home */}
            <div className="mt-6 text-center">
              <Link
                to="/"
                className="text-sm font-medium text-amber-700 transition hover:text-amber-800"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
