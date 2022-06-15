import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../styles/Slider.module.css";
import ButtonGroup from "./ButtonGroup";
import { NavLink } from "../NavLink";



export default function ClinetsSlider({title}) {

     const data = [
          {
               id: 2,
               img: '/images/logos2.svg',
               link: 'https://www.abc.com.lb/',
          }, {
               id: 1,
               img: '/images/logos1.svg',
               link: 'https://www.abc.com.lb/',
          },
          {
               id: 3,
               img: '/images/logos3.svg',
               link: 'https://www.abc.com.lb/',
          }, {
               id: 4,
               img: '/images/logos4.png',
               link: 'https://www.abc.com.lb/',
          }, {
               id: 5,
               img: '/images/logos5.svg',
               link: 'https://www.abc.com.lb/',
          }, {
               id: 3,
               img: '/images/logos3.svg',
               link: 'https://www.abc.com.lb/',
          }, {
               id: 4,
               img: '/images/logos4.png',
               link: 'https://www.abc.com.lb/',
          },
          , {
               id: 6,
               img: '/images/logos6.svg',
               link: 'https://www.abc.com.lb/',
          },
          , {
               id: 7,
               img: '/images/logos2.svg',
               link: 'https://www.abc.com.lb/',
          }, , {
               id: 8,
               img: '/images/logos3.svg',
               link: 'https://www.abc.com.lb/',
          },

     ];

     const responsive = {
          desktop: {
               breakpoint: { max: 3000, min: 1024 },
               items: 5,

          },
          tablet: {
               breakpoint: { max: 1024, min: 464 },
               items: 3,
          },
          mobile: {
               breakpoint: { max: 464, min: 0 },
               items: 2,
          }
     };
     return (
          <div className='clinetsSlider'>
               <div className={styles.carouselWrapperClinets}>
                    <Carousel
                         additionalTransfrom={0}
                         arrows={false}
                         autoPlaySpeed={6000}
                         centerMode={false}
                         className={`${styles.carousel} ${styles.carouselExperince}`}
                         containerClass=''
                         customButtonGroup={<ButtonGroup title={title} clinets='clinets' />}
                         dotListClass=""
                         draggable
                         focusOnSelect={false}
                         infinite={false}
                         itemClass={styles.carouselItem}
                         keyBoardControl
                         minimumTouchDrag={80}
                         renderButtonGroupOutside
                         renderDotsOutside={false}
                         responsive={responsive}
                         showDots={false}
                         sliderClass=""
                         partialVisible={false}
                    >
                    {data.map((item) => (
                         <div key={item.id} className={styles.clinetsCards}>
                              <a href={item.link} rel="noopener noreferrer" target='_blank'>
                                   <img src={item.img} alt="Logo" /></a>
                         </div>
                    ))}
                    </Carousel>
               </div>
          </div>
     )
}
