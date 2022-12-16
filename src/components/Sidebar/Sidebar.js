import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar({ loginURL }) {
  const [hamburger, setHamburger] = React.useState(false);
  const navigate = useNavigate();

  const hamburgerHandler = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://fern.fun/img/fern.fun.png" alt="logo" />
      </div>
      <button
        className={
          "hamburger hamburger--spin" + (hamburger ? " is-active" : "")
        }
        type="button"
        onClick={hamburgerHandler}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div className="nav" style={hamburger ? { display: "block" } : null}>
        <Link to="/">
          <div>
            <img src="/img/home.svg" alt="home" />
            <span>Dashboard</span>
          </div>
        </Link>

        <Link to="/todo">
          <div>
            <img src="/img/list.svg" alt="todo" />
            <span>TODO</span>
          </div>
        </Link>

        <Link to="/cpv">
          <div>
            <img src="/img/palette.svg" alt="cpv" />
            <span>CPV</span>
          </div>
        </Link>

        <a href="https://tools.fern.fun/">
          <div>
            <img src="/img/handyman.svg" alt="cpv" />
            <span>Tools</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
