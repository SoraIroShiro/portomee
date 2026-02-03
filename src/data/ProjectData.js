// --------------------------------------- Project List
export const ProjectList = [
  {
    id: "self-project",
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
  {
    id: "Thesis-project",
    img: "/project/sentiment-analyst/sa-1.png",
    title:
      "Genshin Impact Player Review Sentiment Analysis (TF-IDF + SVM + Lexicon + LLM)",
    description:
      "A sentiment analysis research project that scrapes 40,000 Google Play reviews (2023–2025), builds pseudo ground-truth with lexicon-based labeling, trains a TF-IDF (1–3 n-gram) + Linear SVM classifier, and delivers evaluation, visual insights, and LLM-based theme summarization.",

    tech_stack: [
      "Python",
      "Pandas",
      "scikit-learn",
      "TF-IDF (n-gram 1–3)",
      "Linear SVM (LinearSVC)",
      "Sastrawi (Indonesian stemming)",
      "google-play-scraper",
      "IBM Granite (LLM Summarization)",
      "Matplotlib",
      "WordCloud",
    ],

    github_url: "https://github.com/SoraIroShiro/Project-Analisis-Sentimen-genshin-BE",
    demo_url: "https://ejurnal.umri.ac.id/index.php/JIK/article/view/10553", 

    fullDescription:
      "This research analyzes player sentiment toward Genshin Impact using Google Play Store reviews. The workflow includes data collection via web scraping, text preprocessing (cleaning, normalization, tokenization, stopword removal, stemming), pseudo ground-truth generation using a domain-specific sentiment lexicon, feature extraction with TF-IDF (1–3 n-grams), and sentiment classification using Linear SVM with an 80/20 stratified split and repeated runs for stability. The study also applies rule-based post-processing to improve domain semantics (e.g., negation and technical complaint patterns), visualizes sentiment distribution and keywords (WordCloud), and uses an LLM (IBM Granite) to summarize dominant praise/complaint themes.",

    features: [
      "Scraped 40,000 Google Play Store reviews (2023–2025) as the raw dataset",
      "Data validation and cleaning (remove duplicates/empty entries) to produce a final usable dataset",
      "Indonesian NLP preprocessing: lowercase, regex cleaning, slang normalization, tokenization, stopwords removal, and Sastrawi stemming",
      "Lexicon-based labeling to generate pseudo ground truth with a domain-specific expanded lexicon",
      "TF-IDF feature extraction using n-gram (1–3) with feature limiting for efficiency",
      "Linear SVM (LinearSVC) training with stratified 80/20 train–test split and balanced class weighting",
      "Multi-metric evaluation (accuracy, precision, recall, F1) and confusion matrix analysis",
      "Rule-based post-processing to correct sentiment for domain patterns (negation, contrast words, technical complaints)",
      "Visualization of sentiment distribution and WordClouds for keyword/theme exploration",
      "LLM summarization (IBM Granite) on proportional samples to extract key praise vs complaint themes",
    ],

    challenges:
      "Key challenges included creating reliable labels without manual annotation and handling domain-specific language (negation, mixed sentiments, and technical issue terms). These were addressed by building a domain-expanded lexicon for pseudo ground truth and applying rule-based post-processing to improve semantic correctness, then complementing quantitative results with visual analysis and LLM-generated theme summaries.",
    screenshots: [
      "/project/sentiment-analyst/sa-1.png",
      "/project/sentiment-analyst/sa-2.png",
      "/project/sentiment-analyst/sa-3.png",
      "/project/sentiment-analyst/sa-4.png",
      "/project/sentiment-analyst/sa-5.png",
      "/project/sentiment-analyst/sa-6.png",
      "/project/sentiment-analyst/sa-7.png",
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
