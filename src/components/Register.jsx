import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const [alert, setAlert] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const result = await axios.post("http://localhost:3001/register", data);
  //       if (result.status === 201) {
  //         setAlert("Register successful!");
  //       } else if (result.status === 409) {
  //         setAlert("Register failed!");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3001/register", data);
      if (result.status === 201) {
        // setAlert("Register successful!");
        alert("register successful!");
      } else if (result.status === 409) {
        // setAlert("Register failed!");
        alert("register failed!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="text-center">
          <div className="h4">Register</div>
          <div className="d-flex flex-column justify-content-around">
            <div>
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>
            {/* <div>
              <label htmlFor="">Confirm password</label>
              <input
                type="password"
                name="password"
                value={cPassword}
                onChange={handleChange}
                required
              />
            </div> */}
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <Link to="/login" className="btn btn-dark">
          back to Login
        </Link>
      </div>
      <div className="text-center">
        {alert && <p className="success-message">{alert}</p>}
      </div>
    </div>
  );
};

export default Register;
