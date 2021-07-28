import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/ncclymer" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/nick-clymer-3148b4203/"
            target="blank"
          >
            <li>
              <FaLinkedin />
            </li>
          </a>
          <a href="https://stackoverflow.com/users/story/14991559" target="blank">
            <li>
              <FaStackOverflow />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
