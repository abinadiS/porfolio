import React from 'react';
import aboutimagen from "../../media/aboutimagen.jpg";
import "./About.css"
const About = () => {
    return ( 
    <div className="about__container">
        <div className="about__contenido">
            <h3 className="about__title">Permiteme contarte sobre mi</h3>
            <p className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sit, distinctio veniam sit, distinctio veniam quisit, distinctio veniam qui quisquam rtenetur ipsaessitatibus maxime.</p>
        </div>
        <div className="about__imagen__container">

        <img src={aboutimagen} alt="" className="about__imagen"/>

        </div>
        

    </div> );
}
 
export default About;