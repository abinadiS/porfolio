import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/cover.mp4";

const Cover = () => {
    return (
        <div className='cover__container'>
            <video className='cover__video' src={coverVideo} autoPlay loop muted />
            <h1 className='cover__name'>Abinadi Contreras</h1>
            <p className='cover__description'>Developer Fronted | React</p>
        </div>
    );
}

export default Cover;
