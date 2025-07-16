import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function CreateProvider() {
  const [form, setForm] = useState({ name: '', category: '', contact: '', location: '', description: '' });
 const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/providers', form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
   
      navigate("/")
    } catch (err) {
      alert(err.response.data.message || 'Error');
    }
  };

  return (
    <div className="max-w-[360px] w-full mx-auto bg-[#0d1b2a] rounded-lg shadow-md p-4 mt-3">
      <h2 className="text-xl mb-4 text-white flex justify-center">Add Service Provider</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
        <label class="block mb-2 text-gray-50" for="name"> Name </label>
        <input 
         placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
           className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600 placeholder:text-gray-400 text-white"
         />
           </div>
          <div className="mb-4">
            <label class="block mb-2 text-gray-50" for="name"> 
              Category 
              </label>
        <input 
         placeholder="Category"
         value={form.category} 
         onChange={(e) => setForm({ ...form, category: e.target.value })} 
         className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600 placeholder:text-gray-400 text-white"
          />
          </div>
        <div className="mb-4">
          <label class="block mb-2 text-gray-50" for="name"> Contact </label>
        <input 
         placeholder="Contact" 
         value={form.contact}
         onChange={(e) => setForm({ ...form, contact: e.target.value })}
          className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600 placeholder:text-gray-400 text-white"
         />
         </div>
         <div className="mb-4">
          <label class="block mb-2 text-gray-50" for="name"> Location </label>
        <input 
         placeholder="Location" 
         value={form.location} 
         onChange={(e) => setForm({ ...form, location: e.target.value })} 
         className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600 placeholder:text-gray-400 text-white"
          />
        </div>
        <div className="mb-4">
        <label class="block mb-2 text-gray-50" for="name"> Message </label>
        <textarea 
         placeholder="Your Message" 
         value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })} 
          className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600 placeholder:text-gray-400 text-white">
          </textarea>
          </div>
        <div className="mb-4">
        <button 
        type="submit"
        className="w-full bg-[#F7AB0A] text-gray-700 font-semibold p-2 rounded transition-all hover:bg-[#FFC857]">
          Add
        </button>
      </div>
      </form>
      </div>
   
  );
}