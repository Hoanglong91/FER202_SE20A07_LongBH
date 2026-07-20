import { useAuth } from '../../context/AuthContext';

export default function AuthNavbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 rounded-3 mb-4 shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="navbar-brand fw-bold text-info">Auth Portal</span>
        <div className="d-flex align-items-center gap-3">
          {user ? (
            <>
              <span className="text-light">Xin chào, {user.name}</span>
              <button
                className="btn btn-outline-danger btn-sm px-3 rounded-pill fw-semibold"
                onClick={logout}
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <span className="text-secondary fw-semibold">Chưa đăng nhập</span>
          )}
        </div>
      </div>
    </nav>
  );
}
