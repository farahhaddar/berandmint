import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Clinets.module.css";
import { NavLink } from "../NavLink";
import ClinetsSlider from "../Carousel/ClinetsSlider";

const ClinetsMain = () => {
     return (
          <div className='warper whitebg'>
               <div className="container">
                    
                         <div className={styles.sectionTitle}>
                              Our Clients
                         </div>
                         <div className={styles.secDescLight}>We're proud of helping the best companies deliver positive emotions to their customers. </div>
                         

                         
                    

                    <ClinetsSlider title='Food & Beverage' />
                    <ClinetsSlider title='Hospitality & Real estate' />
                    <ClinetsSlider title='Finance' />
                    <ClinetsSlider title='Retail' />
                    <ClinetsSlider title='Services' />
                    <ClinetsSlider title='Medical' />


                    {/* btn back Home */}
                    <div className={styles.projectcta}>
                         <NavLink href="/">
                              Back To Home
                         </NavLink>
                    </div>


               </div>
          </div>


     );
};
export default ClinetsMain;
