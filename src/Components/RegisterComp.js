import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterComp = () => {
  const FirstName = useRef();
  const LastName = useRef();
  const Email = useRef();
  const Password = useRef();
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault(); // Prevent form submission default behavior

    const userData = {
      firstName: FirstName.current.value.trim(),
      lastName: LastName.current.value.trim(),
      email: Email.current.value.trim(),
      password: Password.current.value.trim(),
    };

    // Validation: Ensure all fields are filled
    if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
      window.alert("All fields are required.");
      return;
    }

    try {
      // Send POST request to the backend API
      await axios.post("https://localhost:7206/api/Users", userData);
      window.alert("Registered Successfully!");
      navigate("/login"); // Redirect to the login page
    } catch (error) {
      console.error("Error during registration:", error);
      window.alert("Registration failed. Please try again.");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="FirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="FirstName"
              ref={FirstName}
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="LastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="LastName"
              ref={LastName}
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              ref={Email}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="Password"
              ref={Password}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterComp;
