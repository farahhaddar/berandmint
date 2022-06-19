import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { NavLink } from "../../NavLink";

const Hero = () => {
  return (
    <div className='warper blackbg'>
      <div className="container">
        <div className={styles.heroSection} >
          <h1 data-aos="fade-up">
              <p>
                Brands are just like People. They have a job, a personality, a style, &
                most importantly, <span className={styles.colortxt}>Brands have dreams.</span>
              </p>
          </h1>
          {/* btn */}
          <div className={styles.herocta} data-aos="fade-up" data-aos-delay="200">
            <NavLink href="/work">
              Read More
            </NavLink>
          </div>
        </div>
      </div>
    </div>


  );
};
export default Hero;
