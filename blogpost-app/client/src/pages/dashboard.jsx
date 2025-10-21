import { useEffect, useState } from 'react';
import axios from 'axios';

const DashBoard = () => {
  const [users, setUsers] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/api/users');
        setUsers(res.data);
      } catch (error) {
        console.error('Error fetching users:', error.response?.data?.message || error.message);
      }
    }

    fetchUsers();
  }, []);

  const getProfile = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get('/api/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(res.data);
      setProfile(res.data);
      console.log('Profile data:', res.data);
    } catch (error) {
      console.error('Error fetching profile:', error.response?.data?.message || error.message);
    }
  };

  return (
    <>

      <div className="flex justify-center">
        <div className="max-w-[80%]">
          {users && users.map(user => (
            <div key={user.id || user.username} className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {user.fullName}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">@{user.username}</p>
            </div>
          ))}
        </div>
      </div>

      <button onClick={getProfile} className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Profile
      </button>

      {profile ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Welcome, {profile?.user?.fullName || 'Guest'}!</h2>
          <p className="text-gray-700 dark:text-gray-300">Username: {profile?.user?.username || 'N/A'}</p>
        </div>
      ) :
        ('')}
    </>
  );
}

export default DashBoard
