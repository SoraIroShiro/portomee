// --------------------------------------- Project List
export const ProjectList = [
  {
    id: "private-project",
    img: "/project/soranime-stream/soranime-1.png",
    title: "Soranime Streaming",
    description:
      "A modern anime streaming platform that uses AniList API for anime information and Google Drive for video storage, featuring user authentication, admin management system, and a responsive interface built with Next.js.",

    tech_stack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Node.js",
      "AniList GraphQL API",
    ],

    github_url: "https://github.com/SoraIroShiro/soranime",

    demo_url: "https://soranime-production.vercel.app/",

    fullDescription:
      "This is a comprehensive anime streaming platform built with modern web technologies. The application leverages AniList's GraphQL API for accurate anime information and metadata, while using Google Drive as the primary storage solution for video content. The platform features a clean, responsive interface with user authentication, admin management capabilities, and an intuitive anime browsing experience.",

    features: [
      "User authentication and authorization with JWT",
      "Admin dashboard for anime management and content uploading",
      "Integration with AniList GraphQL API for comprehensive anime data",
      "Google Drive integration for video storage and streaming",
      "Responsive design with modern UI components",
      "Real-time anime search and filtering",
      "Episode management and playback system",
      "MongoDB database for user data and anime metadata storage",
      "Secure middleware for protected routes",
    ],

    challenges:
      "The main challenge was integrating multiple data sources effectively - combining AniList's comprehensive anime database with custom Google Drive storage links, while maintaining fast loading times and a seamless user experience. This was overcome by implementing efficient data caching strategies and optimizing the GraphQL queries to fetch only necessary data.",
    screenshots: [
      "/project/soranime-stream/soranime-1.png",
      "/project/soranime-stream/soranime-2.png",
      "/project/soranime-stream/soranime-3.png",
      "/project/soranime-stream/soranime-4.png",
      "/project/soranime-stream/soranime-5.png",
      "/project/soranime-stream/soranime-6.png",
      "/project/soranime-stream/soranime-7.png",
    ],
  },
];

// --------------------------------------- Skills

export const stackList = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    name: "HTML",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    name: "CSS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    name: "ReactJS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    name: "NextJs",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    name: "Git",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/vuejs/vuejs-original.svg",
    name: "VueJS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    name: "NodeJS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    name: "Python",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    name: "Figma",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/tailwindcss/tailwindcss-original.svg",
    name: "TailwindCSS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    name: "VS Code",
  },
];
