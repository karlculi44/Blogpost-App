import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/userRequests.js";

const LandingPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    const url = "/api/auth/login";
    const body = { username, password };

    try {
      const data = await loginUser(url, body);
      console.log("Login Successfully:", data);
      navigate("/dashboard");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome to Blog8
        </h1>

        {/* Login Form */}
        <form className="space-y-4" onSubmit={loginHandler}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              autoComplete="username"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
          >
            Log In
          </button>
        </form>

        {/* Signup Section */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <button
            className="text-blue-600 hover:underline font-medium"
            onClick={goToSignUp}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
