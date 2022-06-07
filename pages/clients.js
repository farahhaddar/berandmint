import Head from 'next/head'
import Image from 'next/image'
import ClinetsCarousel from "../components/Clinets/ClinetsCarousel"

export default function Clinets() {
     return (
          <div>
               <Head>
                    <title>Brandmint | Clients </title>
                    <meta name="description" content="" />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <main>
                    <div className='warper whitebg'>
                         <div className="container">
                              <div>
                                   <ClinetsCarousel/>
                              </div>
                         </div>
                    </div>
               </main>



          </div>
     )
}
