import { Routes, Route } from "react-router-dom";
import "./App.css";
import Users from "./components/Users";
import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Header from "./components/Header";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/update-user/:id" element={<UpdateUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
