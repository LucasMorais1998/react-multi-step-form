import { useEffect } from 'react';

import { useForm } from '../../hooks/useForm';

import { Link, useNavigate } from 'react-router-dom';

import { FormActions } from '../../enums/FormActions';

import { ISelectOptionsProps, SelectOption } from '../../components/SelectOption';
import { Theme } from '../../components/Theme';

import { Container } from './styles';

type OptionsTypeOmited = Omit<ISelectOptionsProps, 'selected' | 'onClick'>;

type OptionsType = OptionsTypeOmited & { level: number };

export const options: OptionsType[] = [
  {
    title: 'Sou Junior',
    description: 'Programo há menos de 1 ano.',
    icon: '👶',
    level: 0,
  },
  {
    title: 'Sou Pleno',
    description: 'Programo há pelo menos 3 anos.',
    icon: '🧑',
    level: 1,
  },
  {
    title: 'Sou Sênior',
    description: 'Programo há mais de 5 anos.',
    icon: '👴',
    level: 2,
  },
];

const FormStep2 = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') navigate('/');

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, []);

  const handleNextStep = () => {
    navigate('/step3');
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>
        <hr />

        {options.map((option, index) => (
          <SelectOption
            key={index}
            title={option.title}
            description={option.description}
            icon={option.icon}
            selected={Boolean(state.level === index)}
            onClick={() => setLevel(index)}
          />
        ))}

        <Link to="/" className="back-button">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  );
};

export { FormStep2 };
