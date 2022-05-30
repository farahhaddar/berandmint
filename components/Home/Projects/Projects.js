import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { NavLink } from "../../NavLink";

const Hero = () => {
     return (
          <div className='warper whitebg'>
               <div className="container">
                    <div >

                    <div className={styles.projectsSection}>

                         <NavLink href="/work/project/1">
                              <div className={styles.projectCard} >
                                   <img src='/images/spine.png' />
                                   <div className={styles.projectOverly}>
                                        <span className={styles.projectTitle}>Spine</span>
                                   </div>
                              </div>
                         </NavLink>
                         {/* others */}
                         <NavLink href="/work/project/11">
                              <div className={styles.projectCard} >
                                   <img src='/images/bart.png' />
                                   <div className={styles.projectOverly}>
                                        <span className={styles.projectTitle}>Bar Tartine</span>
                                   </div>
                              </div>
                         </NavLink>
                         <NavLink href="/work/project/11">
                              <div className={styles.projectCard} >
                                   <img src='/images/kenz.png' />
                                   <div className={styles.projectOverly}>
                                        <span className={styles.projectTitle}>Kanz</span>
                                   </div>
                              </div>
                         </NavLink>
                         

                         <NavLink href="/work/project/11">
                              <div className={styles.projectCard} >
                                   <img src='/images/bart.png' />
                                   <div className={styles.projectOverly}>
                                        <span className={styles.projectTitle}>Bar Tartine</span>
                                   </div>
                              </div>
                         </NavLink>
                         <NavLink href="/work/project/11">
                              <div className={styles.projectCard} >
                                   <img src='/images/spine.png' />
                                   <div className={styles.projectOverly}>
                                        <span className={styles.projectTitle}>Spine</span>
                                   </div>
                              </div>
                         </NavLink>

                         <NavLink href="/work/project/11">
                              <div className={styles.projectCard} >
                                   <img src='/images/kenz.png' />
                                   <div className={styles.projectOverly}>
                                        <span className={styles.projectTitle}>Kanz</span>
                                   </div>
                              </div>
                         </NavLink>

                         <NavLink href="/work/project/11">
                              <div className={styles.projectCard} >
                                   <img src='/images/kenz.png' />
                                   <div className={styles.projectOverly}>
                                        <span className={styles.projectTitle}>Kanz</span>
                                   </div>
                              </div>
                         </NavLink>

                        


                         <NavLink href="/work/project/11">
                              <div className={styles.projectCard} >
                                   <img src='/images/bart.png' />
                                   <div className={styles.projectOverly}>
                                        <span className={styles.projectTitle}>Bar Tartine</span>
                                   </div>
                              </div>
                         </NavLink>
                         <NavLink href="/work/project/11">
                              <div className={styles.projectCard} >
                                   <img src='/images/spine.png' />
                                   <div className={styles.projectOverly}>
                                        <span className={styles.projectTitle}>Spine</span>
                                   </div>
                              </div>
                         </NavLink>
                        
               
                    </div>
                    </div>
                    {/* btn */}
                    <div className={styles.projectcta}>
                         <NavLink href="/work">
                              View More projects
                         </NavLink>
                    </div>
               </div>
          </div>


     );
};
export default Hero;
