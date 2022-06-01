import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/fontawesome-free-solid'
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Work.module.css";
import { NavLink } from "../../NavLink";


const Project = () => {
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

