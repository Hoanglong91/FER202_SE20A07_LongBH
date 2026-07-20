import React, { createContext, useContext, useState } from 'react';
import USERS from '../data/users';

// TODO 1: Tạo AuthContext bằng createContext()
const AuthContext = createContext(null);

// TODO 2: Tạo AuthProvider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Hàm login(email, password): giả lập API call 800ms
  const login = (email, password) => {
    setLoading(true);
    setError('');
    setTimeout(() => {
      const foundUser = USERS.find(
        (u) => u.email === email && u.password === password
      );
      if (foundUser) {
        setUser(foundUser);
        setError('');
      } else {
        setError('Email hoặc mật khẩu không đúng.');
      }
      setLoading(false);
    }, 800);
  };

  // Hàm logout(): reset user và error
  const logout = () => {
    setUser(null);
    setError('');
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// TODO 3: Tạo custom hook useAuth()
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined || context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
