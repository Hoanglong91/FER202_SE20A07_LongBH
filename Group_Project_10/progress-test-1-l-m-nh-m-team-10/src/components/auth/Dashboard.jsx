import React from 'react';
import { useAuth } from '../../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="card shadow border-0 rounded-3 p-4 mx-auto" style={{ maxWidth: '500px' }}>
      <h3 className="fw-bold mb-3">Dashboard</h3>
      <hr />
      <div className="text-start">
        <div className="row mb-2">
          <label className="col-sm-4 col-form-label fw-semibold text-secondary">Họ và tên:</label>
          <div className="col-sm-8">
            <input
              type="text"
              readOnly
              className="form-control-plaintext fw-bold text-dark"
              value={"Long"}
            />
          </div>
        </div>
        <div className="row mb-2">
          <label className="col-sm-4 col-form-label fw-semibold text-secondary">Email:</label>
          <div className="col-sm-8">
            <input
              type="text"
              readOnly
              className="form-control-plaintext text-dark"
              value={"blong2294@gmail.com"}
            />
          </div>
        </div>
        <div className="row mb-2">
          <label className="col-sm-4 col-form-label fw-semibold text-secondary">Vai trò:</label>
          <div className="col-sm-8">
            <input
              type="text"
              readOnly
              className="form-control-plaintext text-dark"
              value={user.role}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

