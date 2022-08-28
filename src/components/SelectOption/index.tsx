import { Container, Description, Icon, Info, Title } from "./styles";

export interface ISelectOptionsProps {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}

const SelectOption = ({
  title,
  description,
  icon,
  selected,
  onClick,
}: ISelectOptionsProps) => {
  return (
    <Container selected={selected} onClick={onClick}>
      <Icon>{icon}</Icon>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  );
};

export { SelectOption };
