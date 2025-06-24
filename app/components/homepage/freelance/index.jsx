import { personalData } from "@/utils/data/personal-data";
import { RiContactsFill } from "react-icons/ri";
import React from "react";
import Image from "next/image";
import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from '/public/lottie/development.json';

export default function FreelanceSection() {
  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Freelance Software Development",
    "provider": {
      "@type": "Person",
      "name": personalData.name,
      "url": "https://piyush7833.vercel.app"
    },
    "areaServed": "Worldwide",
    "description": "Hire Piyush Singh for freelance software development, web app development, backend APIs, and consulting. Available on Fiverr, Upwork, or direct contact.",
    "availableChannel": [
      {
        "@type": "ServiceChannel",
        "serviceUrl": personalData.fiverr,
        "serviceLocation": "Fiverr"
      },
      {
        "@type": "ServiceChannel",
        "serviceUrl": personalData.upwork,
        "serviceLocation": "Upwork"
      },
      {
        "@type": "ServiceChannel",
        "serviceUrl": `mailto:${personalData.email}`,
        "serviceLocation": "Direct Email"
      }
    ]
  };

  return (
    <div className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] min-h-[60vh] max-h-[100vh] flex flex-col justify-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Section SVG background */}
      <Image
        src="/section.svg"
        alt="Section background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 w-full h-full object-cover"
      />
      {/* Blurred accent circle */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20 pointer-events-none"></div>
      {/* Section Title Bar */}
      <div className="flex justify-center my-4 lg:py-6">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md uppercase tracking-wider">
            Freelance
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto px-2 py-2 gap-2 w-full flex-1">
        {/* Illustration/Lottie */}
        <div className="w-full lg:w-[48%] flex justify-center items-center">
          <div className="w-auto h-auto  flex items-center justify-center">
            <AnimationLottie animationPath={lottieFile} />
          </div>
        </div>
        {/* Glassmorphism Card Content */}
        <div className="w-full lg:w-[48%] bg-white/10 backdrop-blur-md border border-[#25213b] rounded-2xl shadow-xl p-3 md:p-5 flex flex-col items-center gap-3">
          <h3 className="font-extrabold text-lg md:text-xl text-white text-center leading-tight">Hire Me for Freelance Software Development</h3>
          <p className="text-[#16f2b3] text-xs md:text-base text-center uppercase font-semibold tracking-wide">Available Worldwide for Web, Backend, and Consulting Projects</p>
          <p className="text-gray-200 text-xs md:text-base text-center max-w-xl">
            Looking for a reliable freelance developer? I offer <strong>custom web development</strong>, <strong>backend API design</strong>, <strong>performance optimization</strong>, and <strong>technical consulting</strong> for startups, businesses, and individuals. Let&apos;s build something great together!
          </p>
          <ul className="bg-[#181c2f]/80 border border-[#25213b] rounded-lg shadow p-2 w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs md:text-sm text-gray-200 list-disc list-inside">
            <li>Full Stack Web App Development</li>
            <li>Backend APIs & Microservices</li>
            <li>Performance Optimization</li>
            <li>Cloud Deployment</li>
            <li>Technical Consulting</li>
            <li>UI/UX Implementation</li>
          </ul>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 justify-center items-center w-full">
            <a
              href={personalData.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-green-600 px-4 py-1.5 text-white font-semibold shadow hover:bg-green-700 transition text-xs md:text-sm"
              aria-label="Hire on Fiverr"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.371 0 0 5.371 0 12c0 6.627 5.371 12 12 12s12-5.373 12-12c0-6.629-5.371-12-12-12zm0 22.153c-5.607 0-10.153-4.547-10.153-10.153 0-5.607 4.546-10.153 10.153-10.153 5.607 0 10.153 4.546 10.153 10.153 0 5.606-4.546 10.153-10.153 10.153zm-2.153-7.153v-2.153h4.306v2.153h2.153v-2.153h1.077v-2.153h-1.077v-2.153c0-1.188-.965-2.153-2.153-2.153h-2.153c-1.188 0-2.153.965-2.153 2.153v2.153h-1.077v2.153h1.077v2.153h2.153zm0-4.306v-2.153c0-.594.482-1.077 1.077-1.077h2.153c.595 0 1.077.483 1.077 1.077v2.153h-4.307z"/></svg>
              Fiverr
            </a>
            <a
              href={personalData.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#6fda44] px-4 py-1.5 text-white font-semibold shadow hover:bg-[#57b33b] transition text-xs md:text-sm"
              aria-label="Hire on Upwork"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 32 32"><path d="M27.5 4h-23A.5.5 0 0 0 4 4.5v23a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5v-23a.5.5 0 0 0-.5-.5zm-1.5 22H6V6h20v20zm-7.5-7.5c-1.1 0-2.1-.4-2.8-1.1l-1.2 1.2V22h-2v-7.5h2v1.1c.7-.7 1.7-1.1 2.8-1.1 2.2 0 4 1.8 4 4s-1.8 4-4 4zm0-6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-6 6c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm14 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"/></svg>
              Upwork
            </a>
            <a
              href={`mailto:${personalData.email}?subject=Freelance%20Project%20Inquiry`}
              className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-white font-semibold shadow hover:bg-blue-700 transition text-xs md:text-sm"
              aria-label="Contact Directly"
            >
              <RiContactsFill size={16} />
              Contact Directly
            </a>
          </div>
          <div className="text-center">
            <span className="text-xs text-gray-400">Fast response • NDA available • Satisfaction guaranteed</span>
          </div>
          <div className="w-full flex flex-col items-center mt-1 hidden md:flex">
            <div className="bg-[#181c2f]/80 border border-[#25213b] rounded-lg px-3 py-2 text-gray-300 text-xs italic max-w-md text-center shadow">
              “Piyush delivered our project on time and exceeded expectations. Highly recommended for any web or backend work!”
              <div className="mt-1 text-[#16f2b3] font-semibold">— Satisfied Client</div>
            </div>
          </div>
          <div className="mt-2 w-full flex justify-center">
            <a
              href={`mailto:${personalData.email}?subject=Let&#39;s%20Start%20Your%20Project`}
              className="inline-block bg-gradient-to-r from-pink-500 to-violet-600 hover:from-violet-600 hover:to-pink-500 text-white font-bold py-2 px-6 rounded-full text-xs md:text-base shadow-lg transition animate-pulse"
            >
              Get a Free Quote Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 