import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <div className="text-center">
        <Link className="text-decoration-none" to="/">
          go to dashboard
        </Link>
      </div>
    </div>
  );
};

export default Footer;
