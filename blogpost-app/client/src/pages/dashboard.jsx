import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

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

      <div className="flex justify-center pt-20">
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
    </>
  );
};

export default DashBoard;
