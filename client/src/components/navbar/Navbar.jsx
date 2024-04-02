import { useState } from "react";
import "./navbar.scss";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav>
      <div className="left">
        <a className="logo" href="">
          <img src="/logo.svg" alt="logo" />
          <span>Estate</span>
        </a>
        <div className="links">
          <a href="/">
            <span>Home</span>
          </a>
          <a href="/">
            <span>About</span>
          </a>
          <a href="/">
            <span>Contact</span>
          </a>
          <a href="/">
            <span>Agents</span>
          </a>
        </div>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="register">
          Sign up
        </a>
        <div className="menuIcon">
          <img
            onClick={() => setMenu((menu) => !menu)}
            src="/menu.svg"
            alt="menu"
          />
        </div>
        <div className={menu ? "menu active" : "menu"}>
          <a href="/">
            <span>Home</span>
          </a>
          <a href="/">
            <span>About</span>
          </a>
          <a href="/">
            <span>Contact</span>
          </a>
          <a href="/">
            <span>Agents</span>
          </a>

          <a href="/">
            <span>Sign in</span>
          </a>
          <a href="/">
            <span>Sign up</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
