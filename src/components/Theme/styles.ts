import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--blue-500);
  color: var(--white);
  min-height: 100vh;
`;

export const MainContent = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;
`;

export const Sidebar = styled.aside`
  width: 15.6rem;
  border-right: 1px solid var(--blue-300);
  padding-right: 2.5rem;
`;

export const Page = styled.main`
  flex: 1;
  padding-top: 2.5rem;
  padding-left: 2.5rem;
`;
