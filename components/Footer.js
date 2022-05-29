import Link from 'next/link'
import Image from "next/image"

const Footer = () => {
     return (
          <footer>
               <div className="col1">
                    <div className="logo">
                         <Link href='/'>
                              <a>
                                   <Image src="/me.jpg" alt="logo" width={128} height={77} />
                              </a>
                         </Link>
                    </div>
                    <div className="footerDec">
                         Funding freemium long tail hypotheses first mover advantage assets ownership niche market startup investor.
                    </div>
                    <div className="footerAddress">
                         <div className="contactItem">
                              <div className="icon">
                                   V
                              </div>
                              <div className="text">
                                   <a href="mailto:info@brandmint.com">info@brandmint.com</a>
                              </div>
                         </div>
                         <div className="contactItem">
                              <div className="icon">
                                   V
                              </div>
                              <div className="text">
                                   <a href="tel:+961 1 748 204">+961 1 748 204</a>
                                   <a href="tel:+961 1 748 205">+961 1 748 205</a>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="col2 footerLinks">
                         <Link href='/'><a>Home</a></Link>
                         <Link href='/offering'><a> What we do</a></Link>
                         <Link href='/clients'><a>Our Clients</a></Link>
               </div>
               <div className="col3">
                    <div className="colTitle">
                         Address
                    </div>
                    <div className="addressSt">
                         Kantari, May Ziadeh St. Antwort bldg. Beirut, Lebanon
                    </div>
                    <div className="addressbldg">
                    Antwort bldg.
                    </div>
                    <div className="addressCountry">
                    Beirut, Lebanon
                    </div>

                    <div className="socialMedia">
                         <a href="">Facebook</a>
                         <a href="">Insta</a>
                         <a href="">LinkedIn</a>
                    </div>
               </div>

          </footer>
     );
}

export default Footer;