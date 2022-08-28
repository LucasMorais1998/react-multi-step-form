import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 0.813rem;
    color: var(--purple-100);
    margin: 0.813rem 0;

    &:last-of-type {
      margin-bottom: 2rem;
    }
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 1.625rem;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: var(--blue-300);
    margin-bottom: 2rem;
  }

  label {
    font-size: 0.813rem;
    min-height: 400px;

    input {
      display: block;
      margin-top: 0.438rem;
      width: 100%;
      padding: 1.25rem 0.625rem;
      border: 2px solid var(--green-500);
      border-radius: 0.625rem;
      color: var(--white);
      outline: none;
      font-size: 0.938rem;
      background-color: var(--blue-500);
    }

    span {
      display: block;
      color: var(--red);
    }
  }

  button {
    background-color: var(--green-500);
    color: var(--white);
    font-size: 0.875rem;
    font-weight: bold;
    padding: 1.25rem 2.5rem;
    border: 0;
    border-radius: 1.875rem;
    margin-top: 1.875rem;
  }
`;
