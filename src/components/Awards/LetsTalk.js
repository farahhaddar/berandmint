import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Awards.module.css";
import { NavLink } from "../NavLink";

const LetsTalk = () => {

     
     return (
          <div className='warper greybg'>
               <div className="container">

                    <div className={styles.talkTitle} data-aos="zoom-out" data-aos-delay='100'>
                         Need Help? Let's Talk!
                    </div>

                    {/* btn  Home form */}
                    <div data-aos="fade-up" data-aos-delay='100'  className={styles.projectcta}>
                         <NavLink href="/#contact">
                              Let's Talk
                         </NavLink>
                    </div>

               </div>
          </div>


     );
};

export default LetsTalk;
