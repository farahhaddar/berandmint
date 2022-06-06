import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../styles/Slider.module.css";
import ButtonGroup from "./ButtonGroup"
export default function MultiSlider() {

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

               title: 'Korus',
               description: 'Korus is a place where performance takes center stage. Right before your eyes, bright lights set the mood for the culinary delights that come to life. The design goes in harmony with the upscale vibe of a cigar-lounge.',

          }, {
               id: 4,
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

               title: 'Korus',
               description: 'Korus is a place where performance takes center stage. Right before your eyes, bright lights set the mood for the culinary delights that come to life. The design goes in harmony with the upscale vibe of a cigar-lounge.',

          }, {
               id: 5,
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

               title: 'Korus',
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

               title: 'Korus',
               description: 'Korus is a place where performance takes center stage. Right before your eyes, bright lights set the mood for the culinary delights that come to life. The design goes in harmony with the upscale vibe of a cigar-lounge.',

          },
          
     ];

     const responsive = {
          superLargeDesktop: {
               // the naming can be any, depends on you.
               breakpoint: { max: 4000, min: 3000 },
               items: 5
          },
          desktop: {
               breakpoint: { max: 3000, min: 1024 },
               items: 3
          },
          tablet: {
               breakpoint: { max: 1024, min: 464 },
               items: 2
          },
          mobile: {
               breakpoint: { max: 464, min: 0 },
               items: 1
          }
     };
  return (
    <div>
            <div className={styles.carouselWrapper}>
                 <Carousel
                      additionalTransfrom={0}
                      arrows={false}
                      autoPlaySpeed={3000}
                      centerMode={false}
                      className={styles.carousel}
                      containerClass="carousel-container"
                      customButtonGroup={<ButtonGroup />}
                      dotListClass=""
                      draggable
                      focusOnSelect={false}
                      infinite={false}
                      itemClass=""
                      keyBoardControl
                      minimumTouchDrag={80}
                      renderButtonGroupOutside
                      renderDotsOutside={false}
                      responsive={responsive}
                      showDots={false}
                      sliderClass=""
                      slidesToSlide={1}
                 >
                      {data.map((item) => (
                           <div className={styles.reviewCard} key={item.id}>
                                {/* <Rating rating={item.review} /> */}
                                {/* <Heading as="h3" sx={styles.title}> */}
                                     {item.title}
                                {/* </Heading> */}
                                {/* <Text sx={styles.description}> */}
                                     {item.description}
                                     {/* </Text> */}
                           </div>
                      ))}
                 </Carousel>
            </div>
    </div>
  )
}
