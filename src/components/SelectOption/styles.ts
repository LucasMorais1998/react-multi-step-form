import styled from "styled-components";

import { ISelectOptionsProps } from "./index";

type ContainerType = Pick<ISelectOptionsProps, "selected">;

export const Container = styled.div<ContainerType>`
  display: flex;
  align-items: center;
  border: 2px solid
    ${(props) => (props.selected ? "var(--green-500)" : "var(--blue-300)")};
  border-radius: 0.625rem;
  padding: 1.25rem;
  margin-bottom: 0.938rem;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--green-100);
  }
`;

export const Icon = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  background-color: var(--blue-400);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.563rem;
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 1.25rem;
`;

export const Title = styled.div`
  font-size: 1.063rem;
  font-weight: bold;
  margin-bottom: 0.438rem;
`;

export const Description = styled.div`
  font-size: 0.875rem;
  color: var(--purple-100);
`;
