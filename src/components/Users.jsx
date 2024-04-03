import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [user, setUser] = useState([]);
  const token = localStorage.getItem("token");

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3001/users", {
        headers: {
          Authorization: `${token}`,
        },
      });
      setUser(res.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users-delete/${id}`);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>address</th>
              <th>phone</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.users_name}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td>
                  <Link
                    className="btn btn-secondary"
                    to={`/update-user/${item.id}`}
                  >
                    update
                  </Link>
                  <button
                    className="ms-1 btn btn-danger"
                    onClick={() => {
                      deleteUser(item.id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Link to="/add-user" className="btn btn-dark">
          add user
        </Link>
      </div>
    </div>
  );
};

export default Users;
