import { useEffect, useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const json = await response.json();

      if (response.ok) {
        setUsers(json);
      }
    }

    fetchUsers();
  }, []);

  return (
    <>
      {users && users.map(user => (
        <div key={user.id || user.username} className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {user.fullName}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">@{user.username}</p>
        </div>
      ))}
    </>
  );
}

export default Home
