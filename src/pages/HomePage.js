import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { useAuth } from '../context/auth'; // Ensure the import path is correct

const HomePage = () => {
  const { auth, setAuth } = useAuth(); // Destructure the context object

  return (
    <Layout>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;
