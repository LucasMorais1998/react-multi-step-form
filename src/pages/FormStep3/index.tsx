import { useEffect } from 'react';

import { useForm } from '../../hooks/useForm';

import { Link, useNavigate } from 'react-router-dom';

import { SubmitHandler, useForm as useReactHookForm } from 'react-hook-form';

import { FormActions } from '../../enums/FormActions';

import { Theme } from '../../components/Theme';

import { Container } from './styles';

interface IInputNameData {
  email: string;
  github: string;
}

const FormStep3 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useReactHookForm<IInputNameData>();

  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') navigate('/');

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
  }, []);

  const handleCompletedForm: SubmitHandler<IInputNameData> = () => {
    const hasAllRequeridData = [state.name, state.email, state.github].every(item => item);

    if (hasAllRequeridData) navigate('/completed');
  };

  const handleEmailChange = (email: string) => {
    dispatch({
      type: FormActions.setEmail,
      payload: email,
    });
  };

  const handleGithubChange = (github: string) => {
    dispatch({
      type: FormActions.setGithub,
      payload: github,
    });
  };

  return (
    <Theme>
      <Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para que possamos entrar em contato.</p>
        <hr />

        <label>
          Seu e-mail
          <input
            type="email"
            autoFocus
            {...register('email', {
              required: true,
              onChange(e) {
                this.value = e.target.value;
                state.email = String(this.value);
                handleEmailChange(e.target.value);
              },
              value: `${state.email !== '' ? state.email : ''}`,
            })}
          />
          <span style={{ visibility: `${errors.email ? 'visible' : 'hidden'}` }}>
            Preencha e-mail!
          </span>
        </label>

        <label>
          Seu GitHub
          <input
            type="url"
            autoFocus
            {...register('github', {
              required: true,
              onChange(e) {
                this.value = e.target.value;
                state.github = String(this.value);
                handleGithubChange(e.target.value);
              },
              value: `${state.github !== '' ? state.github : ''}`,
            })}
          />
          <span style={{ visibility: `${errors.github ? 'visible' : 'hidden'}` }}>
            Preencha o GitHub!
          </span>
        </label>

        <Link to="/step2" className="back-button">
          Voltar
        </Link>
        <button onClick={handleSubmit(handleCompletedForm)}>Finalizar Cadastro</button>
      </Container>
    </Theme>
  );
};

export { FormStep3 };
