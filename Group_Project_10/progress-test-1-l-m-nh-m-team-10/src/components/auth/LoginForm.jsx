import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function LoginForm() {
  const { login, loading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="card shadow border-0 rounded-3 p-4 mx-auto" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-4 fw-bold">Đăng nhập</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-start">
          <label htmlFor="email" className="form-label fw-semibold">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4 text-start">
          <label htmlFor="password" className="form-label fw-semibold">Mật khẩu</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <div className="alert alert-danger py-2 small text-center mb-3 fw-medium">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary w-100 py-2 fw-semibold shadow-sm"
          disabled={loading}
        >
          {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </button>
      </form>
    </div>
  );
}
