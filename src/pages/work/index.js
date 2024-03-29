import Head from 'next/head'
import EnvCat from "../../components/Work/EnvCat/EnvCat"
import FbCat from "../../components/Work/FbCat/FbCat"
import OtherCat from "../../components/Work/OtherCat/OtherCat"


export default function Work() {
     return (
          <>
               <Head>
                    <title>Brandmint | Work </title>
                    <meta name="description" content="" />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <main>
                    <EnvCat/>
                    <FbCat/>
                    <OtherCat />
               </main>
          </>
     )
}
