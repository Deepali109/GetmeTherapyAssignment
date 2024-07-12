import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
// import SignInwithGoogle from "./signInWIthGoogle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignInwithGoogle from "../../SignInwithGoogle";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/postlogin";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="login-box">
      {/* <div className="form-content"> */}
      <form onSubmit={handleSubmit}>
        <h3>Login to your account</h3>
        <h4>Please sign in to your account</h4>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </div>
        <SignInwithGoogle />
        <p className="forgot-password text-right">
          Dont't have an account ?{" "}
          <a href="/register" style={{ color: " #ff9900" }}>
            Register
          </a>
        </p>

        <ToastContainer />
      </form>
      {/* </div> */}
    </div>
  );
}

export default Login;
