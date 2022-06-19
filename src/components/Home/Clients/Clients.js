import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { NavLink } from "../../NavLink";

const Clinets = () => {
     return (
          <div className='warper whitebg'>
               <div className="container">
                    <div className={styles.contactSection}>
                         <div className={styles.sectionTitle} data-aos="fade-down">
                              Our Clients
                         </div>
                         <div data-aos="fade-up" data-aos-delay="200">
                         <div className={styles.secDescLight} >
                              Our variety of clients extends among different sectors:
                         </div>
                         <div className={styles.sectionDesc} >
                              <span>Food, Beverage & Hospitality</span> - <span>Finance</span> - <span>Retail</span> - <span>Services </span>- <span>Medical</span> - <span> Education & Culture</span>.
                         </div>
                         </div>

                         <div className={styles.clinetsCards} data-aos='zoom-in' data-aos-delay='400'>
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
                         <div className={styles.projectcta} data-aos='fade-up' data-aos-delay='400'>
                              <NavLink href="/clients">
                                   View All Our Clients
                              </NavLink>
                         </div>


                    </div>

               </div>
          </div>


     );
};
export default Clinets;
