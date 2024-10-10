import { useState } from "react";
import {Link} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container">
      
        <div>
          <h1>Log In</h1>
          <form method="POST" action="/api/log-in">
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
              ></input>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              ></input>
            </div>
            <button type="submit">Log In</button>
          </form>
          <p>Don&#39;t have an account? <Link to ='signup' className="authLink">Sign up</Link></p>
        </div>
     
    </div>
  );
}

export default App;
