import Link from "next/link";
import Image from "next/image";
import classes from "./Navbar.module.css";
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
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <Link href="/">
          <a>
            <Image src="/images/logo.svg" alt="logo" width={163} height={48} />
          </a>
        </Link>
      </div>
      <div class={classes.navLinks}>
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
      <div className={classes.navzcta}>
        <Link href="">
          <a>Lets Talk</a>
        </Link>
      </div>
      <div className={classes.navToggle} onClick={toggleNav}>
        <Image
          src="/images/sidenav-toggle.svg"
          alt="logo"
          width={16}
          height={14}
        />
      </div>
      {showNav && (
        <div className={classes.mobileNav}>
          <div className={classes.closeContainer}>
            <Image
              onClick={toggleNav}
              src="/images/close.svg"
              alt="logo"
              width={64}
              height={24}
            />
          </div>
          <div className={classes.sideNav}>
            <div>WORK</div>
            <div className={classes.greyText}>OFFERING</div>
            <div className={classes.greyText}>CLIENT</div>
            <div className={classes.greyText}>LETS TALK</div>
          </div>
          <div className={classes.socialMedia}>
            <Image
              src="/images/facebook.svg"
              alt="logo"
              width={28}
              height={40}
            />
            <Image
              src="/images/instagram.svg"
              alt="logo"
              width={64}
              height={24}
            />
            <Image
              src="/images/linkedIn.svg"
              alt="logo"
              width={64}
              height={24}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
