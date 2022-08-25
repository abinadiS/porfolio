import React from 'react';
import aboutimagen from "../../media/aboutimagen.jpg";
import "./About.css"
const About = () => {
    return (
        <div className="about__container">
            <div className="about__contenido">
                <h3 className="about__title">Permiteme contarte sobre mi</h3>
                <p className="about__description">Desarrollador Frontend con conocimientos en React desarrollado a travéz de proyectos propios.
                Busco mejorar mis habilidades, aprendiendo cada dia más para lograr crecer en la industria.  </p>
            </div>
            <img src={aboutimagen} alt="about" className='about__imagen' />


        </div>);
}

export default About;