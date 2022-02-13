import Head from 'next/head';
import About from '../components/about';
import Banner from '../components/banner';
import Judges from '../components/judges';
import Layout from '../components/layout';
import Location from '../components/location';
import Prize from '../components/prize';
import Stack from '../components/stack';
import Faq from '../components/faq';
import BackToTop from '../components/backtotop';

export default function Home() {
  return (
    <>
      <div className='bg-dark'>
        <Head>
          <title>v1</title>
          <link rel='icon' href='/favicon.ico' />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <Layout>
          <Banner />
          <About />
          <Location />
          <Stack />
          <Prize />
          <Judges />
          <Faq />
        </Layout>
      </div>
      <BackToTop />
    </>
  );
}
