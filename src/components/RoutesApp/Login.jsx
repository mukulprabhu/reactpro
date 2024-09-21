import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (user && user.userid === "Admin" && user.password === "1234") {
      setIsAuthenticated(true);
    } else setIsAuthenticated(false);

    navigate("/");
  };

  return (
    <div>
      <span>
        User Name :
        <input
          type="text"
          onChange={(e) => setUser({ ...user, userid: e.target.value })}
        />
      </span>
      <span>
        Password :
        <input
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </span>
      <button type="submit" onClick={handleClick} defaultChecked={true}>
        Ok
      </button>
      <button type="reset">Reset</button>
    </div>
  );
};

export default Login;
