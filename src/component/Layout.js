import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

export default function Layout(){

    return(
        <>
            {/* Header */}
            <Header/>

            {/* BodyNavigation */}
            <NavBar/>

            {/* Footer */}
            <Footer/>

            
        </>
   
    )
}