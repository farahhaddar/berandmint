import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { NavLink } from "../../NavLink";

const Form = () => {
     return (
          <div className='warper whitebg'>
               <div className="container">
                    <a id="contact"></a>
                    <div className={styles.contactSection}>
                         <div className={styles.sectionTitle}>
                              Let's talk
                         </div>
                         <div className={styles.sectionDesc}>
                              We'd love to hear from you! Drop us a line, Give us a call or pass by our office at Antwork.
                         </div>

                         {/* form */}
                         <form className={styles.formInput}>
                              <div className={styles.formrow}>
                                   <input type="text" id="name" name="name" placeholder="Full name*" required/>
                                   <input type="email" id="email" name="email" placeholder="Your e-mail address*" required/>
                              </div>
                              <input type="text" name="subject" id="subject" placeholder="Subject*" required/>
                              <textarea name="message" id="message" cols="30" rows="10" placeholder="Drop us a message here…" required></textarea>
                              <div className={styles.formbtn}>
                              <button type="submit">Send</button>
                              </div>
                         </form>


                    </div>
               
               </div>
          </div>


     );
};
export default Form;
