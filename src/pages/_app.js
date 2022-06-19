import Layout from '../components/Layout'
import '../styles/globals.css'
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-modal-video/css/modal-video.min.css';
import 'animate.css';

function MyApp({ Component, pageProps }) {
 
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout >
  )
}

export default MyApp