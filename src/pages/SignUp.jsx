import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate,Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails= {
        userEmail : email,
        password: password
    }
    console.log("Email:", email, "Password:", password);
    localStorage.setItem("user" , JSON.stringify(userDetails));
    alert('signUp successfull!')
    navigate("/")

  };

  return (
    <div className="container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/ChatGPT-Logo.png/1200px-ChatGPT-Logo.png?20230814075517"
        alt="logo"
        width="200px"
        height="100px"
      />
      <h1>Get Started</h1>
      <p>
        User can{" "}
        <span>
          <Link to="/">LogIn</Link>
        </span>{" "}
        here!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <input type="submit" value="SignUp" />
      </form>
    </div>
  );
};

export default SignUp;
