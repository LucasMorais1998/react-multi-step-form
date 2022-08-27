import styled from "styled-components";

export const Container = styled.div`
  margin: 1.875rem 0;
  position: relative;
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  a {
    text-decoration: none;
    cursor: initial;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-right: 1.25rem;
`;

export const Title = styled.div`
  text-align: right;
  font-weight: bold;
  margin-bottom: 0.313rem;
  font-size: 0.938rem;
  color: var(--white);
`;

export const Description = styled.div`
  text-align: right;
  font-size: 0.813rem;
  color: var(--purple-100);
`;

interface IIconProps {
  active: boolean;
}

export const Icon = styled.div<IIconProps>`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "var(--green-500)" : "var(--purple-500)"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-size: 1.5rem;
  cursor: pointer;
`;

interface IPointProps extends IIconProps {}

export const Point = styled.div<IPointProps>`
  width: 0.375rem;
  height: 0.375rem;
  padding: 0.375rem;
  border: 3px solid var(--purple-500);
  border-radius: 50%;
  margin-left: 1.875rem;
  margin-right: -0.59rem;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  background-color: ${(props) =>
    props.active ? "var(--green-500)" : "var(--blue-500)"};
`;
