import { useEffect } from "react";

import { useForm } from "../../hooks/useForm";

import { useNavigate } from "react-router-dom";

import { options } from "../FormStep2";

import { Container } from "./styles";

const FormCompleted = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    const hasAllRequeridData = [state.name, state.email, state.github].every(
      (item) => item
    );

    if (!hasAllRequeridData) navigate("/");
  }, []);

  return (
    <Container>
      <h1>Cadastro Finalizado!</h1>

      <div className="main-content">
        <hr />
        <p>
          Nome: <span>{state.name}</span>
        </p>
        <p>
          Nível:{" "}
          <span>
            {`${options[state.level].icon} ${options[state.level].title} - ${
              options[state.level].description
            }`}
          </span>
        </p>
        <p>
          E-mail: <span>{state.email}</span>
        </p>
        <p>
          GitHub: <span>{state.github.split("https://github.com/")}</span>
        </p>
        <hr />
      </div>

      <h3>
        {state.name}, obrigado por seu interesse em nossos processos, fique
        atento ao e-mail informado, entraremos em contato em breve.
      </h3>
    </Container>
  );
};

export { FormCompleted };
