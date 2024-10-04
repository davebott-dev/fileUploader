import "../App.css";

function Signup() {
  return (
    <div className="container">
    <div>
      <h1>Sign Up</h1>
      <form method="POST" action="/api">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter a username"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter a password"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="checkPassword">Re-enter Password</label>
          <input
            type="text"
            name="checkPassword"
            id="checkPassword"
            placeholder="Re-enter password"
            required
          ></input>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
  );
}

export default Signup;
