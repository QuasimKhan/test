import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import Cookies from 'js-cookie'; // Import js-cookie
import swal from 'sweetalert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const authCookies = Cookies.get('auth');
    if (authCookies || auth.user) {
      navigate('/');
    }
  }, [auth, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
        email,
        password,
      });
      if (res.data.success) {
        toast.success(res.data.message);

        // Set cookie with the token
        Cookies.set('auth', JSON.stringify({ token: res.data.token}), { expires: 7 });

        setAuth({ ...auth, token: res.data.token, user: res.data.user });
        localStorage.setItem('auth', JSON.stringify(res.data)); 
        navigate('/'); // Redirect to a different page after login
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <Layout title="Login">
      <div className="min-h-screen bg-gray-800 dark:bg-gray-900 flex items-center justify-center py-6 px-4">
        <div className="w-full max-w-lg bg-gray-900 dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-white dark:text-gray-100 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-600 dark:border-gray-500 rounded-lg bg-gray-800 dark:bg-gray-700 text-gray-100 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-600 dark:border-gray-500 rounded-lg bg-gray-800 dark:bg-gray-700 text-gray-100 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
