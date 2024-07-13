import React from "react";
import "./PostLogin.css";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

const PostLogin = () => {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await auth.signOut();
      navigate("/login");
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  const handleArrowClick = () => {
    navigate("/trackingpage");
  };

  return (
    <div className="postlogin-container">
      {/* <div className="success-outer-box"> */}
      <div className="success-container">
        <Zoom>
          <div className="icon-container">
            <div className="icon">
              <div className="checkmark">✔️</div>
            </div>
          </div>
        </Zoom>
        <h3>Login Successful</h3>

        <button className="tracking-button" onClick={handleArrowClick}>
          Go to Tracking Screen
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default PostLogin;
