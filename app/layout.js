import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { personalData } from '../utils/data/personal-data';
import { Analytics } from "@vercel/analytics/react"
import './css/card.scss';
import './css/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(
  parent
) {
  const previousImages = (await parent).openGraph?.images || []
  return {
    title: personalData.name,
    description: personalData.description,
    openGraph: {
      images: ['https://firebasestorage.googleapis.com/v0/b/munch-396608.appspot.com/o/utils%2Fphoto_2024-05-03_12-34-30.jpg?alt=media&token=ba6f84a7-2f79-4675-b8cd-c0609d09bb52', ...previousImages],
    },
  }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
          <Navbar />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      <Analytics />
    </html>
  )
};
