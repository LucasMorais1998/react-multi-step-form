import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0;
    font-size: 1.625rem;
    color: var(--white);
    text-align: center;
  }

  .main-content {
    margin: 0 auto;

    p {
      font-size: 1rem;
      color: var(--purple-100);
      margin: 0.813rem 0;
      font-weight: bold;

      &:last-of-type {
        margin-bottom: 2rem;
      }

      span {
        font-weight: 400;

        color: var(--white);
      }
    }

    hr {
      height: 1px;
      border: 0;
      background-color: var(--blue-300);
      margin-bottom: 2rem;
    }
  }

  h3 {
    width: 40%;
    margin: 0 auto;
    padding: 1.25rem 0.625rem;
    background-color: var(--blue-300);
    color: var(--white);
    text-align: center;
    border: 1px solid var(--green-100);
    border-radius: 0.625rem;
    transition: border ease 0.2s;

    &:hover {
      border: 1px solid var(--green-500);
    }
  }
`;
