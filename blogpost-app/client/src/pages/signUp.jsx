import { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";


const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const goToLandingPage = () => {
    navigate('/');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-900 p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Sign Up
        </h2>

        <form className="space-y-4">
          {/* Three-column names */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="middleName" className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                Middle Name
              </label>
              <input
                type="text"
                id="middleName"
                placeholder="Parks"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                Surname
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Doe"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <label htmlFor="username" className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="johndoe123"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="********"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <button
              type="button"
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
              onMouseLeave={() => setShowPassword(false)}
              onTouchStart={() => setShowPassword(true)}
              onTouchEnd={() => setShowPassword(false)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <EyeIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Confirm Password
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              id="confirmPassword"
              placeholder="********"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <button
              type="button"
              onMouseDown={() => setShowConfirm(true)}
              onMouseUp={() => setShowConfirm(false)}
              onMouseLeave={() => setShowConfirm(false)}
              onTouchStart={() => setShowConfirm(true)}
              onTouchEnd={() => setShowConfirm(false)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <EyeIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col w-full items-center gap-4">
            <button
              type="submit"
              className="w-[50%] py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </button>

            <button
              onClick={goToLandingPage}
              className="text-blue-600 hover:underline font-medium"
            >
              Back
            </button>
          </div>


        </form>
      </div>
    </div>
  );
};

export default SignupPage;
