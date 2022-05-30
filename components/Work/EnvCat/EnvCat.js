import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Work.module.css";
import { NavLink } from "../../NavLink";

const EnvCat = () => {
     return (
          <div className='warper whitebg '>
               <div className="container">
                    <div>
                         <div className={styles.catDesc}>
                              We love <span className={styles.catName}> Environmental Design </span> match-making fresh textures & materials with every brand.
                         </div>

                         <div className={styles.envSection}>

                              <div className={styles.envrow1}>
                                   <NavLink href="/work/project/1">
                                        <div className={`${styles.projectCard} ${styles.div1}`} >
                                             <img src='/images/spine.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Spine</span>
                                             </div>
                                        </div>
                                   </NavLink>

                                   <NavLink href="/work/project/1">
                                        <div className={`${styles.projectCard} ${styles.div2}`} >
                                             <img src='/images/bart.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Bar Tartine</span>
                                             </div>
                                        </div>
                                   </NavLink>
                                   <NavLink href="/work/project/1">
                                        <div className={`${styles.projectCard} ${styles.div3}`} >
                                             <img src='/images/kenz.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Kanz</span>
                                             </div>
                                        </div>
                                   </NavLink>
                              </div>
                              <div className={styles.envrow2}>
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
                                             <img src='/images/env.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Spine</span>
                                             </div>
                                        </div>
                                   </NavLink>

                              </div>

                              <div className={styles.envrow3}>
                                   <NavLink href="/work/project/1">
                                        <div className={`${styles.projectCard} ${styles.div1}`} >
                                             <img src='/images/spine.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Spine</span>
                                             </div>
                                        </div>
                                   </NavLink>

                                   <NavLink href="/work/project/1">
                                        <div className={`${styles.projectCard} ${styles.div2}`} >
                                             <img src='/images/bart.png' />
                                             <div className={styles.projectOverly}>
                                                  <span className={styles.projectTitle}>Bar Tartine</span>
                                             </div>
                                        </div>
                                   </NavLink>
                                   <NavLink href="/work/project/1">
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
                         <div className={styles.seeAll}>
                              <NavLink href="/work/category/1">
                                   Explore More <span className={styles.arrow}>{`>`}</span> 
                              </NavLink>
                         </div>

                    </div>

               </div>
          </div>


     );
};
export default EnvCat;
