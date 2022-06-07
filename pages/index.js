import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Home/Hero/Hero";
import Projects from "../components/Home/Projects/Projects";
import Ceo from "../components/Home/Ceo/Ceo";
import Form from "../components/Home/Form/Form"
import styles from "../styles/Home.module.css";
import Packages from "../components/Home/Packages/Packages";
import Clients from "../components/Home/Clients/Clients"
import Video from "../components/Home/Video/Video";


export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Brandmint | Home </title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero/>
        <Projects />
        <Video/>
        <Packages/>
        <Clients/>
        <Ceo/>
        <Form/>
      </main>

    </div>
  );
}
