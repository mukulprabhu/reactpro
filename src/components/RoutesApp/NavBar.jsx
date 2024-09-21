import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        {isAuthenticated && <Link to={"/Fruits"}>Fruits</Link>}
        {isAuthenticated && <Link to={"/Receipe"}>Receipe</Link>}
        {!isAuthenticated && <Link to={"/Login"}>Login</Link>}

        {isAuthenticated && (
          <Link
            to=""
            onClick={(e) => {
              setIsAuthenticated(!isAuthenticated);
              navigate("/");
            }}
          >
            Logout
          </Link>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
