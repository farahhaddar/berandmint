import Head from 'next/head'
import Image from 'next/image'
import Offering from '../components/offering/Offering'

export default function Offerings() {
     return (
          <div>
               <Head>
                    <title>Brandmint | Offering </title>
                    <meta name="description" content="" />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <main>
                    <Offering/>

               </main>



          </div>
     )
}
