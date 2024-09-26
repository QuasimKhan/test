import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useAuth } from '../context/auth';
import Cookies from 'js-cookie';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

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
    // Handle form submission logic here
    try {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {
            name,
            email,
            password,
            phone,
            address
            
        })
        if(res.data.success){
            swal("Good job!", res.data.message, "success");
            toast.success(res.data.message)
            navigate('/login')
        }
        else{
            swal("Error!", res.data.message, "error");
            toast.error(res.data.message)
        }
    } catch (error) {
       console.log(error);
       toast.error(error.message)
        
    }
  };

  return (
    <Layout title="Register">
      <div className="min-h-screen bg-gray-800 dark:bg-gray-900 flex items-center justify-center py-6 px-4">
        <div className="w-full max-w-lg bg-gray-900 dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-white dark:text-gray-100 text-center">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-600 dark:border-gray-500 rounded-lg bg-gray-800 dark:bg-gray-700 text-gray-100 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
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
            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-600 dark:border-gray-500 rounded-lg bg-gray-800 dark:bg-gray-700 text-gray-100 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                id="address"
                name="address"
                placeholder="Address"
                rows="3"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 border border-gray-600 dark:border-gray-500 rounded-lg bg-gray-800 dark:bg-gray-700 text-gray-100 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
