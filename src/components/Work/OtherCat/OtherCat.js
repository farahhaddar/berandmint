import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Work.module.css";
import { NavLink } from "../../NavLink";
import { IoIosArrowForward } from 'react-icons/io';


const OtherCat = () => {
     return (
          <div className='warper whitebg '>
               <div className="container">
                    <div>
                         <div className={styles.catDesc} data-aos="fade-down">
                              <span className={styles.catName}>Everything else</span> we love…
                         </div>

                         <div className={styles.otherSection}>

                              <div className={styles.otherrow1}>
                                   <NavLink data-aos="zoom-in" data-aos-delay="100" href="/work/project/1">
                                        <div className={`${styles.projectCard} ${styles.div1}`} >
                                             <img src='/images/other.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Spine</span>
                                             </div>
                                        </div>
                                   </NavLink>

                              </div>
                              <div className={styles.otherrow2}>
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
                                             <img src='/images/other2.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Spine</span>
                                             </div>
                                        </div>
                                   </NavLink>

                              </div>

               
                         </div>
                         {/* see all */}
                         <div>
                              <NavLink data-aos="fade-left" data-aos-delay="100" className={styles.seeAll} href="/work/category/1">
                                   <span> Explore More</span>  <IoIosArrowForward className={styles.arrow}/>
                              </NavLink>
                         </div>

                         {/* btn back Home */}
                         <div data-aos="fade-up" data-aos-delay="100"  className={styles.projectcta}>
                              <NavLink href="/" >
                                   Back Home
                              </NavLink>
                         </div>

                    </div>
                    
                   
               </div>
          </div>


     );
};
export default OtherCat;
