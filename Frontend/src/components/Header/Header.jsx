import { Link } from "react-router-dom";

function Header({ isLoggedIn, logout }) {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        Service Connect
      </div>

      <nav className="flex items-center gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-purple-600 transition">Home</Link>
        <Link to="/createProvider" className="hover:text-purple-600 transition">Services</Link>
        <Link to="/testimonials" className="hover:text-purple-600 transition">Testimonials</Link>
        <Link to="/provider" className="hover:text-purple-600 transition">Provider</Link>
        <Link to="/review" className="hover:text-purple-600 transition">Review</Link>
        <Link to="/profile" className="hover:text-purple-600 transition">Profile</Link>

        {isLoggedIn ? (
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-semibold shadow transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow transition"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
