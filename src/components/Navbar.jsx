import React, {useContext} from "react";
import {useEffect} from "react";
import darkContext from "../context/DarkContext";

const Navbar = () => {
  const dark = useContext(darkContext);
  useEffect(() => {}, []);

  const handleClick = () => {
    dark.switchTheme();
    console.log("The theme has changed.");
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          dark.theme.darkTheme === false ? "light" : "dark"
        } bg-${dark.theme.darkTheme === false ? "light" : "dark"}`}
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
            onClick={handleClick}
            className={`btn btn-${
              dark.theme.darkTheme === false ? "dark" : "light"
            }`}
          >
            {dark.theme.darkTheme === false ? "Dark Theme" : "Light Theme"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
