import { ReactNode } from 'react';

import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';

import { Container, MainContent, Page, Sidebar, Steps } from './styles';

interface IThemeProps {
  children: ReactNode;
}

const Theme = ({ children }: IThemeProps) => {
  return (
    <Container>
      <MainContent>
        <Header />

        <Steps>
          <Sidebar>
            <SidebarItem />
          </Sidebar>

          <Page>{children}</Page>
        </Steps>
      </MainContent>
    </Container>
  );
};

export { Theme };
