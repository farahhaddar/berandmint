import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
     return (
          <div>
               <Head>
                    <title>Brandmint | Project Name </title>
                    <meta name="description" content="" />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <main>
                    <div className='warper whitebg'>
                         <div className="container">
                              <div>
                                   Project Details Page
                              </div>
                         </div>
                    </div>
               </main>

          </div>
     )
}
