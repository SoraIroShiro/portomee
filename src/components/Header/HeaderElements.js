import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  background: rgba(20, 24, 36, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  height: 64px;
  padding: 0 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 1.2rem;
  z-index: 10;
`;

export const NavLink = styled(ScrollLink)`
  color: var(--muted);
  display: flex;
  font-size: 0.95rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text);
  }
`;

export const Logo = styled(ScrollLink)`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 700;
  font-size: 1rem;
  color: var(--text);
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: var(--text);
  font-size: 1.4rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
