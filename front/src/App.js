import React, {  } from "react";
import "./App.css";
 
import Home from "./components/CRUD-User/Home";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import View from "./components/CRUD-User/View";
import Edit from "./components/CRUD-User/Edit";
import FormularioInicioSesion from "./components/FormularioInicioSesion";
import Menu from "./menu";
import AppMovie from "./APIMovie";
import Admin from "./components/CRUD-User/Admin";
 
function App() {
  return (
    <div className="App">
        <Router>
        <Menu />
            <Routes>
              <Route exact path="/" element={<AppMovie/>}/>
              <Route exact path="/home" element={<Home/>}/>
              <Route exact path="/view/:id" element={<View/>}/>
              <Route exact path="/edit/:id" element={<Edit/>}/>
              <Route exact path="/iniciarSesion" element={<FormularioInicioSesion/>}/>
              <Route exact path="/admin" element={<Admin/>}/>               
            </Routes>
        </Router>
    </div>
  );
}
 
export default App;