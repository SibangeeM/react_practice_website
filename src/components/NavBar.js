import React from "react";
import logo from "../images/logo.svg";
import { pagelinks, socialLinks } from "../data";

const NavBar = () => {
  return (
    <nav className="navbar" >
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pagelinks.map((page) => {
            return (
              <li key={page.id}>
                <a href={page.href} rel="noreferrer" className="nav-link">
                  {" "}
                  {page.text}{" "}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} rel="noreferrer" target="_blank" className="nav-icon">
                  <i className={`fab fa-${link.text}`}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
