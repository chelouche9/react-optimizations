import React from "react";

import { AppWrapper } from "./globalStyles";
import AppRouter from "./router";

const App: React.FC = () => {
  return (
    <AppWrapper>
      <AppRouter />
    </AppWrapper>
  );
};

export default App;
