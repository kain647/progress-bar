import React from "react";
import { Page } from "./Page";
import ProgressBar from "./ProgressBar";
import Globalstyles from "./globals";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Globalstyles />
        <ProgressBar />
      </ThemeProvider>
    </>
  );
}

export default App;
