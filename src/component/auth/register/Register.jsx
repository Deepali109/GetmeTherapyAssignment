import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
import SignInwithGoogle from "../../SignInwithGoogle";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [agree, setAgree] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!agree) {
      toast.error("You must agree to the terms and conditions to register.", {
        position: "bottom-center",
      });
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          Username: username,
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
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
    <div className="register-box">
      <form onSubmit={handleRegister}>
        <h3>Create your new account</h3>
        <h4>Create an account to start looking for the food you like</h4>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-2 form-check">
          <input
            type="checkbox"
            className="form-check-input custom-checkbox"
            id="termsCheck"
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="termsCheck">
            I Agree with{" "}
            <a href="/terms" style={{ color: " #ff9900" }}>
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" style={{ color: " #ff9900" }}>
              Privacy Policy
            </a>
          </label>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
        <SignInwithGoogle />
        <p className="forgot-password text-right">
          Have an account?{" "}
          <a href="/login" style={{ color: " #ff9900" }}>
            {" "}
            Sign in
          </a>
        </p>

        <ToastContainer />
      </form>
    </div>
  );
}

export default Register;
