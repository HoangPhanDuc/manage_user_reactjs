import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3001/login", data);
      console.log(result);
      if (result.status === 200) {
        localStorage.setItem("token", result.data.admin.token);
        navigate("/users");
        // alert("Login successful!");
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="text-center">
          <div className="h4">Login</div>
          <div className="d-flex flex-column justify-content-between">
            <div>
              <label htmlFor="">UserName</label>
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
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
