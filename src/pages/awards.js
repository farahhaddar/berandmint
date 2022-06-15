import Head from 'next/head'
import Image from 'next/image'
import AwardMain from '../components/Awards/Awards'
import LetsTalk from '../components/Awards/LetsTalk'

export default function Awards() {
     return (
          <div>
               <Head>
                    <title>Brandmint | Clients </title>
                    <meta name="description" content="" />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <main>
                    <AwardMain/>
                    <LetsTalk/>
               </main>



          </div>
     )
}
