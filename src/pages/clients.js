import Head from 'next/head'
import Image from 'next/image'
import ClinetsMain from "../components/Clinets/Clintes"

export default function Clinets() {
     return (
          <div>
               <Head>
                    <title>Brandmint | Clients </title>
                    <meta name="description" content="" />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <main>  
                 <ClinetsMain/> 
               </main>



          </div>
     )
}
