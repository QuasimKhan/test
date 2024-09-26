import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (  
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 dark:bg-gray-900">
        <h1 className="text-7xl font-bold text-red-600 dark:text-red-400">404</h1>
        <h2 className="text-3xl mt-4 font-semibold text-gray-800 dark:text-gray-200">Oops! Page Not Found</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Sorry, the page you are looking for doesn’t exist.
        </p>
        <Link to="/" className="mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full text-lg transition">
          Go Back to Home
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
