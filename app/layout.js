import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio of Piysuh Singh',
  description: 'This is the portfolio of Piyush Singh. I am a full stack developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.',
  image: '/image/profile.jpg',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://piyush7833.vercel.app',
    site_name: 'Portfolio of Piyush Singh',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/munch-396608.appspot.com/o/utils%2Fphoto_2024-05-03_12-34-30.jpg?alt=media&token=ba6f84a7-2f79-4675-b8cd-c0609d09bb52',
        width: 800,
        height: 600,
        alt: 'Piyush Singh',
      },
    ],
  },
  twitter: {
    handle: '@Piyush_7833',
    site: '@piyushsingh',
    cardType: 'summary_large_image',
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
};
