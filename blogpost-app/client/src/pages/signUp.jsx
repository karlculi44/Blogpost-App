import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { signUpUser } from "../api/signUpUser.js";

const SignupPage = () => {
  const navigate = useNavigate();

  // State for inputs
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    surname: "",
    suffix: "",
    birthdate: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const url = '/api/auth/signup'
      const body = {
        fullName: `${formData.firstName} ${formData.middleName} ${formData.surname}`,
        suffix: formData.suffix,
        birthdate: formData.birthdate,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };

      const data = await signUpUser(url, body);
      console.log('User created successfuly.', data);
      alert("User registered successfully!");
      navigate("/");

    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  };

  const goToLandingPage = () => navigate("/");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-900 p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField label="First Name" id="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} />
            <InputField label="Middle Name" id="middleName" placeholder="Parks" value={formData.middleName} onChange={handleChange} />
            <InputField label="Surname" id="surname" placeholder="Doe" value={formData.surname} onChange={handleChange} />
            <InputField label="Suffix" id="suffix" placeholder="ex. Jr., II, III, etc." value={formData.suffix} onChange={handleChange} />
            <InputField label="Birthdate" id="birthdate" type="date" value={formData.birthdate} onChange={handleChange} />
          </div>

          {/* Username & Email */}
          <InputField label="Username" id="username" placeholder="johndoe123" value={formData.username} onChange={handleChange} />
          <InputField label="Email" id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} />

          {/* Password Fields */}
          <InputField label="Password" id="password" type="password" placeholder="********" value={formData.password} onChange={handleChange} />
          <InputField label="Confirm Password" id="confirmPassword" type="password" placeholder="********" value={formData.confirmPassword} onChange={handleChange} />

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
