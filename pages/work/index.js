import Head from 'next/head'
import Image from 'next/image'
import styles from "../../styles/Work.module.css";
import { NavLink } from "../../components/NavLink";
import EnvCat from "../../components/Work/EnvCat/EnvCat"
import FbCat from "../../components/Work/FbCat/FbCat"
import OtherCat from "../../components/Work/OtherCat/OtherCat"


export default function Home() {
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
