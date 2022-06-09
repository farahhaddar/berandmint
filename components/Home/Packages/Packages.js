import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { NavLink } from "../../NavLink";
import Router from "next/router";

const Packages = () => {
     return (
          <div className='warper whitebg'>
               <div className="container">
                    <div className={styles.contactSection}>
                         <div className={styles.sectionTitle}>
                              Our Packages
                         </div>
                         <div className={styles.sectionDesc}>
                              We offer 2 types of design packages -want to know more about our offering
                         </div>

                         <div className={styles.packagesCards}>

                              <div className={styles.packageCard}>
                                   <div className={styles.packageCardIconWarper}>
                                        <img className={styles.packageCardIcon} src="/images/experience.svg" alt="Package Icon" />
                                   </div>
                                   <div className={styles.packageCardTitleWarp}>
                                        <img className={styles.packageCardTitle} src="/images/experinceTitle.svg" alt="Pacakge Title" />
                                   </div>
                                   {/* btn */}
                                   <div className={styles.packagecta2}>
                                        <div 
                                             onClick={function () { Router.push({
                                                  pathname: '/offering',
                                                  query: { name: 'experience' }
                                             }, '/offering#tabs') }}
                                        >
                                             Read More
                                        </div>
                                   </div>
                              </div>
                              <div className={styles.packageCard}>

                                   <div className={styles.packageCardIconWarper}>
                                        <img className={styles.packageCardIcon} src="/images/express.svg" alt="Package Icon" />
                                   </div>

                                   <div className={styles.packageCardTitleWarp}>
                                        <img className={styles.packageCardTitle} src="/images/expressTitle.svg" alt="Pacakge Title" />
                                   </div> 

                                   {/* btn */}
                                   <div className={styles.packagecta}>
                                        <div
                                             onClick={function () {
                                                  Router.push({
                                                       pathname: '/offering',
                                                       query: { name: 'express' }
                                                  }, '/offering#tabs')
                                             }}
                                        >
                                             Read More
                                        </div>
                                   </div>
                              </div>

                         </div>

                        


                    </div>

               </div>
          </div>


     );
};
export default Packages;
