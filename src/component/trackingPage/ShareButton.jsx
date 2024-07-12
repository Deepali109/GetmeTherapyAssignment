import React from "react";
import { useLocation } from "react-router-dom";
import "./ShareButton.css";
import { auth } from "../firebase";

const ShareButton = ({ speed }) => {
  const location = useLocation();
  const shareUrl = `${window.location.origin}${location.pathname}?speed=${speed}`;

  const handleShare = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("URL copied to clipboard!");
  };

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div className="share-button-container">
      <button onClick={handleShare}>Share</button>
      {/* <input type="text" value={shareUrl} readOnly /> */}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default ShareButton;
