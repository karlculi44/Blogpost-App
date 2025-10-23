import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import Post from "../components/PostComponent.jsx";

const DashBoard = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("/api/users");
        setUsers(res.data);
      } catch (error) {
        console.error(
          "Error fetching users:",
          error.response?.data?.message || error.message
        );
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6 pt-20">
        <Post />
      </div>
    </>
  );
};

export default DashBoard;
