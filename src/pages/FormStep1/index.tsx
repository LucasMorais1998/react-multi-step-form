import { useEffect } from "react";

import { useForm } from "../../hooks/useForm";

import { useNavigate } from "react-router-dom";

import { SubmitHandler, useForm as useFormRHF } from "react-hook-form";

import { FormActions } from "../../enums/FormActions";

import Theme from "../../components/Theme";

import { Container } from "./styles";

interface IInputNameData {
  name: string;
}

const FormStep1 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormRHF<IInputNameData>();

  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep: SubmitHandler<IInputNameData> = () => {
    if (state.name !== "") navigate("/step2");
  };

  const handleNameChange = (name: string) => {
    dispatch({
      type: FormActions.setName,
      payload: name,
    });
  };

  return (
    <Theme>
      <Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com o seu nome:</h1>
        <p>Preencha o campo abaixo com o seu nome completo.</p>
        <hr />

        <label>
          Seu nome completo
          <input
            type="text"
            autoFocus
            {...register("name", {
              required: true,
              onChange(e) {
                this.value = e.target.value;
                state.name = String(this.value);
                handleNameChange(e.target.value);
              },
              value: `${state.name !== "" ? state.name : ""}`,
            })}
          />
          <span style={{ visibility: `${errors.name ? "visible" : "hidden"}` }}>
            Preencha o nome completo!
          </span>
        </label>

        <button onClick={handleSubmit(handleNextStep)}>Próximo</button>
      </Container>
    </Theme>
  );
};

export default FormStep1;
