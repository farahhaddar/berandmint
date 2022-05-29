import Link from "next/link";
import Image from "next/image";
import classes from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
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
      <div
        onClick={() => {
          setShowNav((prevState) => {
            return !prevState;
          });
        }}
        className={classes.mobileNav}
      >
        <Image
          src="/images/sidenav-toggle.svg"
          alt="logo"
          width={16}
          height={14}
        />
      </div>
      <div
        style={{ position: "fixed", backgroundColor: "white", width: "100%" }}
      ></div>
    </nav>
  );
};

export default Navbar;
