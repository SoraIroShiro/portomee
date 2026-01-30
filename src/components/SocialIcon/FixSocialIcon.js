import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";

const SocialContainer = styled.div`
  /* Desktop styling - fixed position on the side */
  @media screen and (min-width: 1001px) {
    position: fixed;
    top: 48%;
    left: 1.5rem;
    transform: translateY(-50%);
    z-index: 5;

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      background: rgba(20, 24, 36, 0.9);
      padding: 0.7rem 0.6rem;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    a {
      font-size: 1.6rem;
      color: var(--muted);
      transition: color 0.2s ease, transform 0.2s ease;

      &:hover {
        color: var(--text);
        transform: translateY(-2px);
      }
    }
  }

  /* Tablet and mobile - completely remove from fixed positioning */
  @media screen and (max-width: 1000px) {
    position: static;
    display: block;
    margin: 2rem auto 1rem;
    padding: 0 1rem;
    text-align: center;
    z-index: auto;

    ul {
      display: inline-flex;
      flex-direction: row;
      justify-content: center;
      gap: 1.2rem;
      background: rgba(20, 24, 36, 0.95);
      padding: 0.8rem 1.5rem;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 999px;
      box-shadow: var(--shadow-sm);
    }

    a {
      font-size: 1.5rem;
      color: var(--muted);
      transition: color 0.2s ease, transform 0.2s ease;

      &:hover {
        color: var(--text);
        transform: translateY(-2px);
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin: 1.5rem auto 0.5rem;
    
    ul {
      gap: 1rem;
      padding: 0.7rem 1.2rem;
    }

    a {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 480px) {
    margin: 1rem auto 0.5rem;
    
    ul {
      gap: 0.8rem;
      padding: 0.6rem 1rem;
    }

    a {
      font-size: 1.2rem;
    }
  }
`;

function FixSocialIcon() {
  return (
    <SocialContainer>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <ul>
          <li className="item">
            <a
              href="https://linkedin.com/in/fiqi-fahrudillah-5bbb51311"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="item">
            <a
              href="https://github.com/SoraIroShiro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </ScrollAnimation>
    </SocialContainer>
  );
}

export default FixSocialIcon;
