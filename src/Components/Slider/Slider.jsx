import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./Slider.css";
import image from "../../media/prueba.jpg"


const Slider = () => {
    return ( 
  <div className="slider__container">

      <div className='slider__contenido'>
            <h1 className='slider__title'>Mis Proyectos</h1>
           
      </div>

      <div className="slider__images" >
          <img src={image} />
          <img src={image} />
          <img src={image}/>
          <img src={image} />
          <img src={image} />
          <img src={image}/>

          
         
      </div>

       

  </div>
        );
}
 
export default Slider;