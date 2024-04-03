import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");

  const [user, setUser] = useState({
    users_name: "",
    address: "",
    phone: "",
  });

  const fetchUser = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/users/${id}`);
      setUser(...res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3001/users-update/${id}`,
        user
      );
      if (res.status === 200) {
        setMessage(res.data.mess);
        console.log(res.data.user);
      } else {
        console.log("Error updating user!");
      }
    } catch (error) {
      setMessage(error.res.data.mess);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="container">
      <form onSubmit={updateUser}>
        <div className="w-100 mt-3 d-flex flex-column align-items-center">
          {/* <div className="w-25 mt-1 d-flex">id: {id}</div> */}
          <div className="w-25 mt-1 d-flex justify-content-between">
            <label htmlFor="user_name">Username:</label>
            <input
              type="text"
              name="user_name"
              value={user.users_name}
              onChange={handleChange}
            />
          </div>
          <div className="w-25 mt-1 d-flex justify-content-between">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
            />
          </div>
          <div className="w-25 mt-1 d-flex justify-content-between">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          </div>
          <button className="mt-2 btn btn-dark" type="submit">
            Update
          </button>
        </div>
      </form>
      <div className="text-center">
        {message && <p>{message}</p>}
      </div>
      <Link className="text-decoration-none" to="/users">
        back to user
      </Link>
    </div>
  );
};

export default UpdateUser;
