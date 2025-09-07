import { useState, useContext } from 'react';
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
    role: '',
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
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h2 className="text-2xl mb-6 font-bold text-center text-gray-800">
        Register
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          name="role"
          placeholder="Role (eg. user, admin)"
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          className="border border-gray-300 p-2 rounded-lg cursor-pointer bg-gray-50"
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 transition text-white py-3 px-4 rounded-lg font-semibold"
        >
          Register
        </button>
      </form>

      {avatar && (
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-2">Preview:</p>
          <img
            src={URL.createObjectURL(avatar)}
            alt="Avatar Preview"
            className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
          />
        </div>
      )}
    </div>
  );
}
