import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Onborading from "./component/Onborading";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./component/auth/login/Login";
import Register from "./component/auth/register/Register";
import PostLogin from "./component/PostLogin";
import auth from "./component/firebase";
import TrackingPage from "./component/trackingPage/TrackingPage";

function App() {
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  // });

  return (
    <Router>
      <Routes>
        {/* <Route
          path="/"
          element={user ? <Navigate to="/postlogin" /> : <Onborading />}
        /> */}
        <Route path="/" element={<Onborading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/postlogin" element={<PostLogin />} />
        <Route path="/trackingpage" element={<TrackingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
