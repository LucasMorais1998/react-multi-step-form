import { FormProvider } from "./providers/FormProvider";

import { Router } from "./router";

import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <FormProvider>
      <GlobalStyle />
      <Router />
    </FormProvider>
  );
};

export default App;
