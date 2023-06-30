import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="container">
      <nav className="navbar ">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            Marvel Characters
          </a>

          <div className=" navbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/random-character">
                  Generate Character
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
