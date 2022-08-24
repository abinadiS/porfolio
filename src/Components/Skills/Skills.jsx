import "./Skills.css";

import css from "../../media/css.svg";
import html from "../../media/html.svg";
import Javascript from "../../media/js.svg";
import vitejs from "../../media/vitejs.svg";
import react from "../../media/react.svg";
import styled from "../../media/styled-components.svg"
import git from "../../media/git.svg"

const Skills = () => {
    return ( 
    <div className="skills__container">
        <h1 className="skills__title">Conocimientos</h1>
        
        <div className="skills__group">

        <div className="skill__container"><img src={css} alt="" /></div>
        <div className="skill__container"><img src={html} alt="" /></div>
        <div className="skill__container"><img src={Javascript} alt="" /></div>
        <div className="skill__container"><img src={react} alt="" /></div>
        <div className="skill__container"><img src={vitejs} alt="" /></div>
        <div className="skill__container"><img src={git} alt="" /></div>

        </div>

    </div> );
}
 
export default Skills;