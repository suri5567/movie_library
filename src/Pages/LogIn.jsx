import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { login } from "../Redux/AuthReducer/action";

// Inline styles for the login page
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f0f2f5",
};

const formStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  width: "500px",
  height: "400px",
  textAlign: "center",
  paddingTop: "100px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ddd",
  borderRadius: "4px",
};

const buttonStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "gray",
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer",
};

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const success = await dispatch(login(email, password));
    if (success) {
      navigate("/"); // Navigate to the desired route on successful login
    } else {
      // Handle login failure (e.g., show an error message)
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" style={buttonStyle}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
