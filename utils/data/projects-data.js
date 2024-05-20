import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'M.U.N.C.H. (Food Aggregator)',
        description: "MUNCH: A pioneering web app tailored for college students, MUNCH redefines campus dining. Seamlessly order delicious meals from your hostel, customize your preferences, and enjoy hassle-free transactions. Real-time tracking, dietary accommodations, and record maintenance ensure a delightful experience. Explore the future of food convenience!",
        tools: ["Next.Js","Taliwind Css","Typescript","Prisma","Postrgres Sql","Firebase Storage","Razorpay", 'GeminiAi API'],
        role: 'Full-Stack Developer',
        code: 'https://github.com/piyush7833/MUNCH',
        demo: 'https://munchh.vercel.app/',
        // image: crefin,
    },
    {
        id: 2,
        name: 'IIITU Snapshots',
        description: 'IIITU Snapshot is a web app built to relive and celebrate your college memories through photos and videos. This platform offers a seamless way to capture, share, and engage with cherished moments from your college journey with a user-friendly interface, easy navigation, and a secure login system.',
        tools: ['React.JS', 'Tailwind CSS', "Firebase Storage", "Express.JS", "Node.JS","Razorpay", "MongoDB","Styled Components"],
        role: 'Full Stack Developer',
        code: 'https://github.com/piyush7833/iiitu-snapshots-frontend',
        demo: 'https://iiitu-snapshots.vercel.app/',
        // image: travel,
    },
    {
        id: 3,
        name: 'IIITU Biometric Entry System',
        description: 'IIITU Biometric Entry System is a web app designed to streamline the entry and exit process for students and faculty members at the college campus. This platform offers a secure and efficient way to track entry and exit times, and ensure a safe and organized environment for all members of the college community.',
        tools: ['Html', 'CSS', 'JavaScript','Firebase',"App Script"],
        code: 'https://github.com/piyush7833/Biometric_Entry-Exit_IIITU',
        role: 'Full Stack Developer',
        demo: 'https://github.com/piyush7833/Biometric_Entry-Exit_IIITU',
        // image: realEstate,
    }
];
