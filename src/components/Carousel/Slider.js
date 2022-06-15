import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "../../styles/Slider.module.css";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';


const SliderComponent = () => {
     const slider = useRef();

     const next = () => {
          slider.current.slickNext();
     };
     const previous = () => {
          slider.current.slickPrev();
     };


     const settings = {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
          arrows: false,
          responsive: [
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                         infinite:false,
                         dots: true,
                    },
               },
               {
                    breakpoint: 768,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                    },
               },
          ],
     };

     return (
          <div>
               
               <div className={styles.buttonGroupContainer}>
                    <div className={styles.buttonGroup}  >
                         <button aria-label="Previous"  className={currentSlide === 0 ? styles.disable : ''}  onClick={previous}>
                              <IoIosArrowBack />
                         </button>
                         <button aria-label="Next" className='' onClick={next}>
                              <IoIosArrowForward />
                         </button>
                    </div>
               </div>
               

               <Slider ref={(c) => (slider.current = c)} {...settings}>
                    <div>Slide 1</div>
                    <div>Slide 2</div>
                    <div>Slide 3</div>
                    <div>Slide 4</div>
                    <div>Slide 5</div>
               </Slider>
          </div>
     )
}
export default SliderComponent;

