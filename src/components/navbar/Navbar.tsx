import { Link, useLocation } from "react-router-dom";
import "../../styles/components/Navbar.scss";

const Navbar = () => {
  const location = useLocation();

  const isHomeSelected = location.pathname === "/";
  const homeIcon = isHomeSelected
    ? "./icon/select-home.svg"
    : "./icon/home.svg";

  const isRegisterSelected = location.pathname === "/register";
  const registerIcon = isRegisterSelected
    ? "./icon/select-register.svg"
    : "./icon/register.svg";

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="./icon/logo.svg" alt="logo" />
        <h1>MemoryMap</h1>
      </div>
      <div className="navbar-search-box">
        <img src="./icon/search.svg" alt="search" />
        <input type="text" placeholder="검색" />
      </div>
      <div className="navbar-menu">
        <Link to="/">
          <img src={homeIcon} alt="home" />
        </Link>
        <Link to="/register">
          <img src={registerIcon} alt="register" />
        </Link>
        <img src="./icon/login.svg" alt="login" />
      </div>
    </div>
  );
};

export default Navbar;
