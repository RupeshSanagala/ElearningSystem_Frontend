import React, { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import HttpService from "../Shared/service/HttpService";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginComp = () => {
  const Email = useRef();
  const Password = useRef();
  const navigate = useNavigate();

  const checkUser = async () => {
    const uid = Email.current.value;
    const upass = Password.current.value;

    try {
      const res = await HttpService.get("/Users"); // Fetch users from backend
      const currentUser = res.data.filter(
        (val) => val.email === uid && val.password === upass
      );

      if (currentUser.length > 0) {
        window.alert("Login Success");
        sessionStorage.setItem("user", uid);
        navigate("/dashboard/home"); // Navigate to dashboard
      } else {
        window.alert("Wrong Credentials");
        Email.current.value = "";
        Password.current.value = "";
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      window.alert("Unable to login. Please try again later.");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="Email"
              ref={Email}
              placeholder="Enter your Email"
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
              placeholder="Enter your Password"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={checkUser}
          >
            Login
          </button>
          <div className="mt-3 text-center">
            <span>Did not have an account? </span>
            <Link to="/register" className="text-decoration-none">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComp;
