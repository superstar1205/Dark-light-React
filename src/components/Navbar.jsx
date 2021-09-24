import React, {useContext} from "react";
import {useEffect} from "react";
import darkContext from "../context/DarkContext";

const Navbar = props => {
  const dark = useContext(darkContext);
  useEffect(() => {}, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.obj.theme.darkTheme === false ? "light" : "dark"
        } bg-${props.obj.theme.darkTheme === false ? "light" : "dark"}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Darkight
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
          <button
            onClick={props.click}
            className={`btn btn-${
              props.obj.theme.darkTheme === false ? "dark" : "light"
            }`}
          >
            {props.obj.theme.darkTheme === false ? "Dark Theme" : "Light Theme"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
