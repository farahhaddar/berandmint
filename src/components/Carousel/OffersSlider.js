import React,{ useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../styles/Slider.module.css";
import ButtonGroup from "./ButtonGroup";
import { NavLink } from "../NavLink";



export default function OffersSlider() {

     const delay = 100;

     const data = [
          {
               id: 1,
               img:'/images/spine.png',
               title: 'Korus',
          },
          {
               id: 3,
               img: '/images/antwork.png',
               title: 'Spine',
          }, {
               id: 4,
               img: '/images/other.png',
               title: 'Antwork',
          }, {
               id: 5,
               img: '/images/bart.png',
               title: 'Bar Tartine',

          }, {
               id: 6,
               img: '/images/spine.png',
               title: 'Korusla',
          },
          
     ];
    
     const responsive = {
          desktop: {
               breakpoint: { max: 3000, min: 1024 },
               items: 3,

          },
          tablet: {
               breakpoint: { max: 1024, min: 464 },
               items: 2,
          },
          mobile: {
               breakpoint: { max: 464, min: 0 },
               items: 1.1,

          }
     };



  return (
    <div>
            <div className={styles.carouselWrapper}>
                 <Carousel
                      additionalTransfrom={0}
                      arrows={false}
                      autoPlaySpeed={6000}
                      centerMode={false}
                      className={`${styles.carousel} ${styles.carouselExperince}`}
                      containerClass=''
                      customButtonGroup={<ButtonGroup title='Projects You May Like' />}
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
                    
                      {data.map((item,i) => (
                              <NavLink  href={`/work/project/${item.id}`} key={item.id} >
                                <div className={styles.projectCard} data-aos="fade-up" data-aos-delay={delay*i}>
                                   <img src={item.img} />
                                   <div className={styles.projectOverly}>
                                        <span className={styles.projectTitle}>{item.title}</span>
                                   </div>
                              </div>
                         </NavLink>  
                      ))}
                 </Carousel>
            </div>
    </div>
  )
}
