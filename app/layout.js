// RootLayout.js

import Head from 'next/head'; // Import the Head component from Next.js
import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';

const inter = Inter({ subsets: ['latin'] });

const metadata = {
  title: 'Portfolio of Piyush Singh',
  description: 'This is the portfolio of Piyush Singh. I am a full stack developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.',
  image: 'https://firebasestorage.googleapis.com/v0/b/munch-396608.appspot.com/o/utils%2Fphoto_2024-05-03_12-34-30.jpg?alt=media&token=ba6f84a7-2f79-4675-b8cd-c0609d09bb52', // Ensure that the image URL is correct and accessible
  url: 'https://piyush7833.vercel.app',
  twitter: {
    handle: '@Piyush_7833',
    site: '@piyushsingh',
    cardType: 'summary_large_image',
  },
};

const RootLayout = ({ children }) => (
  <html lang="en">
    {/* Use the Head component to include metadata in the <head> section */}
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {/* Open Graph metadata */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:url" content={metadata.url} />
      {/* Twitter Card metadata */}
      <meta name="twitter:card" content={metadata.twitter.cardType} />
      <meta name="twitter:site" content={metadata.twitter.site} />
      <meta name="twitter:creator" content={metadata.twitter.handle} />
    </Head>
    <body className={inter.className}>
      <ToastContainer />
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar />
        {children}
      </main>
      <Footer />
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </body>
  </html>
);

export default RootLayout;
