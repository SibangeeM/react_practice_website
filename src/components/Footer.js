import React from "react";
import { socialLinks, pagelinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pagelinks.map((page) => {
          return (
            <li key={page.id}>
              <a href={page.href} className="footer-link">
                {page.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={`fab fa-${link.text}`}></i>
              </a>
            </li>
          );
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
