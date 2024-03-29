import React, { Component } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Work.module.css";
import { NavLink } from "../../NavLink";
import { IoIosArrowForward } from 'react-icons/io';



const EnvCat = () => {
     return (
          <div className='warper whitebg '>
               <div className="container">
                    <div>
                         <div className={styles.catDesc} data-aos="fade-down">
                              We love <span className={styles.catName}> Environmental Design </span> match-making fresh textures & materials with every brand.
                         </div>

                         <div className={styles.envSection}>

                              <div className={styles.envrow1}>
                                   <NavLink data-aos="zoom-in" data-aos-delay="100" href="/work/project/1">
                                        <div className={`${styles.projectCard} ${styles.div1}`} >
                                             <img src='/images/spine.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Spine</span>
                                             </div>
                                        </div>
                                   </NavLink>

                                   <NavLink data-aos="zoom-in" data-aos-delay="100" href="/work/project/1">
                                        <div className={`${styles.projectCard} ${styles.div2}`} >
                                             <img src='/images/bart.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Bar Tartine</span>
                                             </div>
                                        </div>
                                   </NavLink>
                                   <NavLink data-aos="zoom-in" data-aos-delay="100" href="/work/project/1">
                                        <div className={`${styles.projectCard} ${styles.div3}`} >
                                             <img src='/images/kenz.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Kanz</span>
                                             </div>
                                        </div>
                                   </NavLink>
                              </div>
                              <div className={styles.envrow2}>
                                   <NavLink data-aos="zoom-in" data-aos-delay="100" href="/work/project/1">
                                        <div className={`${styles.projectCard} ${styles.div4}`} >
                                             <img src='/images/bart.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Bar Tartine</span>
                                             </div>
                                        </div>
                                   </NavLink>
                                   <NavLink data-aos="zoom-in" data-aos-delay="100" href="/work/project/1">
                                        <div className={`${styles.projectCard} ${styles.div5}`} >
                                             <img src='/images/env.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Spine</span>
                                             </div>
                                        </div>
                                   </NavLink>

                              </div>

                              <div className={styles.envrow3}>
                                   <NavLink data-aos="zoom-in" data-aos-delay="100" href="/work/project/1">
                                        <div className={`${styles.projectCard} ${styles.div1}`} >
                                             <img src='/images/spine.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Spine</span>
                                             </div>
                                        </div>
                                   </NavLink>

                                   <NavLink data-aos="zoom-in" data-aos-delay="100" href="/work/project/1">
                                        <div className={`${styles.projectCard} ${styles.div2}`} >
                                             <img src='/images/bart.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Bar Tartine</span>
                                             </div>
                                        </div>
                                   </NavLink>
                                   <NavLink data-aos="zoom-in" data-aos-delay="100" href="/work/project/1">
                                        <div className={`${styles.projectCard} ${styles.div3}`} >
                                             <img src='/images/kenz.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Kanz</span>
                                             </div>
                                        </div>
                                   </NavLink>
                              </div>
                         </div>
                         {/* see all */}
               
                         <div>
                              <NavLink data-aos="fade-left" data-aos-delay="100" className={styles.seeAll} href="/work/category/1">
                                   <span> Explore More</span>  <IoIosArrowForward className={styles.arrow} />
                              </NavLink>
                         </div>

                    </div>

               </div>
          </div>


     );
};
export default EnvCat;
