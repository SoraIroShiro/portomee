import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const HeroContainer = styled.section`
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  /* Subtle background gradient for depth */
  background: radial-gradient(ellipse at center, rgba(78, 161, 255, 0.03) 0%, transparent 50%);

  /* Ensure scroll indicator is within viewport */
  min-height: 100vh;
  max-height: 100vh;
  
  @media screen and (max-width: 768px) {
    padding-top: 1rem;
  }
`;

export const HeroWrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 4rem;
  align-items: center;
  flex: 1;
  min-height: 80vh;

  /* Scroll-triggered transform */
  transform: translateY(0);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3.5rem;
    min-height: 70vh;
    padding: 0 1.5rem;
    justify-items: center;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    min-height: 65vh;
    padding: 0 1rem;
    gap: 2.5rem;
    justify-content: center;
    align-content: center;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  text-align: left;
  
  /* Scroll-triggered fade in */
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out 0.3s forwards;

  @media screen and (max-width: 992px) {
    align-items: center;
    text-align: center;
    gap: 1.8rem;
    justify-self: center;
    width: 100%;
    max-width: 600px;
  }

  @media screen and (max-width: 768px) {
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Eyebrow = styled.span`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-weight: 600;
  color: var(--muted);
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.6rem, 4vw, 3.8rem);
  color: var(--text);
  line-height: 1.08;
  padding-bottom: 0.2rem;
  padding-top: 0.2rem;
  
  /* Scroll-triggered character reveal effect */
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out 0.5s forwards;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.05rem;
  color: var(--muted);
  line-height: 1.7;
  max-width: 520px;
  padding-bottom: 0.4rem;
  
  /* Staggered reveal effect */
  opacity: 0;
  transform: translateY(15px);
  animation: fadeInUp 0.6s ease-out 0.7s forwards;
`;

export const RoleText = styled.div`
  font-size: 1rem;
  color: var(--accent-2);
  font-weight: 600;
  padding-top: 0.2rem;
  padding-bottom: 0.4rem;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;

  @media screen and (max-width: 992px) {
    justify-content: center;
    width: 100%;
  }

  @media screen and (max-width: 576px) {
    gap: 1rem;
    justify-content: center;
    width: 100%;
  }
`;

export const HeroHighlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  margin-top: 0.5rem;

  @media screen and (max-width: 992px) {
    justify-content: center;
  }

  @media screen and (max-width: 576px) {
    justify-content: center;
  }
`;

export const HighlightCard = styled.div`
  border-radius: 999px;
  padding: 0.45rem 0.9rem;
  background: var(--surface-2);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--muted);
`;

export const HeroRight = styled.div`
  display: flex;
  justify-content: center;
  
  /* Delayed scroll-triggered fade in */
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  animation: fadeInUpScale 0.8s ease-out 0.6s forwards;

  @keyframes fadeInUpScale {
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export const PortraitCard = styled.div`
  border-radius: 24px;
  padding: 2.5rem;
  background: var(--surface);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-sm);
  display: grid;
  gap: 1.5rem;
  justify-items: center;
  width: min(350px, 100%);

  @media screen and (max-width: 768px) {
    padding: 2rem;
    gap: 1.2rem;
    width: min(320px, 100%);
  }

  @media screen and (max-width: 576px) {
    padding: 1.8rem;
    gap: 1rem;
    width: min(300px, 100%);
  }
`;

export const PortraitImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.12);
  box-shadow: var(--shadow-sm);
  animation: ${float} 6s ease-in-out infinite;

  @media screen and (max-width: 576px) {
    width: 170px;
    height: 170px;
  }
`;

export const PortraitTag = styled.span`
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: rgba(78, 161, 255, 0.16);
  color: var(--accent);
  font-weight: 600;
  font-size: 0.8rem;
`;

export const PortraitMeta = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.5;
`;

const ScrollBounce = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  
  /* Scroll-triggered visibility */
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: opacity 0.4s ease, visibility 0.4s ease, transform 0.3s ease;

  &:hover {
    transform: translateX(-50%) translateY(-3px);
  }

  @media screen and (max-width: 768px) {
    bottom: 1.5rem;
  }

  @media screen and (max-width: 576px) {
    bottom: 1rem;
  }
`;

export const ScrollLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  color: var(--muted);
  font-weight: 600;
  
  /* Enhanced floating style */
  padding: 1rem 1.4rem;
  border-radius: 999px;
  background: rgba(20, 24, 36, 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-sm);
  
  /* Floating animation */
  animation: ${float} 3s ease-in-out infinite;
  
  transition: all 0.3s ease;

  &:hover {
    background: rgba(20, 24, 36, 0.95);
    border-color: rgba(255, 255, 255, 0.12);
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
  }

  img {
    height: 26px;
    width: 26px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: translateY(2px);
  }

  @media screen and (max-width: 576px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.85rem;
    
    img {
      height: 22px;
      width: 22px;
    }
  }
`;
