import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="container">
      <nav className="navbar bg-danger mb-5 rounded">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <h3 className="text-light ms-2">Marvel Characters</h3>
          </a>

          <div className=" navbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/random-character">
                  <h4 className="text-light me-2">Generate Character</h4>
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
