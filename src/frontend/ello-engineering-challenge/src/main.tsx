import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.tsx";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const theme = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      main: "#5ACCCC",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <CssBaseline />
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </ApolloProvider>
);
