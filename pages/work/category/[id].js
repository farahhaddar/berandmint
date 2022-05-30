import Head from 'next/head'
import Image from 'next/image'
import Category from '../../../components/Work/Category/Category'
export default function Home() {
     return (
          <div>
               <Head>
                    <title>Brandmint | Category Name </title>
                    <meta name="description" content="" />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <main>
                    <Category/>
               </main>



          </div>
     )
}
