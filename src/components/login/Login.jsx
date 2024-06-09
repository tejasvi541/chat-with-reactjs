import { useState } from "react";
import "./login.css";
const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (!e.target.files[0]) {
      const file = e.target.files[0];
      console.log(file);
      const url = URL.createObjectURL(file);
      console.log(url);
      setAvatar({ file, url });
    }
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back!!</h2>
        <form action="">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="seperator"></div>
      <div className="item">
        <h2>Create an Account!</h2>
        <form action="">
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            {console.log(avatar.url)} Upload an Image
          </label>
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
