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
          {/* logo */}
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
          {/* btn */}
          <div className={styles.navzcta}>
            <NavLink href="/#contact">Lets Talk</NavLink>
          </div>
          {/* toggle btn*/}
          <div className={styles.navToggle} onClick={toggleNav}>
            <Image
              src="/images/sidenav-toggle.svg"
              alt="logo"
              width={16}
              height={14}
            />
          </div>

          {/* mobile nav */}
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
                  href="/"
                >
                  HOME
                </NavLink>

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
                  href="/clients"
                >
                  <a>CLIENT</a>
                </NavLink>
                <NavLink
                  className={styles.greyText}
                  onClick={toggleNav}
                  href="/#contact"
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
                    width={40}
                    height={40}
                  />
                </a>
                <a href="https://www.instagram.com/brandmint/" target="_blank">
                  <Image
                    src="/images/instagram.svg"
                    alt="logo"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/brandmint-design-agency/about/"
                  target="_blank"
                >
                  <Image
                    src="/images/linkedIn.svg"
                    alt="logo"
                    width={40}
                    height={40}
                  />
                </a>
              </div>
              <div className={styles.navAddress}>
                <div className={styles.contactItem}>
                  <div className={styles.icon}>
                    <svg id="ic_mail" xmlns="http://www.w3.org/2000/svg" width="15.719" height="10.286" viewBox="0 0 15.719 10.286">
                      <path id="Fill_1" data-name="Fill 1" d="M14.6,10.286H1.123A1.1,1.1,0,0,1,0,9.2V1.083A1.1,1.1,0,0,1,1.123,0H14.6a1.1,1.1,0,0,1,1.123,1.083V9.2A1.1,1.1,0,0,1,14.6,10.286ZM2.246,1.624a.57.57,0,0,0-.439.2.529.529,0,0,0,.087.761L7.508,6.926a.583.583,0,0,0,.7,0l5.614-4.339a.532.532,0,0,0,.207-.365.526.526,0,0,0-.12-.4.577.577,0,0,0-.789-.084L7.86,5.81,2.6,1.742A.567.567,0,0,0,2.246,1.624Z" fill="#00b180" />
                    </svg>
                  </div>
                  <div>
                    <a className={styles.textItem} href="mailto:info@brandmint.com">info@brandmint.com</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.icon}>
                    <svg id="ic_phone" xmlns="http://www.w3.org/2000/svg" width="15.677" height="15.677" viewBox="0 0 15.677 15.677">
                      <path id="Fill_1" data-name="Fill 1" d="M7.072,8.6C4.341,5.874,4.731,5.484,4.731,5.484L5.9,4.313a1.1,1.1,0,0,0,0-1.56L3.474.325A1.1,1.1,0,0,0,1.968.273,5.744,5.744,0,0,0,.049,3.143c-.39,1.95,1.561,4.681,4.681,7.8s5.852,5.071,7.8,4.681a5.744,5.744,0,0,0,2.87-1.919,1.1,1.1,0,0,0-.052-1.506L12.923,9.775a1.1,1.1,0,0,0-1.56,0l-1.17,1.171s-.39.39-3.121-2.341" fill="#00b180" />
                    </svg>
                  </div>
                  <div>
                    <a className={styles.textItem} href="tel:+961 1 748 204">+961 1 748 204</a>
                    <a className={styles.textItem} href="tel:+961 1 748 205">+961 1 748 205</a>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







