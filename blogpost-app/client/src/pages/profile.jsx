import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const profile = location.state?.user || null;
  console.log(profile);

  useEffect(() => {}, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-sm">No user found. Please log in.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 text-gray-500 hover:text-gray-700 transition"
        >
          ← Back
        </button>

        <h1 className="text-2xl font-semibold text-gray-800 mt-4">
          Hello, {profile.user.fullName}
        </h1>
        <p className="text-gray-500 text-sm mt-1">@{profile.user.username}</p>
        <p className="text-gray-400 text-xs mt-4">
          Joined {formatDate(profile.user.createdAt)}
        </p>
      </div>
    </div>
  );
}
