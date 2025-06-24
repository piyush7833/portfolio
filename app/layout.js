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

export async function generateMetadata(parent) {
  const previousImages = (await parent).openGraph?.images || []
  
  return {
    title: 'Piyush Singh - Full Stack Developer | Frontend Developer | Backend Developer | Freelance Developer',
    description: 'Piyush Singh is a professional Full Stack Developer, Frontend Developer, and Backend Developer available for freelance work. Specializing in React, Next.js, Node.js, and modern web technologies. Hire Piyush for your next software development project.',
    keywords: [
      'Piyush Singh',
      'Piyush',
      'software developer',
      'full stack developer',
      'frontend developer',
      'backend developer',
      'freelance developer',
      'React developer',
      'Next.js developer',
      'Node.js developer',
      'JavaScript developer',
      'TypeScript developer',
      'web developer',
      'freelance software developer',
      'hire developer',
      'remote developer',
      'UI/UX developer',
      'mobile app developer',
      'Flutter developer',
      'MongoDB developer',
      'PostgreSQL developer',
      'GraphQL developer',
      'REST API developer',
      'Docker developer',
      'Firebase developer'
    ],
    authors: [{ name: 'Piyush Singh' }],
    creator: 'Piyush Singh',
    publisher: 'Piyush Singh',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://piyush7833.vercel.app'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: 'Piyush Singh - Full Stack Developer | Frontend & Backend Developer | Freelance',
      description: 'Professional Full Stack Developer Piyush Singh specializing in React, Next.js, Node.js. Available for freelance projects. Expert in frontend and backend development.',
      url: 'https://piyush7833.vercel.app',
      siteName: 'Piyush Singh Portfolio',
      images: [
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/munch-396608.appspot.com/o/utils%2Fphoto_2024-05-03_12-34-30.jpg?alt=media&token=ba6f84a7-2f79-4675-b8cd-c0609d09bb52',
          width: 1200,
          height: 630,
          alt: 'Piyush Singh - Full Stack Developer',
        },
        ...previousImages
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Piyush Singh - Full Stack Developer | Frontend & Backend Developer',
      description: 'Professional Full Stack Developer Piyush Singh specializing in React, Next.js, Node.js. Available for freelance projects.',
      creator: '@Piyush_7833',
      images: ['https://firebasestorage.googleapis.com/v0/b/munch-396608.appspot.com/o/utils%2Fphoto_2024-05-03_12-34-30.jpg?alt=media&token=ba6f84a7-2f79-4675-b8cd-c0609d09bb52'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  }
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Piyush Singh',
    alternateName: 'Piyush',
    jobTitle: 'Full Stack Developer',
    description: 'Professional Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance work.',
    url: 'https://piyush7833.vercel.app',
    image: 'https://firebasestorage.googleapis.com/v0/b/munch-396608.appspot.com/o/utils%2Fphoto_2024-05-03_12-34-30.jpg?alt=media&token=ba6f84a7-2f79-4675-b8cd-c0609d09bb52',
    sameAs: [
      'https://github.com/piyush7833',
      'https://www.linkedin.com/in/piyush-singh-403089221/',
      'https://x.com/Piyush_7833',
      'https://stackoverflow.com/users/17518371/piyush',
      'https://leetcode.com/u/piyush7833/',
      'https://www.instagram.com/_piyush7833/'
    ],
    knowsAbout: [
      'React.js',
      'Next.js',
      'Node.js',
      'JavaScript',
      'TypeScript',
      'Frontend Development',
      'Backend Development',
      'Full Stack Development',
      'Flutter',
      'MongoDB',
      'PostgreSQL',
      'GraphQL',
      'REST API',
      'Docker',
      'Firebase'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance Developer'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gyanpur',
      addressRegion: 'Bhadohi',
      addressCountry: 'India'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+917310094880',
      contactType: 'customer service',
      email: 'ps671248@gmail.com'
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://piyush7833.vercel.app" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Piyush Singh" />
        <meta name="application-name" content="Piyush Singh Portfolio" />
        <meta name="msapplication-TileImage" content="/image/profile.jpg" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={inter.className}>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
        />
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
