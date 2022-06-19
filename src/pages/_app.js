import React, { useEffect } from "react";
import Layout from '../components/Layout'
import '../styles/globals.css'
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-modal-video/css/modal-video.min.css';
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout >
  )
}

export default MyApp
