import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./Slider.css";
import image from "../../media/guia.png"


const Slider = () => {
    return ( 
  <div className="slider__container">

      <div className='slider__contenido'>
            <h1 className='slider__title'>Mis Proyectos</h1>
           
      </div>

      
        <div className="slider__proyecto--uno">
            <div className="slider__proyecto__contenido">
                 <h3>Dicctyonary</h3>
                 <p>Diccionario con API </p>
        </div>
          
          

          
         
      </div>

       

  </div>
        );
}
 
export default Slider;