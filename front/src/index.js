import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppMovie from "./APIMovie";
import Menu from "./menu";
import FormularioInicioSesion from "./components/FormularioInicioSesion";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>  
    
    <App />
    
    
  </React.StrictMode>
);
