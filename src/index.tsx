import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";

const container = document.getElementById("root")!;
const root = createRoot(container);

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(26, 100%, 55%)",
      light: "hsl(25, 100%, 94%)",
    },
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
