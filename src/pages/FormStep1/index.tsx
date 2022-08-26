import Theme from "../../components/Theme";

import { Container } from "./styles";

const FormStep1 = () => {
  const handleNextStep = () => {

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
          <input type="text" autoFocus />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  );
};

export default FormStep1;
