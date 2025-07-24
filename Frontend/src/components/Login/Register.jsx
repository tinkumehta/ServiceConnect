import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Register() {
  const navigate = useNavigate();
const { register } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    role : '',
  });
  const [avatar, setAvatar] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) =>
      formData.append(key, value)
    );
    if (avatar) formData.append('avatar', avatar);

    await register(formData);
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl mb-4 font-bold">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="name"
          placeholder="Name"
         
          onChange={handleChange}
          className="border p-2"
          required
        />
        <input
          name="username"
          placeholder="Username"
          
          onChange={handleChange}
          className="border p-2"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          
          onChange={handleChange}
          className="border p-2"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          
          onChange={handleChange}
          className="border p-2"
          required
        />
        <input
          name="role"
          placeholder="Role (eg. user, admin)"
          
          onChange={handleChange}
          className="border p-2"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          className="border p-2"
        />

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded"
        >
          Register
        </button>
      </form>

      {avatar && (
        <div className="mt-4">
          <p>Preview:</p>
          <img
            src={URL.createObjectURL(avatar)}
            alt="Avatar Preview"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
