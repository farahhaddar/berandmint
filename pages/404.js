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
                         <img src="/images/404.png" alt="404 Image" />
                         <h1>Whoops…this page is not available</h1>
                         <div className='link'> <Link href='/'><a>Go Back</a></Link></div>
                    </div>
               </div>
          </main>
      );
}
 
export default NotFound;