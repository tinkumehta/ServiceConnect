import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Providers() {
  const [providers, setProviders] = useState([]);
  const [search, setSearch] = useState('');

  const fetchProviders = async () => {
    const url = search ? `/api/providers/search?category=${search}` : `/api/providers`;
    const res = await axios.get(url);
    console.log(res.data.data);
    setProviders(res.data.data);
  };

  useEffect(() => {
    fetchProviders();
  }, [search]);

  return (
    <div className="p-3 w-full ">
      <h2 className="text-xl mb-4 flex justify-center ">Service Providers</h2>
      
      
      <input 
       placeholder="Search category..." 
       value={search} 
       onChange={(e) => setSearch(e.target.value)} 
       className="border text-black w-85 p-2 mb-4 rounded-2xl  bg-cyan-300 " 
       />
      
        
      <ul className="space-y-2">
       <div className="flex flex-wrap-reverse">
        {providers.map((p) => (
           <div className="rounded-2xl  flex m-10 p-4 gap-2 justify-center bg-amber-500  ">
          <li key={p._id} className=" p-2">
            <h3 className="font-bold flex justify-center  ">{p.name}</h3>
            <p>Category: {p.category}</p>
            <p>Contact: {p.contact}</p>
            <p>Location: {p.location}</p>
            <p>{p.description}</p>
            <p>Id {p._id}</p>
          </li>
          </div>
        ))}
       </div>
      </ul>
     
      </div>
   
    
  );
}