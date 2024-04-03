import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="m-auto">
        <div className="h3 w-100 text-center">Dashboard</div>
        <div className="m-0 p-0 w-auto">
          <Link to="/users" className="text-decoration-none text-light btn btn-dark">User manager</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
