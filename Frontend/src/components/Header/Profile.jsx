import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-4">
      <h1>My Profile</h1>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <img src={user.avatar} alt="Avatar" className="w-32 h-32 rounded-full" />
    </div>
  );
}
