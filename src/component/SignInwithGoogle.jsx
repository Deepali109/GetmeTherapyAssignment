import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function SignInwithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      // const user = result.user;
      if (result.user) {
        //   await setDoc(doc(db, "Users", user.uid), {
        //     email: user.email,
        //     firstName: user.displayName,
        //     photo: user.photoURL,
        //     lastName: "",
        toast.success("User logged in Successfully", {
          position: "top-center",
        });

        window.location.href = "/postlogin";
      }
    });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        className="continue-p"
        style={{
          fontSize: "12px",
          textAlign: "center",
          fontWeight: "500",
          color: "rgb(171, 171, 171)",
        }}
      >
        --Or sign in with--
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
          border: "1px solid rgb(218, 218, 218)",
          padding: "8px",
          position: "relative",
          width: "10%",
          borderRadius: "50%",
        }}
        onClick={googleLogin}
      >
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.Fll7WPtNT6jrz1oBP8GbCgHaHj&pid=Api&P=0&h=180"
          width={"25px"}
        />
      </div>
    </div>
  );
}

export default SignInwithGoogle;
