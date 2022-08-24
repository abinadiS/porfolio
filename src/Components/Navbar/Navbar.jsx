import React from 'react';
import "./Navbar.css";

const Navbar = ({ scrollHeight }) => {

    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    return (
        <div className={`navbar ${scrollHeight > 20 ? "scrolling" : null}`}>
            <div className="navbar__logo" onClick={toTheTop}>Abinadi</div>
        </div>
    );
}

export default Navbar;