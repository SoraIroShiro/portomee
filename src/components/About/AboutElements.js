import styled from "@emotion/styled";

export const ContactWrapper = styled.section`
  position: relative;
`;

export const Image = styled.img`
  max-width: 160px;
  margin: 0 auto;
  border-radius: 18px;
  aspect-ratio: 1;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.12);
  box-shadow: var(--shadow-sm);
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  gap: 1.2rem;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90px;
  min-width: 90px;
  padding: 0.6rem 0.3rem;
  border-radius: 12px;
  background: var(--surface-2);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const TechImg = styled.img`
  height: 34px;
  width: 34px;
  padding-bottom: 8px;
`;

export const TechName = styled.div`
  font-size: 0.8rem;
  text-align: center;
  color: var(--muted);
`;
