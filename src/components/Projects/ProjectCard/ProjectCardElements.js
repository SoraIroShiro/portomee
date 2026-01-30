import styled from "@emotion/styled";

export const Card = styled.article`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 2.8rem;
  grid-template-columns: 1fr;
  padding: 2rem;
  border-radius: var(--radius-xl);
  background: var(--surface);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-sm);

  @media (min-width: 992px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

export const CardLeft = styled.div`
  justify-self: center;
  width: 100%;

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.9rem;

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text);
  }

  p {
    font-weight: 400;
    max-width: 95%;
    margin-top: 4px;
    margin-bottom: 0.4rem;
    color: var(--muted);
    line-height: 1.6;
    text-align: left;
  }
`;

export const CardTag = styled.span`
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--muted);
  font-weight: 600;
`;

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const TechCard = styled.div`
  border-radius: 999px;
  background-color: var(--surface-2);
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--muted);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;
