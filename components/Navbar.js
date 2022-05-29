import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Navbar.module.css'
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    if (showNav) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";

    setShowNav((prevState) => {
      return !prevState;
    });
  };
  return (
    <nav>
      <div className='container'>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <Image src="/images/logo.svg" alt="logo" width={163} height={48} />
              </a>
            </Link>
          </div>
          <div class={styles.navLinks}>
            <Link href="/work">
              <a>Work</a>
            </Link>
            <Link href="/offering">
              <a> Offering</a>
            </Link>
            <Link href="/clients">
              <a>Clients</a>
            </Link>
          </div>
          <div className={styles.navzcta}>
            <Link href="">
              <a>Lets Talk</a>
            </Link>
          </div>
          <div className={styles.navToggle} onClick={toggleNav}>
            <Image
              src="/images/sidenav-toggle.svg"
              alt="logo"
              width={16}
              height={14}
            />
          </div>
          {showNav && (
            <div className={styles.mobileNav}>
              <div className={styles.closeContainer}>
                <Image
                  onClick={toggleNav}
                  src="/images/close.svg"
                  alt="logo"
                  width={64}
                  height={24}
                />
              </div>
              <div className={styles.sideNav}>
                <Link href="/work">
                  <a>WORK</a>
                </Link>
                <Link href="/work">
                  <a className={styles.greyText}>OFFERING</a>
                </Link>
                <Link href="/work">
                  <a className={styles.greyText}>CLIENT</a>
                </Link>
                <Link href="/work">
                  <a className={styles.greyText}>LETS TALK</a>
                </Link>
              </div>
              <div className={styles.socialMedia}>
                <a href="https://www.facebook.com/brandmintdesign" target='_blank'>
                <Image
                  src="/images/facebook.svg"
                  alt="logo"
                  width={28}
                  height={40}
                />
                </a>
                <a href="https://www.instagram.com/brandmint/" target='_blank'>
                <Image
                  src="/images/instagram.svg"
                  alt="logo"
                  width={64}
                  height={24}
                />
                </a>
                <a href="https://www.linkedin.com/company/brandmint-design-agency/about/" target='_blank'>
                <Image
                  src="/images/linkedIn.svg"
                  alt="logo"
                  width={64}
                  height={24}
                />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
