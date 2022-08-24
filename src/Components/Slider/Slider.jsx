import '@brainhubeu/react-carousel/lib/style.css';
import "./Slider.css";
import image from "../../media/guia.png"
import Project from './project';


const Slider = () => {
  return (
    <div className="slider__container">

      <h1 className='slider__titulo'>Mis Proyectos</h1>
      <div className="slider__proyectos_container">
        <Project imagen={image} titulo="Title articulo2" desc="descr5ipticiom"/>
        <Project imagen={image} titulo="Title articulo" desc="descripticiom"/>
        <Project imagen={image} titulo="Title articulo" desc="descripticiom"/>
      </div>

    </div>
  );
}

export default Slider;