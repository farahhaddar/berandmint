import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { NavLink } from "../../NavLink";

const Ceo = () => {
     return (
          <div className='warper greybg'>
               <div className="container">
                    <div className={styles.ceoSection}>
                         <div className={styles.ceoImage}>
                         <img src="/images/raya.png" alt="Ceo Image"  width='100%' height='100%'/>  
                         </div>
                         <div className={styles.ceoText}>
                              <div className={styles.ceoTextTitle}>
                                   Raya Nawbar
                              </div>
                              <div className={styles.ceoDets}>
                                   <p>CEO and Co-founder of Brandmint, Raya has over 18 years of experience & expertise in the field of branding, Design & management. Elaborating on Brandmint's unique Offering, she says:</p>
                                   <p>Basically, we wanted to challenge the traditional branding model, making it more customer-centric. Our years of experience in branding have allowed us to develop our very own brand building framework. This frame work is based on our belief that brands are just like people, they have a job to do.Using this framework, the team delivers strategic, agile brand roadmaps instead of the traditional, restricting brand guidelines.</p>
                                   <p>Raya was featured in the 2017 Leading Chief Executive Officer Award & Most Trusted Chief Executive Officer for Providing Outstanding Business Services in Lebanon. </p>
                              </div>

                         </div>
                    </div>
                   

                         
               </div>
          </div>


     );
};
export default Ceo;
