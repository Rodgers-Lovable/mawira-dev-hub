export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  outcome: string;
  keywords: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "jowam-training",
    title: "Jowam Training Centre Website",
    category: "Websites",
    description: "Professional WordPress website deployed on DigitalOcean with Cloudflare CDN and SSL management.",
    techStack: ["WordPress", "Nginx", "Cloudflare", "DigitalOcean"],
    outcome: "Improved site speed by 60% and enhanced SEO visibility for training programs.",
    keywords: ["WordPress", "web development", "DigitalOcean", "performance optimization"],
    liveUrl: "https://jowamtrainingcentre.co.ke",
    image: "/images/projects/jowam-training.png",
    featured: true
  },
  {
    id: "boma360-app",
    title: "Boma360 Cattle Management App",
    category: "Mobile Apps",
    description: "Flutter mobile app for cattle management with offline-first architecture and real-time synchronization.",
    techStack: ["Flutter", "Dart", "GetX", "GetStorage", "Firebase"],
    outcome: "Deployed to 50+ farmers, managing 5000+ cattle records with 99% offline reliability.",
    keywords: ["Flutter", "mobile development", "offline-first", "agriculture"],
    githubUrl: "https://github.com/mawirab/boma360",
    image: "/images/projects/boma360.png",
    featured: true
  },
  {
    id: "nationwide-health-api",
    title: "Nationwide Animal Health Platform",
    category: "SaaS & APIs",
    description: "Scalable REST API platform for animal health reporting across Kenya with real-time analytics dashboard.",
    techStack: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    outcome: "Processes 1000+ daily reports from veterinarians, reducing processing time by 70%.",
    keywords: ["API development", "Node.js", "PostgreSQL", "scalability", "healthcare"],
    featured: true
  },
  {
    id: "ecommerce-api",
    title: "E-Commerce API Platform",
    category: "SaaS & APIs",
    description: "Built a scalable REST API for an e-commerce platform handling 10K+ daily transactions with real-time inventory management.",
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "JWT"],
    outcome: "Reduced response times by 40% and improved system reliability to 99.9% uptime.",
    keywords: ["API development", "Node.js", "MongoDB", "scalability"],
    featured: false
  },
  {
    id: "flutter-delivery",
    title: "Food Delivery Mobile App",
    category: "Mobile Apps",
    description: "Developed a cross-platform food delivery app with real-time tracking, offline capabilities, and seamless payment integration.",
    techStack: ["Flutter", "Dart", "Firebase", "Google Maps API", "Stripe"],
    outcome: "App launched with 5K+ downloads in first month and 4.8-star rating.",
    keywords: ["Flutter", "mobile development", "real-time tracking", "payment integration"],
    featured: false
  },
  {
    id: "analytics-dashboard",
    title: "Business Analytics Dashboard",
    category: "SaaS & APIs",
    description: "Created a comprehensive analytics dashboard for SMEs to track sales, inventory, and customer insights with interactive charts.",
    techStack: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    outcome: "Helped 50+ businesses make data-driven decisions, increasing their revenue by average 25%.",
    keywords: ["React", "TypeScript", "data visualization", "business intelligence"],
    featured: false
  },
  {
    id: "school-management",
    title: "School Management System",
    category: "Websites",
    description: "Comprehensive web application for managing students, teachers, courses, and academic records with role-based access control.",
    techStack: ["Vue.js", "Laravel", "MySQL", "Bootstrap"],
    outcome: "Deployed in 3 schools, managing 2000+ students and reducing administrative work by 60%.",
    keywords: ["Vue.js", "Laravel", "education technology", "database management"],
    featured: false
  },
  {
    id: "dev-tools-cli",
    title: "Developer Productivity CLI",
    category: "Open Source",
    description: "Command-line tool for automating common development tasks with Git integration and project scaffolding.",
    techStack: ["Python", "Click", "Git", "YAML"],
    outcome: "300+ GitHub stars, used by developers to reduce setup time by 80%.",
    keywords: ["Python", "CLI", "developer tools", "automation"],
    githubUrl: "https://github.com/mawirab/dev-cli",
    featured: false
  },
  {
    id: "iot-monitoring",
    title: "IoT Environmental Monitoring",
    category: "Open Source",
    description: "Developed an IoT solution for monitoring environmental conditions with real-time alerts and historical data analysis.",
    techStack: ["Python", "Raspberry Pi", "MQTT", "InfluxDB", "Grafana"],
    outcome: "Deployed in agricultural settings, helping farmers optimize crop yields by 30%.",
    keywords: ["IoT", "Python", "environmental monitoring", "data analysis"],
    githubUrl: "https://github.com/mawirab/iot-env-monitor",
    featured: false
  }
];

export const categories = ["All", "Websites", "SaaS & APIs", "Mobile Apps", "Open Source"];