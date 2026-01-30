import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="home" smooth={true} duration={500} offset={-40}>
          <img src="/me/SoraLogo..png" alt="logo" />
          <span>Vii_Dev</span>
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true} duration={500} offset={-40}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true} duration={500} offset={-40}>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true} duration={500} offset={-40}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn btn-shadow"
            href="/resume/resume_fiqi.pdf"
            download="resume_fiqi.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
