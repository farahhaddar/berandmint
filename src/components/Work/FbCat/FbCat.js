import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Work.module.css";
import { NavLink } from "../../NavLink";
import { IoIosArrowForward } from 'react-icons/io';


const FbCat = () => {
     return (
          <div className='warper whitebg sectionInpage'>
               <div className="container">
                    <div>
                         <div className={styles.catDesc} data-aos="fade-down">
                              We love <span className={styles.catName}>F&B</span>  and our passion is creating brands with a fresh attitude and a twist of mint.
                         </div>

                         <div className={styles.fbSection}>

                              <div className={styles.fbrow1}>
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
                              <div className={styles.fbrow2}>
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
                                             <img src='/images/spine.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Spine</span>
                                             </div>
                                        </div>
                                   </NavLink>

                              </div>

                              <div className={styles.fbrow3}>
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
                                             <img src='/images/fbsec.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Bar Tartine</span>
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

                    </div>
                    
               </div>
          </div>


     );
};
export default FbCat;
