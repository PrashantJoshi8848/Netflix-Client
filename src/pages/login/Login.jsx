import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className={"logo"}
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1 style={{ fontWeight: "400" }}>Sign In</h1>
          <input type={"email"} placeholder="email or Phone number" />
          <input type={"password"} placeholder="password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix ? <b>Sign Up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPATCHA to ensure you're not a
            bot. <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
