import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    role: '',
  });

  const [avatar, setAvatar] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('username', form.username);
      formData.append('email', form.email);
      formData.append('password', form.password);
      formData.append('role', form.role);
      if (avatar) formData.append('avatar', avatar);

      const res = await axios.post(
        '/api/auth/register',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

     // console.log(res.data.data);
     
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl mb-4 font-bold">Register</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-3">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2"
          required
        />
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="border p-2"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border p-2"
          required
        />
        <input
          name="role"
          placeholder="Role (eg. user, admin)"
          value={form.role}
          onChange={handleChange}
          className="border p-2"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
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
