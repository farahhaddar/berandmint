import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { NavLink } from "../../NavLink";

const Clinets = () => {
     return (
          <div className='warper whitebg'>
               <div className="container">
                    <div className={styles.contactSection}>
                         <div className={styles.sectionTitle}>
                              Our Clinets
                         </div>
                         <div className={styles.secDescLight}>
                              Our variety of clients extends among different sectors:
                         </div>
                         <div className={styles.sectionDesc}>
                              <span>Food, Beverage & Hospitality</span> - <span>Finance</span> - <span>Retail</span> - <span>Services </span>- <span>Medical</span> - <span> Education & Culture</span>.
                         </div>

                         <div className={styles.clinetsCards}>
                              <a href="https://www.abc.com.lb/" rel="noopener noreferrer" target='_blank'>
                              <img src="/images/logos1.svg" alt="Logo" /></a>
                              <a href="https://www.abc.com.lb/" rel="noopener noreferrer" target='_blank'><img src="/images/logos2.svg" alt="Logo" /></a>
                              <a href="https://www.abc.com.lb/" rel="noopener noreferrer" target='_blank'><img src="/images/logos3.svg" alt="Logo" /></a>
                              <a href="https://www.abc.com.lb/" rel="noopener noreferrer" target='_blank'><img src="/images/logos4.png" alt="Logo" /></a>
                              <a href="https://www.abc.com.lb/" rel="noopener noreferrer" target='_blank'><img src="/images/logos5.svg" alt="Logo" /></a>
                              <a href="https://www.abc.com.lb/" rel="noopener noreferrer" target='_blank'><img src="/images/logos6.svg" alt="Logo" /></a>
                              <a href="https://www.abc.com.lb/" rel="noopener noreferrer" target='_blank'><img src="/images/logos8.svg" alt="Logo" /></a>
                              <a href="https://www.abc.com.lb/" rel="noopener noreferrer" target='_blank'><img src="/images/logos9.svg" alt="Logo" /></a>
                              <a href="https://www.abc.com.lb/" rel="noopener noreferrer" target='_blank'><img src="/images/logos1.svg" alt="Logo" /></a>
                              <a href="https://www.abc.com.lb/" rel="noopener noreferrer" target='_blank'><img src="/images/logos3.svg" alt="Logo" /></a>
                         </div>

                         
                         {/* btn */}
                         <div className={styles.packagecta}>
                              <NavLink href="/clients">
                                   View All Our Clinets
                              </NavLink>
                         </div>


                    </div>

               </div>
          </div>


     );
};
export default Clinets;
