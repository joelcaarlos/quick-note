import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/Home";

function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/login" component={Login}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/home" component={Home}/>
        </Routes>
        </BrowserRouter>
    );
}

export default Rotas;