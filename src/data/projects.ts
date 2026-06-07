export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  role: string;
  solution: string;
  techStack: string[];
  outcome: string;
  metrics?: string[];
  keywords: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "kabs-backend",
    title: "Kenya Animal Biosurveillance System (KABS) API",
    category: "Backend Systems",
    description:
      "Scalable backend API powering nationwide animal disease surveillance and reporting.",
    problem:
      "Kenya needed a centralized system to collect, process, and analyze animal health reports across multiple regions efficiently and reliably.",
    role: "Backend engineer responsible for API design, database architecture, and system scalability.",
    solution:
      "Built a Node.js/TypeScript API with PostgreSQL and MongoDB, designed structured data pipelines, and optimized for high-volume reporting and analytics workflows.",
    techStack: ["Node.js", "TypeScript", "Express", "MongoDB"],
    outcome:
      "Enabled structured national-level disease reporting with improved data consistency and scalability.",
    metrics: [
      "High-volume data handling",
      "Improved reporting accuracy",
      "Scalable architecture design",
    ],
    keywords: [
      "API",
      "Node.js",
      "TypeScript",
      "health systems",
      "data pipelines",
    ],
    liveUrl: "",
    image: "/images/projects/kabs-backend.png",
    featured: true,
  },

  {
    id: "mongo-postgres-sync",
    title: "Event-Driven Data Sync Pipeline",
    category: "Backend Systems",
    description:
      "Event-driven system for synchronizing MongoDB operational data into PostgreSQL for analytics.",
    problem:
      "The system required reliable analytics, but dual-writing to databases caused inconsistencies and data integrity issues.",
    role: "Backend developer responsible for system design and implementation of data synchronization logic.",
    solution:
      "Built an event-driven pipeline to replicate MongoDB changes into PostgreSQL, ensuring consistency and enabling reliable analytics workflows.",
    techStack: [
      "Node.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Event-driven architecture",
    ],
    outcome:
      "Improved data consistency and eliminated dual-write synchronization issues.",
    metrics: [
      "100% data consistency improvement",
      "Reduced sync errors",
      "Improved analytics reliability",
    ],
    keywords: [
      "data engineering",
      "event-driven systems",
      "ETL",
      "backend architecture",
    ],
    liveUrl: "",
    image: "/images/projects/sync-pipeline.png",
    featured: false,
  },

  {
    id: "csv-export-tool",
    title: "High-Performance CSV Export Utility",
    category: "Backend Tools",
    description:
      "Optimized CSV export system for handling large datasets efficiently.",
    problem:
      "Large datasets caused memory overload and timeouts when exporting reports from the system.",
    role: "Backend developer responsible for performance optimization and export logic.",
    solution:
      "Implemented streaming-based CSV generation with memory-efficient batching and timeout handling in TypeScript.",
    techStack: ["Node.js", "TypeScript", "Streams", "Performance Optimization"],
    outcome:
      "Enabled reliable export of large datasets without system crashes.",
    metrics: [
      "Reduced memory usage",
      "Handled large datasets",
      "Zero export timeouts",
    ],
    keywords: ["CSV", "performance optimization", "data export", "Node.js"],
    liveUrl: "",
    image: "/images/projects/csv-export.png",
    featured: false,
  },

  {
    id: "herdr",
    title: "Herdr Livestock Management App",
    category: "Mobile Apps",
    description:
      "Offline-first cattle management mobile application for farmers and field officers.",
    problem:
      "Farmers and field agents needed a reliable system to track livestock in areas with poor or no internet connectivity.",
    role: "Mobile developer responsible for app architecture, state management, and offline functionality.",
    solution:
      "Built a Flutter app using GetX with offline-first architecture, local storage sync (SQL_Lite), and optimized UI for field usage.",
    techStack: ["Flutter", "Dart", "GetX", "GetStorage"],
    outcome:
      "Enabled reliable livestock tracking even in offline environments.",
    metrics: [
      "Offline-first capability",
      "Improved field usability",
      "Reduced data loss",
    ],
    keywords: [
      "Flutter",
      "offline apps",
      "livestock management",
      "mobile development",
    ],
    liveUrl: "",
    image: "/images/projects/boma360.png",
    featured: true,
  },

  {
    id: "flutter-offline-architecture",
    title: "Flutter Offline Architecture Implementations",
    category: "Mobile Apps",
    description:
      "Offline-first architecture patterns implemented across Flutter applications.",
    problem:
      "Apps needed to function reliably in low-connectivity environments without data loss.",
    role: "Mobile developer focusing on offline systems and local persistence strategies.",
    solution:
      "Implemented local caching, sync strategies, and state persistence using HiveDB and GetX.",
    techStack: ["Flutter", "GetX", "HiveDB", "Dart"],
    outcome:
      "Improved reliability and usability in unstable network conditions.",
    metrics: ["Improved sync reliability", "Reduced data loss"],
    keywords: ["Flutter", "offline-first", "state management"],
    liveUrl: "",
    image: "/images/projects/flutter-offline.png",
    featured: false,
  },
  {
    id: "gacheri-creates",
    title: "GacheriCreates Wildlife Photography Website",
    category: "Websites",
    description:
      "Custom Next.js portfolio for a Kenya-based wildlife photographer supporting print sales and safari booking inquiries.",
    problem:
      "A generic template site positioned her as a generalist, undermining her premium wildlife and safari offering.",
    role: "Full-stack developer — strategy, design system, and development.",
    solution:
      "Built a focused custom site with Cloudinary image delivery, curated gallery, print inquiry flow, and a safari packages page optimized for high-ticket conversions.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Cloudinary",
    ],
    outcome:
      "Performance-optimized portfolio with clear wildlife positioning and dedicated revenue paths for prints and safaris.",
    metrics: [
      "90+ Lighthouse performance score on mobile",
      "Sub 2.5s Largest Contentful Paint",
      "Three revenue streams supported at launch",
    ],
    keywords: [
      "wildlife photography",
      "Next.js",
      "photography portfolio",
      "Kenya safari",
      "fine art prints",
    ],
    liveUrl: "https://gachericreates.com",
    image: "/images/projects/gacheri-creates.png",
    featured: true,
  },
  {
    id: "jowam-coffee",
    title: "Jowam Coffee Traders Website",
    category: "Websites",
    description:
      "Business-focused website redesign for coffee trading and export operations.",
    problem:
      "The previous website was not aligned with the company’s core business focus on coffee trading and exports.",
    role: "Full-stack developer responsible for redesign and content restructuring.",
    solution:
      "Rebuilt the website structure to focus on coffee trading, improved UX, and aligned branding with export business goals.",
    techStack: ["WordPress", "Web Design", "SEO", "Cloudflare"],
    outcome:
      "Improved brand clarity and better aligned online presence with business operations.",
    metrics: ["Improved user engagement", "Clearer brand positioning"],
    keywords: ["web redesign", "coffee trade", "branding", "UX"],
    liveUrl: "https://jowamcoffee.co.ke",
    image: "/images/projects/jowam-coffee.png",
    featured: false,
  },

  {
    id: "karen-legacy",
    title: "Karen Legacy Tours Website",
    category: "Websites",
    description:
      "Luxury safari and travel website showcasing African wildlife experiences.",
    problem:
      "The tour company needed a premium digital presence that reflects luxury safari experiences and attracts international clients.",
    role: "Full-stack developer responsible for design, branding, and website implementation.",
    solution:
      "Built a visually rich website with strong storytelling, African-inspired branding, and optimized layout for travel marketing.",
    techStack: ["WordPress", "UI/UX Design", "SEO", "Branding"],
    outcome:
      "Established a premium online presence for luxury safari bookings.",
    metrics: ["Improved visual engagement", "Stronger brand identity"],
    keywords: ["travel website", "safari", "luxury branding", "UI/UX"],
    liveUrl: "https://karenlegacytoursandsafaris.com",
    image: "/images/projects/karen-legacy.png",
    featured: true,
  },

  {
    id: "superset-deployment",
    title: "Apache Superset Production Deployment",
    category: "DevOps",
    description:
      "Production-grade deployment of Apache Superset for business intelligence dashboards.",
    problem:
      "The organization needed a scalable analytics platform for visualizing large datasets in production.",
    role: "DevOps engineer responsible for deployment, configuration, and optimization.",
    solution:
      "Deployed Apache Superset using Docker on DigitalOcean with production-ready configuration and scaling considerations.",
    techStack: ["Docker", "Apache Superset", "DigitalOcean", "Linux"],
    outcome: "Enabled real-time data visualization and business reporting.",
    metrics: ["Production-ready deployment", "Improved analytics access"],
    keywords: ["DevOps", "analytics", "Docker", "BI tools"],
    liveUrl: "",
    image: "/images/projects/superset.png",
    featured: false,
  },

  {
    id: "wordpress-vps",
    title: "WordPress VPS Hosting Infrastructure",
    category: "DevOps",
    description:
      "Managed multiple WordPress deployments on DigitalOcean VPS infrastructure.",
    problem:
      "Websites required reliable hosting with SSL, domains, and performance optimization.",
    role: "Infrastructure engineer responsible for server setup and maintenance.",
    solution:
      "Configured Nginx/LiteSpeed servers, managed SSL certificates, domains, subdomains, and optimized hosting environments.",
    techStack: ["DigitalOcean", "Nginx", "LiteSpeed", "Cloudflare"],
    outcome:
      "Stable hosting infrastructure with high uptime and optimized performance.",
    metrics: ["99.9% uptime", "Improved security", "Faster deployments"],
    keywords: ["hosting", "VPS", "Nginx", "WordPress"],
    liveUrl: "",
    image: "/images/projects/vps-hosting.png",
    featured: false,
  },

  {
    id: "openchat-bots",
    title: "OpenChat Hackathon Bots",
    category: "Experimental",
    description: "AI-powered chatbot solutions built during a hackathon.",
    problem:
      "Need for automated conversational tools to handle user interactions and tasks.",
    role: "Developer responsible for bot logic and integration with LLM systems.",
    solution:
      "Built chatbot prototypes using LLM APIs to automate interactions and simulate intelligent responses.",
    techStack: ["JavaScript", "LLMs", "APIs", "Chatbot Frameworks"],
    outcome:
      "Functional prototypes demonstrating AI-assisted automation workflows.",
    metrics: ["Prototype completion", "Working AI integration"],
    keywords: ["AI", "chatbots", "automation", "LLMs"],
    liveUrl: "",
    image: "/images/projects/openchat.png",
    featured: false,
  },
];

export const categories = [
  "All",
  "Websites",
  "SaaS & APIs",
  "Mobile Apps",
  "Open Source",
];
