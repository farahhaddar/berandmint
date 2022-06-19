import Link from "next/link"
import { useEffect } from 'react'
import { useRouter } from 'next/router'

     const NotFound = () => {
          const router = useRouter()

          useEffect(() => {
               // setTimeout(() => {
               //      // router.go(-1)
               //      // router.go(1)
               //      router.push('/')
               // }, 5000)
          }, [])
     return ( 
          <main>
               <div className='warper whitebg not-found'>
                    <div className="container">
                         <img src="/images/404.png" alt="404 Image" data-aos="zoom-out" data-aos-delay='100' />
                         <h1 data-aos="zoom-in" data-aos-delay='100'>Whoops…this page is not available</h1>
                         <div data-aos="fade-up" data-aos-delay='100' className='link'> <Link href='/'><a>Go Back</a></Link></div>
                    </div>
               </div>
          </main>
      );
}
 
export default NotFound;