import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContextProvider from "./context/ShopContext.jsx";
import { SnackbarProvider } from "notistack";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
