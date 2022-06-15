import Head from 'next/head'
import Image from 'next/image'
import CategoryDets from '../../../components/Work/Category/CategoryDets'

export default function Category() {
     return (
          <div>
               <Head>
                    <title>Brandmint | Category Name </title>
                    <meta name="description" content="" />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <main>
                    <CategoryDets/>
               </main>



          </div>
     )
}
