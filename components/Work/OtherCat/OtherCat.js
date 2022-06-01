import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/fontawesome-free-solid'
import styles from "../../../styles/Work.module.css";
import { NavLink } from "../../NavLink";

const OtherCat = () => {
     return (
          <div className='warper whitebg '>
               <div className="container">
                    <div>
                         <div className={styles.catDesc}>
                              <span className={styles.catName}>Everything else</span> we love…
                         </div>

                         <div className={styles.otherSection}>

                              <div className={styles.otherrow1}>
                                   <NavLink href="/work/project/1">
                                        <div className={`${styles.projectCard} ${styles.div1}`} >
                                             <img src='/images/other.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Spine</span>
                                             </div>
                                        </div>
                                   </NavLink>

                              </div>
                              <div className={styles.otherrow2}>
                                   <NavLink href="/work/project/1">
                                        <div className={`${styles.projectCard} ${styles.div4}`} >
                                             <img src='/images/bart.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Bar Tartine</span>
                                             </div>
                                        </div>
                                   </NavLink>
                                   <NavLink href="/work/project/1">
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
                         <div className={styles.seeAll}>
                              <NavLink href="/work/category/1">
                                   Explore More  <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
                              </NavLink>
                         </div>

                         {/* btn back Home */}
                         <div className={styles.projectcta}>
                              <NavLink href="/">
                                   Back Home
                              </NavLink>
                         </div>

                    </div>
                    
                   
               </div>
          </div>


     );
};
export default OtherCat;
