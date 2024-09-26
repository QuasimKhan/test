import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Cookies from 'js-cookie';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    // Clear authentication state
    setAuth({ user: null, token: "" });

    // Remove the cookie
    Cookies.remove('auth');

    // Clear localStorage (if used)
    localStorage.removeItem('auth');

    // Redirect to login page
    navigate('/login');
  };

  return (
    <header>
      <nav className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Brand */}
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            E-commerce Brand
          </Link>

          {/* Toggle for mobile view */}
          <button
            className="md:hidden text-gray-900 dark:text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} fa-2x`}></i>
          </button>

          {/* Nav links */}
          <div className={`md:flex md:items-center space-x-6 ${isOpen ? 'hidden' : 'hidden'} md:block`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
              }
            >
              Cart(0)
            </NavLink>

            {!auth.user ? (
              <div className="flex gap-3 md:mt-0">
                <NavLink
                  to="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
                >
                  Register
                </NavLink>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
              >
                Logout
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700`}>
          <div className="container mx-auto px-4 py-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-600 font-semibold py-2'
                  : 'block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors duration-200'
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-600 font-semibold py-2'
                  : 'block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors duration-200'
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-600 font-semibold py-2'
                  : 'block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors duration-200'
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-600 font-semibold py-2'
                  : 'block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors duration-200'
              }
              onClick={toggleMenu}
            >
              Cart(0)
            </NavLink>
            {!auth.user ? (
              <div className="flex flex-col gap-3 mt-4">
                <NavLink
                  to="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 block text-center"
                  onClick={toggleMenu}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200 block text-center"
                  onClick={toggleMenu}
                >
                  Register
                </NavLink>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200 block text-center mt-4"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
