import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Ajout from "./Ajout";
import Login from "./Login";
import Register from "./Register";

export default function NavBar(){

    return(
        <Routes>
            <Route path="/" element={<Accueil/>}/>
            <Route path="/login" element={<Login/>}/>

            <Route path="/register" element={<Register/>}/>

            <Route path="/manage" element={<Ajout/>}/>
        </Routes>
    )
}