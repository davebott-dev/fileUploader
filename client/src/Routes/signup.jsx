import "../App.css";

function Signup() {
  return (
    <div className="container">
    <div>
      <h1>Sign Up</h1>
      <form method="POST" action="/api">
      <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          ></input>
        </div>
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
            type="password"
            name="password"
            id="password"
            placeholder="Enter a password"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="checkPassword">Re-enter Password</label>
          <input
            type="password"
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
