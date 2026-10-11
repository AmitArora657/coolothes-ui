import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../../services/authService";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      await registerUser({
        name: name.trim(),
        email: email.trim(),
        password,
      });

      navigate("/login", {
        replace: true,
        state: {
          message: "Account created successfully. Please log in.",
        },
      });
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Registration failed. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[75vh] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
        <div className="relative hidden min-h-[600px] overflow-hidden md:block">
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
                Create Account
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Join Gopal Ji Ki Dukaan
              </p>
            </div>

            {error && (
              <div
                role="alert"
                className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                />
              </div>

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
                  maxLength={150}
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
                  placeholder="At least 8 characters"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-amber-600 px-4 py-3 font-medium text-white shadow-md transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Creating account..." : "Create Account"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-amber-700 transition hover:text-amber-800"
              >
                Login
              </Link>
            </p>

            <div className="mt-4 text-center">
              <Link
                to="/"
                className="text-sm font-medium text-gray-500 transition hover:text-amber-700"
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

export default SignUp;
