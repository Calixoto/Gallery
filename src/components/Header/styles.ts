import styled from "styled-components";

export const Container = styled.nav`
  max-width: 1366px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 3rem;
  padding: 1rem 0;

  .containerUser {
    button {
      border: none;
      background: var(--green);
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;

      transition: all 0.2s linear;

      &:hover {
        filter: brightness(1.1);
      }
    }
  }
`;
