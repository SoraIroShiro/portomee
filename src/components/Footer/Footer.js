import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: var(--bg);
`;

function Footer() {
  return (
    <FooterSection>
      <div className="Container FooterInner">
        <span>Designed and built by Fiqi Fahrudillah.</span>
        <div className="FooterLinks">
          <a href="https://github.com/SoraIroShiro" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/fiqi-fahrudillah-5bbb51311" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </FooterSection>
  );
}

export default Footer;
