import Head from 'next/head'
import Image from 'next/image'
import Slider from '../../../components/Carousel/Slider'
import Project from '../../../components/Work/Projects/Project'


export default function Home() {
     return (
          <div>
               <Head>
                    <title>Brandmint | Project Name </title>
                    <meta name="description" content="" />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <main>
                    <Project/>
                   
               </main>

          </div>
     )
}
