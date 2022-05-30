import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { NavLink } from "../../NavLink";

const Hero = () => {
  return (
    <div className='warper blackbg'>
      <div className="container">
        <div className={styles.heroSection}>
          <p>
            Brands are just like People. They have a job, a personality, a style, &
            most importantly, <span className={styles.colortxt}>Brands have dreams.</span>
          </p>
          {/* btn */}
          <div className={styles.herocta}>
            <NavLink href="/work">
              READ MORE
            </NavLink>
          </div>
        </div>
      </div>
    </div>


  );
};
export default Hero;
