import React from 'react';
import { AuthProvider, useAuth } from '../context/AuthContext';
import AuthNavbar from '../components/auth/AuthNavbar';
import LoginForm from '../components/auth/LoginForm';
import Dashboard from '../components/auth/Dashboard';

function PageContent() {
  const { user } = useAuth();

  return (
    <div className="container py-4">
      <AuthNavbar />
      <div className="mt-4">
        {user ? <Dashboard /> : <LoginForm />}
      </div>
    </div>
  );
}

export default function Ex02LoginPage() {
  return (
    <AuthProvider>
      <PageContent />
    </AuthProvider>
  );
}
