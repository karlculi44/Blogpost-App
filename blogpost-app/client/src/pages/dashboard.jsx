import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [users, setUsers] = useState(null);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

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

  const getProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      setProfile(res.data);
      console.log("Profile data:", res.data);
    } catch (error) {
      console.error(
        "Error fetching profile:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleLogout = async () => {
    try {
      const logout = await axios.post(
        "/api/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log(logout.data.msg);
      localStorage.removeItem("token");
      alert("Logout Successful");
      navigate("/");
    } catch (error) {}
  };

  return (
    <>
      <button
        className="px-5 py-2 m-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200"
        onClick={handleLogout}
      >
        Logout
      </button>

      <div className="flex justify-center">
        <div className="max-w-[80%]">
          <h1 className="font-bold">Beta Users</h1>
          {users &&
            users.map((user) => (
              <div
                key={user.id || user.username}
                className="bg-white m-1 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {user.fullName}
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  @{user.username}
                </p>
              </div>
            ))}
        </div>
      </div>

      <button
        onClick={getProfile}
        className="mt-6 px-4 py-2 m-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 "
      >
        Profile
      </button>

      {profile ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Welcome, {profile?.user?.fullName || "Guest"}!
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Username: {profile?.user?.username || "N/A"}
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DashBoard;
