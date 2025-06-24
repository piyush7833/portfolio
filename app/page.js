import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Github from "./components/homepage/github";
import Skills from "./components/homepage/skills";
import FreelanceSection from "./components/homepage/freelance/index";
import { personalData } from "../utils/data/personal-data";
import Head from "next/head";

export const metadata = {
  title: 'Piyush Singh - Full Stack Developer | Frontend Developer | Backend Developer | Freelance Developer',
  description: 'Piyush Singh is a professional Full Stack Developer, Frontend Developer, and Backend Developer available for freelance work. Specializing in React, Next.js, Node.js, and modern web technologies. Hire Piyush for your next software development project.',
  keywords: personalData.seoKeywords.join(', '),
  openGraph: {
    title: 'Piyush Singh - Full Stack Developer | Frontend & Backend Developer ',
    description: 'Professional Full Stack Developer Piyush Singh specializing in React, Next.js, Node.js. Available for freelance projects. Expert in frontend and backend development.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: personalData.image,
        width: 1200,
        height: 630,
        alt: "Freelance Software Development by Piyush Singh",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piyush Singh - Full Stack Developer | Frontend & Backend Developer',
    description: 'Professional Full Stack Developer Piyush Singh specializing in React, Next.js, Node.js. Available for freelance projects.',
    images: [personalData.image],
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Hire Me for Freelance Software Development | Piyush Singh</title>
        <meta property="og:title" content="Hire Me for Software Development | Piyush Singh" />
        <meta property="og:description" content="Hire Piyush Singh for software development, web app development, backend APIs, and consulting." />
        <meta property="og:image" content="/card.png" />
        <meta property="og:url" content="https://piyush7833.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* SEO-optimized semantic structure */}
      <header>
        <HeroSection />
      </header>
      
      <main>
        <section id="about" aria-label="About Piyush Singh">
          <AboutSection />
        </section>

        <section id="freelance" aria-label="Freelance Availability">
          <FreelanceSection />
        </section>
        
        <section id="experience" aria-label="Work Experience">
          <Experience />
        </section>
        
        <section id="skills" aria-label="Technical Skills">
          <Skills />
        </section>
        
        <section id="projects" aria-label="Portfolio Projects">
          <Projects />
        </section>
        
        <section id="education" aria-label="Education">
          <Education />
        </section>
        
        <section id="github" aria-label="GitHub Activity">
          <Github/>
        </section>
        
        <section id="contact" aria-label="Contact Information">
          <ContactSection />
        </section>
      </main>
    </>
  )
};