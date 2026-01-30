import styled from "@emotion/styled";

export const DetailContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 7rem 2rem 4rem;
  min-height: 100vh;
  background: var(--bg);
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 6rem 1.5rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 5rem 1rem 2rem;
  }
`;

export const BackButton = styled.button`
  background: var(--surface-2);
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  cursor: pointer;
  margin-bottom: 2rem;
  font-weight: 600;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const ProjectHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: clamp(2.1rem, 4vw, 2.9rem);
    margin-bottom: 1rem;
    color: var(--text);
  }

  p {
    font-size: 1.05rem;
    color: var(--muted);
    max-width: 820px;
    margin: 0 auto;
    line-height: 1.7;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-width: 860px;
  height: auto;
  border-radius: 18px;
  margin: 2rem auto;
  display: block;
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const ProjectSection = styled.div`
  margin: 3rem 0;

  h2 {
    color: var(--text);
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: var(--muted);
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  ul {
    color: var(--muted);

    li {
      margin-bottom: 0.6rem;
    }
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 1rem 0;
  justify-content: center;
`;

export const TechBadge = styled.span`
  background: var(--surface-2);
  color: var(--muted);
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const Screenshots = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1.5rem 0;
  width: 100%;

  img {
    width: 100%;
    max-width: 900px;
    height: auto;
    object-fit: contain;
    border-radius: 18px;
    box-shadow: var(--shadow-sm);
    border: 1px solid rgba(255, 255, 255, 0.08);
    margin: 0 auto;
    display: block;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: zoom-in;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 768px) {
      border-radius: 12px;
      
      &:hover {
        transform: scale(1.01);
      }
    }
  }
`;

export const ScreenshotSection = styled(ProjectSection)`
  margin: 4rem 0;

  h2 {
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    margin: 3rem 0;
    
    h2 {
      font-size: 1.4rem;
      margin-bottom: 1.5rem;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  margin: 3rem 0;
  flex-wrap: wrap;
`;

export const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const LightboxContent = styled.div`
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  animation: scaleIn 0.3s ease;

  @keyframes scaleIn {
    from { 
      opacity: 0;
      transform: scale(0.8);
    }
    to { 
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    max-height: 80vh;
    border-radius: 8px;
  }
`;

export const LightboxClose = styled.button`
  position: absolute;
  top: -3rem;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: -2.5rem;
    font-size: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const LightboxNavButton = styled.button`
  position: absolute;
  top: 50%;
  ${props => props.position}: -4rem;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 2.5rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  font-weight: 300;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    ${props => props.position}: -2rem;
    font-size: 2rem;
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 576px) {
    ${props => props.position}: 0.5rem;
    top: auto;
    bottom: 1rem;
    transform: none;
    font-size: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`;
