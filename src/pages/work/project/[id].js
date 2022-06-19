import Head from 'next/head'
import Project from '../../../components/Work/Projects/Project'


export default function ProjectDets() {
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
