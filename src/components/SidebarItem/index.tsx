import { ReactNode } from "react";

import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";

import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdWork } from "react-icons/md";

import {
  Container,
  Description,
  Icon,
  Info,
  MainContent,
  Point,
  Title,
} from "./styles";

type SidebarItemOptionsTypes = {
  title: string;
  description: string;
  icon: ReactNode;
  path: string;
};

const sidebarItemOptions: SidebarItemOptionsTypes[] = [
  {
    title: "Pessoal",
    description: "Se identifique",
    icon: <FaUserAlt />,
    path: "/",
  },
  {
    title: "Profissional",
    description: "Seu nível",
    icon: <MdWork />,
    path: "/step2",
  },
  {
    title: "Contatos",
    description: "Como te achar",
    icon: <MdEmail />,
    path: "/step3",
  },
];

const SidebarItem = () => {
  const { state } = useForm();

  return (
    <Container>
      {sidebarItemOptions.map(({ title, description, icon, path }, index) => (
        <MainContent key={index}>
          <Info>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Info>

          <Link to={path}>
            <Icon active={state.currentStep === index + 1}>{icon}</Icon>
          </Link>

          <Link to={path}>
            <Point active={state.currentStep === index + 1} />
          </Link>
        </MainContent>
      ))}
    </Container>
  );
};

export default SidebarItem;
