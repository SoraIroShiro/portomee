import styled from "@emotion/styled";

export const ContactWrapper = styled.section`
  position: relative;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  width: 100%;

  span {
    font-size: 1.05rem;
    font-weight: 600;
  }

  .contact-email {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ContactActions = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  justify-content: center;
`;
