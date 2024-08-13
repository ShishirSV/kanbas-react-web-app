import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { useUser } from "../UserContext"; // Import useUser to access UserContext

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setUser: setContextUser } = useUser(); // Get setUser from UserContext

  const signin = async () => {
    try {
      const currentUser = await client.signin(credentials);

      // Set the user in Redux store
      dispatch(setCurrentUser(currentUser));

      // Set the user in UserContext
      setContextUser(currentUser);

      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      {error && <div className="wd-error alert alert-danger">{error}</div>}
      <input
        id="wd-username"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        value={credentials.username || ""}
        className="form-control mb-2"
        placeholder="username"
      />
      <input
        id="wd-password"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        value={credentials.password || ""}
        className="form-control mb-2"
        placeholder="password"
        type="password"
      />
      <button
        id="wd-signin-btn"
        onClick={signin}
        className="btn btn-primary w-100"
      >
        Sign in
      </button>
      <br />
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
    </div>
  );
}
