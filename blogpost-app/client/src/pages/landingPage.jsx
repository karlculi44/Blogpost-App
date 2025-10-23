import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/userRequests.js";
import InputField from "../components/InputField.jsx";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState(null);

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ["username", "password"];
    const hasEmpty = requiredFields.some((key) => !formData[key].trim());

    try {
      if (hasEmpty) {
        setIsSubmitted(true);
        return; // prevent submission until all required fields are filled
      }

      const url = "/api/auth/login";
      const { username, password } = formData;
      const body = { username, password };
      const data = await loginUser(url, body);
      console.log("Login Successfully:", data);
      setUser(data);
      navigate("/dashboard");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
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
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <InputField
              label="Username"
              id="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              isSubmitted={isSubmitted}
            />
          </div>

          <div>
            <InputField
              label="Password"
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              isSubmitted={isSubmitted}
            />
          </div>
          {!user && isSubmitted && (
            <p className="text-red-500 text-sm mt-1">
              Invalid username or password.
            </p>
          )}
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
