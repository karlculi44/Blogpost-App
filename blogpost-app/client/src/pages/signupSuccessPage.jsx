import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SignupSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
        <div className="flex justify-center mb-4">
          <CheckCircle className="text-green-500 w-16 h-16" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Account Created Successfully!
        </h1>
        <p className="text-gray-600 mb-6">
          Your account has been created. You can now log in to start exploring.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white font-medium py-2.5 px-6 rounded-xl shadow hover:bg-green-700 transition"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
