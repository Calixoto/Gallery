import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: 2.5rem;
  display: flex;
  align-items: center;

  button {
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 4px;

    transition: all 0.2s linear;

    &:hover:not(:disabled) {
      background: #d0d0d0;

      filter: opacity(0.9);
    }
  }
`;
