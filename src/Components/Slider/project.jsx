const Project = ({ titulo, imagen, desc }) => {
    return (
        <div className="slider__proyecto">
        <img src={imagen} alt="Imagen proyecto" />

        <div className="slider__desc">
          <h3 className='slider__h3'>{titulo}</h3>
          <p className='slider__p'>{desc}</p>
          </div>
          </div>
    );
}

export default Project;