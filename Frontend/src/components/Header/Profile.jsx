import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCurrentUser = async () => {
    try {
      const res = await axios.get('/api/auth/current-user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setUser(res.data.data);
     // console.log(res.data.data.avatar );
      
    } catch (err) {
      console.error(err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Not logged in</p>;

  return (
    <div className="p-4">
      <h1>Welcome, {user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <img
        src={user.avatar}
        alt="Avatar"
        className="w-32 h-32 rounded-full object-cover"
      />
    </div>
  );
}
