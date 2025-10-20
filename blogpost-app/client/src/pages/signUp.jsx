import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

const SignupPage = () => {
  const navigate = useNavigate();
  const goToLandingPage = () => navigate("/");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-900 p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Sign Up
        </h2>

        <form className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField label="First Name" id="firstName" placeholder="John" />
            <InputField label="Middle Name" id="middleName" placeholder="Parks" />
            <InputField label="Surname" id="surname" placeholder="Doe" />
            <InputField label="Suffix" id="suffix" placeholder="ex. Jr., II, III, etc." />
            <InputField label="Birthdate" id="birthdate" type="date" />
          </div>

          {/* Username & Email */}
          <InputField label="Username" id="username" placeholder="johndoe123" />
          <InputField label="Email" id="email" type="email" placeholder="john@example.com" />

          {/* Password Fields */}
          <InputField label="Password" id="password" type="password" placeholder="********" />
          <InputField label="Confirm Password" id="confirmPassword" type="password" placeholder="********" />

          {/* Buttons */}
          <div className="flex flex-col w-full items-center gap-4 mt-4">
            <button
              type="submit"
              className="w-[50%] py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </button>

            <button
              type="button"
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
