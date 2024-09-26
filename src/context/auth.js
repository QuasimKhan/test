import React, { useState,useEffect, useContext, createContext } from 'react';

// Create the AuthContext with a default value
const AuthContext = createContext();

// AuthProvider component to wrap around the app
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: ''
  });

  useEffect(() => {
    const data = localStorage.getItem('auth');
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
