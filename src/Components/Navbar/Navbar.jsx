import React from 'react';
import "./Navbar.css";

const Navbar = ({ scrollHeight }) => {

    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    return (
        <div className={`navbar ${scrollHeight > 20 ? "scrolling" : null}`}>
            <div className="navbar__logo" onClick={toTheTop}>Inicio</div>
            <div className="navbar__logo" >Descargar CV</div>
            <div className="navbar__logo" >Contacto</div>
        </div>
    );
}

export default Navbar;