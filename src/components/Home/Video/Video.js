
import React, { useState,useEffect } from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { NavLink } from "../../NavLink";
import { IoIosPlay } from 'react-icons/io';


const isBrowser = typeof window !== "undefined";



const Video = () => {

     // modal popup video handler
     const [videoOpen, setVideoOpen] = useState(false);
     const handleClick = (e) => {
          e.preventDefault();
          setVideoOpen(true);
     };
     


     return  (
          <div className='warper blackbg blackWhitebg'>
               <div className="container">
                    <div className={styles.VideoSection}>
                         <div className={styles.Videowarp} data-aos="fade-left" data-aos-delay="100" >
                              <img src="/images/videocover.jpeg" alt="img"  width='100%' height='100%' />

                              <a id="play-video" 
                                   onClick={handleClick}
                                   aria-label="Play Button" className={styles.videoPlayButton} href="#">
                                   <span></span>
                              </a>
                         </div>

                         <div className={styles.VideoText} data-aos="fade-right" data-aos-delay="100" >
                              <div className={styles.VideoTextTitle}>
                                   Our Culture
                              </div>
                              <div className={styles.VideoDets}>
                                   <p>
                                        Our culture is all about caring. When you work with Brandmint, we consider ourselves as the guardians of your brand, & we’ll always take a strong interest in its welfare & how it’s faring, even after our job is over. That’s just who we are. We also care about one another, forging a collaborative team atmosphere in which talents are nurtured & tasks are shared. Working in such a company also makes us feel strongly about Brandmint, and drives us to always give our maximum in everything we do.
                                   </p>
                              </div>

                         </div>
                         
                    </div>
                    {(typeof window !== 'undefined') &&
                    <ModalVideo
                         channel='custom'
                         url='/videos/brandmint.mp4'
                         isOpen={videoOpen}
                         onClose={() => setVideoOpen(false)}
                         allowFullScreen
                    />
                   }
                    



               </div>
          </div>


     );
};
export default Video;
