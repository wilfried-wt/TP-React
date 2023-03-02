import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Corps from "../component/Corps";

export default function Accueil() {

    return(
        <div>
            <h1 className="title"> Liste des produits disponible</h1>
            <div className="body">
                <Corps/>

            </div>
        </div>
    )
}