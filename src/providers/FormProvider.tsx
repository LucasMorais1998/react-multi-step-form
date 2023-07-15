import { ReactNode, useReducer } from 'react';

import { FormContext } from '../contexts/FormContext';

import { FormReducer } from '../reducers/FormReducer';

import { State } from '../types/State';

interface IFormProviderProps {
  children: ReactNode;
}

const initialData: State = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: '',
};

export const FormProvider = ({ children }: IFormProviderProps) => {
  const [state, dispatch] = useReducer(FormReducer, initialData);
  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
