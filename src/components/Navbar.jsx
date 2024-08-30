import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-indigo-500 p-4 flex justify-between items-center shadow-lg">
      <Link
        to="/"
        className="font-bold text-2xl text-white px-4 py-1 rounded-lg  hover:bg-indigo-700 focus:underline"
      >
        Home
      </Link>

      <ul className="flex space-x-6 ml-6">
        <li className="font-medium text-lg">
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            About
          </Link>
        </li>
        <li className="font-medium text-lg">
          <Link
            to="/service"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Service
          </Link>
        </li>
        <li className="font-medium text-lg">
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Contact
          </Link>
        </li>
        <li className="font-medium text-lg">
          <Link
            to="/login"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
