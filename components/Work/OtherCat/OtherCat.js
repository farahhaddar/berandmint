import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Work.module.css";
import { NavLink } from "../../NavLink";

const OtherCat = () => {
     return (
          <div className='warper whitebg'>
               <div className="container">
                    <div >

                         <div className={styles.projectsSection}>

                              <NavLink href="/work/1">
                                   <div className={styles.projectCard} >
                                        <img src='/images/spine.png' />
                                        <div className={styles.projectOverly}>
                                             <span className={styles.projectTitle}>Spine</span>
                                        </div>
                                   </div>
                              </NavLink>
                              {/* others */}
                              <NavLink href="/work/1">
                                   <div className={styles.projectCard} >
                                        <img src='/images/bart.png' />
                                        <div className={styles.projectOverly}>
                                             <span className={styles.projectTitle}>Bar Tartine</span>
                                        </div>
                                   </div>
                              </NavLink>
                              <NavLink href="/work/1">
                                   <div className={styles.projectCard} >
                                        <img src='/images/kenz.png' />
                                        <div className={styles.projectOverly}>
                                             <span className={styles.projectTitle}>Kanz</span>
                                        </div>
                                   </div>
                              </NavLink>


                              <NavLink href="/work/1">
                                   <div className={styles.projectCard} >
                                        <img src='/images/bart.png' />
                                        <div className={styles.projectOverly}>
                                             <span className={styles.projectTitle}>Bar Tartine</span>
                                        </div>
                                   </div>
                              </NavLink>
                              <NavLink href="/work/1">
                                   <div className={styles.projectCard} >
                                        <img src='/images/spine.png' />
                                        <div className={styles.projectOverly}>
                                             <span className={styles.projectTitle}>Spine</span>
                                        </div>
                                   </div>
                              </NavLink>

                              <NavLink href="/work/1">
                                   <div className={styles.projectCard} >
                                        <img src='/images/kenz.png' />
                                        <div className={styles.projectOverly}>
                                             <span className={styles.projectTitle}>Kanz</span>
                                        </div>
                                   </div>
                              </NavLink>

                              <NavLink href="/work/1">
                                   <div className={styles.projectCard} >
                                        <img src='/images/kenz.png' />
                                        <div className={styles.projectOverly}>
                                             <span className={styles.projectTitle}>Kanz</span>
                                        </div>
                                   </div>
                              </NavLink>




                              <NavLink href="/work/1">
                                   <div className={styles.projectCard} >
                                        <img src='/images/bart.png' />
                                        <div className={styles.projectOverly}>
                                             <span className={styles.projectTitle}>Bar Tartine</span>
                                        </div>
                                   </div>
                              </NavLink>
                              <NavLink href="/work/1">
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
                              VIEW MORE PROJECTS
                         </NavLink>
                    </div>
               </div>
          </div>


     );
};
export default OtherCat;
