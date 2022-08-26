import { Container, Description, Icon, Info, Title } from "./styles";

export interface ISelectOptionsProps {
  title: string;
  description: string;
  icon: string;
}

const SelectOption = ({ title, description, icon }: ISelectOptionsProps) => {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  );
};

export default SelectOption;
