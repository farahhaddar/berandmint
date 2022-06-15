import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Awards.module.css";
import { NavLink } from "../NavLink";

const LetsTalk = () => {

     
     return (
          <div className='warper greybg'>
               <div className="container">

                    <div className={styles.talkTitle}>
                         Need Help? Let's Talk!
                    </div>

                    {/* btn  Home form */}
                    <div className={styles.projectcta}>
                         <NavLink href="/#contact">
                              Let's Talk
                         </NavLink>
                    </div>

               </div>
          </div>


     );
};

export default LetsTalk;
