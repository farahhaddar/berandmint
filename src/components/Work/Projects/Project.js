import React, { Component } from 'react';
import styles from "../../../styles/Work.module.css";
import { NavLink } from "../../NavLink";
import {LightBox} from 'react-lightbox-pack'; 
import "react-lightbox-pack/dist/index.css";
import data from './data.json'; 
import ProjectDetailsSlider from '../../Carousel/ProjectDetailsSlider';



const Project = () => {

     // const [toggle, setToggle] = React.useState(false);
     // const [sIndex, setSIndex] = React.useState(0);

     // // Handler
     // const lightBoxHandler = (state, sIndex) => {
     //      setToggle(state);
     //      setSIndex(sIndex);
     // };


     return (
          <div className='warper whitebg '>
               <div className="container">
                    <h1 className={styles.projectDetsTitle} data-aos="fade-down">
                         spine beirut
                    </h1>
                    <div className={styles.projectDetsDetails} data-aos="fade-up" data-aos-delay='200'>
                         Spine is a rooftop lounge in Beirut, offering an unparalleled experience through their fusion cuisine and exotic cocktails, the executed branding reflects the structure of the space along with the culture.
                    </div>
                    <div className={styles.projectDetsCategories} data-aos="fade-down-left" data-aos-delay='300'>
                         <span>Brand Strategy</span>
                         <span>Naming</span>
                         <span>Brand Identity</span>
                         <span>Printed Collaterals</span>
                         <span>Environmental Branding</span>
                    </div>
                    
                    <div className={styles.projectDetsNav}>
                         <div className={styles.projectDetsLink} data-aos="fade-up" data-aos-delay='100'>
                              <a href="" rel="noopener noreferrer" target='_blank'>
                                   Project Link
                              </a>
                         </div>
                         <div className={styles.projectDetslocation} data-aos="fade-up" data-aos-delay='200'>
                              Location: <span className={styles.projectDetslocationContry}>Beirut, Lebanon </span>
                         </div>
                    </div>
                    
                    
                    <div className="grid">
                    {data.map((item, index) => (
                       
                              <img
                                   data-aos="zoom-in" data-aos-delay='100'
                                   key={item.id}
                                   src={item.image}
                                   alt='image'
                                   className={item.class}
                                   // onClick={() => {
                                   //      lightBoxHandler(true, index);
                                   // }}
                              />
                         
                    ))}
                    </div>
                    
                    
                    {/* <LightBox
                         state={toggle}
                         event={lightBoxHandler}
                         data={data}
                         imageWidth="40vw"
                         imageHeight="40vh"
                         thumbnailHeight={80}
                         thumbnailWidth={80}
                         setImageIndex={setSIndex}
                         imageIndex={sIndex}
                    />*/}


                    <ProjectDetailsSlider/>



                    {/* btn back Home */}
                    <div data-aos="fade-up" data-aos-delay='100' className={styles.projectcta}>
                         <NavLink href="/work">
                              Back To Projects
                         </NavLink>
                    </div>

               </div>
          </div>


     );
};
export default Project;

