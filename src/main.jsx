import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@/styles/index.scss";
import { GlobalStyles } from "@/styles/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import { themeLight } from "@/utils/constant.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={themeLight}>
      <GlobalStyles></GlobalStyles>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
