import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";

const Hero = () => {
  return (
    <div className='warper blackbg'>
    <div className="container">
    <div className={styles.heroSection}>  
      <p>
        Brands are just like People. They have a job, a personality, a style, &
        most importantly, Brands have dreams.
      </p>
      </div>
      </div>
    </div>


  );
};
export default Hero;
