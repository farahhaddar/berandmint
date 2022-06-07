import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../styles/Slider.module.css";
import ButtonGroup from "./ButtonGroup";
import { NavLink } from "../NavLink";



export default function ProjectDetailsSlider() {

     const data = [
          {
               id: 1,
               img:'/images/spine.png',
               tags: [
                    {
                         id: 1,
                         name: 'Brand Strategy ',
                    },
                    {
                         id: 2,
                         name: 'Brand Collaterals',
                    },
                    {
                         id: 3,
                         name: 'Packaging',
                    },
                    {
                         id: 4,
                         name: 'Environmental design',
                    },
               ],

               title: 'Korus',
               description: 'Korus is a place where performance takes center stage. Right before your eyes, bright lights set the mood for the culinary delights that come to life. The design goes in harmony with the upscale vibe of a cigar-lounge.',

          },
          {
               id: 3,
               img: '/images/antwork.png',
               tags: [
                    {
                         id: 1,
                         name: 'Brand Strategy ',
                    },
                    {
                         id: 2,
                         name: 'Brand Collaterals',
                    },
                    {
                         id: 3,
                         name: 'Packaging',
                    },
                    {
                         id: 4,
                         name: 'Environmental design',
                    },
               ],

               title: 'Spine',
               description: 'Korus is a place where performance takes center stage. Right before your eyes, bright lights set the mood for the culinary delights that come to life. The design goes in harmony with the upscale vibe of a cigar-lounge.',

          }, {
               id: 4,
               img: '/images/other.png',
               tags: [
                    {
                         id: 1,
                         name: 'Brand Strategy ',
                    },
                    {
                         id: 2,
                         name: 'Brand Collaterals',
                    },
                    {
                         id: 3,
                         name: 'Packaging',
                    },
                    {
                         id: 4,
                         name: 'Environmental design',
                    },
               ],

               title: 'Antwork',
               description: 'Korus is a place where performance takes center stage. Right before your eyes, bright lights set the mood for the culinary delights that come to life. The design goes in harmony with the upscale vibe of a cigar-lounge.',

          }, {
               id: 5,
               img: '/images/bart.png',
               tags: [
                    {
                         id: 1,
                         name: 'Brand Strategy ',
                    },
                    {
                         id: 2,
                         name: 'Brand Collaterals',
                    },
                    {
                         id: 3,
                         name: 'Packaging',
                    },
                    {
                         id: 4,
                         name: 'Environmental design',
                    },
               ],

               title: 'Bar Tartine',
               description: 'Korus is a place where performance takes center stage. Right before your eyes, bright lights set the mood for the culinary delights that come to life. The design goes in harmony with the upscale vibe of a cigar-lounge.',

          }, {
               id: 6,
               img: '/images/spine.png',
               tags: [
                    {
                         id: 1,
                         name: 'Brand Strategy ',
                    },
                    {
                         id: 2,
                         name: 'Brand Collaterals',
                    },
                    {
                         id: 3,
                         name: 'Packaging',
                    },
                    {
                         id: 4,
                         name: 'Environmental design',
                    },
               ],

               title: 'Korusla',
               description: 'Korus is a place where performance takes center stage. Right before your eyes, bright lights set the mood for the culinary delights that come to life. The design goes in harmony with the upscale vibe of a cigar-lounge.',

          },
          
     ];
    
     const responsive = {
          desktop: {
               breakpoint: { max: 3000, min: 1024 },
               items: 2.4,

          },
          tablet: {
               breakpoint: { max: 1024, min: 464 },
               items: 2,
          },
          mobile: {
               breakpoint: { max: 464, min: 0 },
               items: 1.4,

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
                      className={styles.carousel}
                      containerClass=''
                      customButtonGroup={<ButtonGroup title='Similar Projects' />}
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

                           <NavLink key={item.id} href={`/work/project/${item.id}`} >
                           <div className={styles.card1} >
                         
                                <img src={item.img} alt=""  width='100%' height='100%' />
                                <div className={styles.tagsWarp}>
                                {item.tags.map((tag) => (     
                                 <span key={tag.id} className={styles.tagsName} >{tag.name}<span className={styles.tagsSaperator}>-</span> </span>
                                ))}
                                </div>
                                <div className={styles.card1Title}>
                                     {item.title}
                                </div>
                                <div className={styles.card1desc}>{item.description}</div>
                                <div className={styles.readCta}>
                                     Read More
                                </div>
                                
                              
                           </div>
                           </NavLink>
                      ))}
                 </Carousel>
            </div>
    </div>
  )
}
