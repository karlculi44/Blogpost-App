import { useState } from "react";
import { Menu, X } from "lucide-react";
import { getProfile, logoutUser } from "../api/userRequests.js";
import { useNavigate } from "react-router-dom";
import CreatePostModal from "./PostModal.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    logoutUser();
    alert("Logged out successfully.");
    navigate("/");
  };

  const handleGetProfile = async () => {
    const data = await getProfile();
    setProfile(data);
    alert(`Hello, ${data.user.fullName}!`);
  };

  return (
    <>
      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(content) => {
          console.log("User posted:", content);
          // You can send this to your backend here
        }}
      />
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 backdrop-blur-md bg-opacity-90">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600">Blog8</h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Profile button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Write a Post
            </button>
            <button
              onClick={handleGetProfile}
              className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200"
            >
              Profile
            </button>

            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="px-5 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-4 animate-fadeIn">
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
            {/* Profile button */}
            <button
              onClick={getProfile}
              className="mt-6 px-4 py-2 m-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 "
            >
              Profile
            </button>
            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="px-5 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
