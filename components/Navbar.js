import Link from 'next/link'
import Image from "next/image"

const Navbar = () => {
     return ( 
          <nav>
               <div className="logo">
                    <Link href='/'>
                    <a>
                         <Image src="/me.jpg" alt="logo" width={128} height={77} />
                    </a>
                    </Link>
               </div>
               <div className='navLinks'>
                    <Link href='/work'><a>Work</a></Link>
                    <Link href='/offering'><a> Offering</a></Link>
                    <Link href='/clients'><a>Clients</a></Link>
               </div>
               <div className="navzcta">
                    <Link href=''>
                         <a>
                              Lets Talk
                         </a>
                    </Link>
               
               </div>
              
          </nav>
      );
}
 
export default Navbar;