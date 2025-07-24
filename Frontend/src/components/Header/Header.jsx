import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Header() {
   const { user, logout, loading } = useContext(AuthContext);
   if (loading) return null;

    return (
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        Service Connect
      </div>
    <nav className="flex items-center gap-6 text-gray-700 font-medium">
      <Link to="/" className="hover:text-purple-600 transition">Home</Link>
        <Link to="/createProvider" className="hover:text-purple-600 transition">Services</Link>
        <Link to="/testimonials" className="hover:text-purple-600 transition">Testimonials</Link>
        {/* <Link to="/provider" className="hover:text-purple-600 transition">Provider</Link> */}
        <Link to="/review" className="hover:text-purple-600 transition">Review</Link>
       

      {user ? (
        <div className="flex gap-4 items-center">
          <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
          <span>{user.username}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
    </header>
  );
}

export default Header;
