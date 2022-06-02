import styled from "styled-components";

export const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    input {
      padding: 0.5rem 0.5rem;
      border: 1px solid #d2d2de;
      border-radius: 0.575rem;
      font-size: 1.125rem;
    }

    button {
      border: none;
      background: none;
      cursor: pointer;

      color: #d2d2de;

      transition: all 0.2s linear;

      &:hover {
        color: #a0a0a0;
        transform: scale(1.06);
      }
    }
  }
`;
