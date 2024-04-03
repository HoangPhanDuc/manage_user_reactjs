import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddUser = () => {
  const [user, setUser] = useState({
    users_name: "",
    address: "",
    phone: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/users-create", user);
      setSuccessMessage("User added successfully!");
      setUser({ users_name: "", address: "", phone: "" });
    } catch (error) {
      setErrorMessage("Error some things happened!");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={updateUser}>
        <div className="w-100 d-flex flex-column align-items-center">
          <div className="h4">Add user</div>
          <div className="w-25 mt-1 d-flex justify-content-between">
            <label htmlFor="user_name">user_name</label>
            <input
              type="text"
              name="user_name"
              value={user.users_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-25 mt-1 d-flex justify-content-between">
            <label htmlFor="address">address</label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-25 mt-1 d-flex justify-content-between">
            <label htmlFor="phone">phone</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button className="mt-2 btn btn-dark" type="submit">
            add user
          </button>
        </div>
      </form>
      <Link to="/users" className="btn btn-primary">
        back
      </Link>
      <div className="text-center">
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default AddUser;
