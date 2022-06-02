import styled from "styled-components";

export const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  display: flex;

  flex-direction: column;
  gap: 2.5rem;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

    .containerImg {
      /* background: rgba(225, 225, 225, 0.4); */
      padding: 1rem;
      border-radius: 0.5rem;
      box-shadow: 5px 5px 7px 5px rgba(0, 0, 0, 0.2);

      transition: all 0.2s linear;

      &:hover {
        box-shadow: 5px 5px 7px 5px rgba(0, 0, 0, 0.3);

        transform: scale(1.1);
      }
    }
  }
`;
