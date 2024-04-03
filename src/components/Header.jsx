import { Link } from "react-router-dom";

const Header = () => {
  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="container mt-2">
      <div className="p-0 m-0 d-flex justify-content-end">
        <Link
          className="btn btn-dark text-white text-decoration-none"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="ms-1 btn btn-dark text-white text-decoration-none"
          to="/register"
        >
          Register
        </Link>
        <Link
          onClick={() => {
            removeToken();
          }}
          className="ms-1 btn btn-dark text-white text-decoration-none"
          to="/"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Header;
