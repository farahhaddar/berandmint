import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { NavLink } from "./NavLink";

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
      <div className="container">
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={163}
                  height={48}
                />
              </a>
            </Link>
          </div>
          <div className={styles.navLinks}>
            <NavLink href="/work">Work</NavLink>
            <NavLink href="/offering">Offering</NavLink>
            <NavLink href="/clients">Clients</NavLink>
          </div>
          <div className={styles.navzcta}>
            <NavLink href="">Lets Talk</NavLink>
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
                <NavLink
                  className={styles.greyText}
                  onClick={toggleNav}
                  href="/work"
                >
                  WORK
                </NavLink>
                <NavLink
                  className={styles.greyText}
                  onClick={toggleNav}
                  href="/offering"
                >
                  OFFERING1
                </NavLink>
                <NavLink
                  className={styles.greyText}
                  onClick={toggleNav}
                  href="/work"
                >
                  <a>CLIENT</a>
                </NavLink>
                <NavLink
                  className={styles.greyText}
                  onClick={toggleNav}
                  href="/work"
                >
                  <a>LETS TALK</a>
                </NavLink>
              </div>
              <div className={styles.socialMedia}>
                <a
                  href="https://www.facebook.com/brandmintdesign"
                  target="_blank"
                >
                  <Image
                    src="/images/facebook.svg"
                    alt="logo"
                    width={15}
                    height={30}
                  />
                </a>
                <a href="https://www.instagram.com/brandmint/" target="_blank">
                  <Image
                    src="/images/instagram.svg"
                    alt="logo"
                    width={29}
                    height={29}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/brandmint-design-agency/about/"
                  target="_blank"
                >
                  <Image
                    src="/images/linkedIn.svg"
                    alt="logo"
                    width={29}
                    height={29}
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
