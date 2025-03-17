import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css"

const LoginPage = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
//   console.log(user,"user")
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === user.userEmail && password === user.password){
        alert("login successfull!" )
        navigate("/chatpage");
    }

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
        <input type="submit" value="LogIn" />
      </form>
      <p>
        New user can{" "}
        <span>
          <Link to="/signup">SignUp</Link>
        </span>{" "}
        here!
      </p>
    </div>
  );
};

export default LoginPage;
