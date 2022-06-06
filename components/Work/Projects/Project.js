import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/fontawesome-free-solid'
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Work.module.css";
import { NavLink } from "../../NavLink";
import {LightBox} from 'react-lightbox-pack'; 
import "react-lightbox-pack/dist/index.css";
import data from './data.json'; 
import Slider from '../../Carousel/Slider';



const Project = () => {
     const [toggle, setToggle] = React.useState(false);
     const [sIndex, setSIndex] = React.useState(0);

     // Handler
     const lightBoxHandler = (state, sIndex) => {
          setToggle(state);
          setSIndex(sIndex);
     };


     return (
          <div className='warper whitebg '>
               <div className="container">
                    <h1 className={styles.projectDetsTitle}>
                         SPINE BEIRUT
                    </h1>
                    <div className={styles.projectDetsDetails}>
                         Spine is a rooftop lounge in Beirut, offering an unparalleled experience through their fusion cuisine and exotic cocktails, the executed branding reflects the structure of the space along with the culture.
                    </div>
                    <div className={styles.projectDetsCategories}>
                         <span>Brand Strategy</span>
                         <span>Naming</span>
                         <span>Brand Identity</span>
                         <span>Printed Collaterals</span>
                         <span>Environmental Branding</span>
                         <span>Brand Strategy</span>
                         <span>Naming</span>
                         <span>Brand Identity</span>
                         <span>Printed Collaterals</span>
                         <span>Environmental Branding</span>
                    </div>
                    
                    <div className={styles.projectDetsNav}>
                         <div className={styles.projectDetsLink}>
                              <a href="" rel="noopener noreferrer" target='_blank'>
                                   Project Link
                              </a>
                         </div>
                         <div className={styles.projectDetslocation}>
                              Location: <span className={styles.projectDetslocationContry}>Beirut, Lebanon </span>
                         </div>
                    </div>
                    
                    
                    <div className="grid">
                    {data.map((item, index) => (
                       
                              <img
                                   key={item.id}
                                   src={item.image}
                                   alt='image'
                                   className={item.class}
                                   onClick={() => {
                                        lightBoxHandler(true, index);
                                   }}
                              />
                         
                    ))}
                    </div>
                    
                    
                    <LightBox
                         state={toggle}
                         event={lightBoxHandler}
                         data={data}
                         imageWidth="40vw"
                         imageHeight="40vh"
                         thumbnailHeight={80}
                         thumbnailWidth={80}
                         setImageIndex={setSIndex}
                         imageIndex={sIndex}
                    />

                   
                    <Slider/>



                    {/* btn back Home */}
                    <div className={styles.projectcta}>
                         <NavLink href="/work">
                              Back To Projects
                         </NavLink>
                    </div>

               </div>
          </div>


     );
};
export default Project;

