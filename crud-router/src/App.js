import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routers,
  Route,
  Navigate,
} from "react-router-dom";

// importação das páginas
import Login from "./pages/Login/Login";

// importação do Navbar (menu principal)
import Navbar from "./components/Navbar/Navbar";

function App() {
  //Estado global simples para login e contatos
  const [isAutenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState([]);

  // Função de login
  const handleLogin = (username, password) => {
    if (username === "admin" && password === "senha") {
      setIsAuthenticated(true);
    } else {
      alert("Usuário ou senha inválidos");
    }
  };

  //Função de logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
}
export default App;
