import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/Home";

function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
        </BrowserRouter>

    );
}

export default Router;