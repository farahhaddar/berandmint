import React from 'react';
import styles from "../../styles/Slider.module.css";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export default function ButtonGroup({ clinets,title,next, previous ,...rest}) {

     const { carouselState: { currentSlide,totalItems, slidesToShow  } } = rest;

     return (
          <div className={styles.buttonGroupContainer}>
          
               <div className={clinets ? styles.clinets : styles.carouselTitle}>
                    {title}
               </div>

               <div className={styles.buttonGroup}>
                    <button onClick={previous} className={currentSlide === 0 ? styles.disable : ''}  aria-label="Previous">
                         <IoIosArrowBack />
                    </button>
                    <button onClick={next} className={currentSlide === totalItems - slidesToShow ?  styles.disable : ''} aria-label="Next">
                         <IoIosArrowForward />
                    </button>
               </div>
          </div>
     );
}

