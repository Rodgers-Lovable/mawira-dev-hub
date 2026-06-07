export interface Service {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  icon: string;
  pricing?: string;
  image?: string;
}

export const services: Service[] = [
  {
    id: "api-development",
    title: "API Development & Integration",
    description:
      "Build robust, scalable REST and GraphQL APIs with proper authentication, documentation, and testing. Designed for high-performance systems and seamless integrations between services.",
    keywords: [
      "REST API",
      "GraphQL",
      "Node.js",
      "TypeScript",
      "authentication",
      "documentation",
    ],
    icon: "🔌",
    image: "",
  },

  {
    id: "backend-systems",
    title: "Backend Systems Architecture",
    description:
      "Design and build scalable backend systems capable of handling high traffic, large datasets, and complex business logic with strong focus on performance and reliability.",
    keywords: [
      "Node.js",
      "system design",
      "scalability",
      "databases",
      "microservices",
    ],
    icon: "⚙️",
    image: "",
  },

  {
    id: "mobile-development",
    title: "Flutter Mobile App Development",
    description:
      "Develop cross-platform mobile applications with offline-first capabilities, clean architecture, and smooth user experience tailored for real-world field usage.",
    keywords: ["Flutter", "Dart", "GetX", "offline-first", "mobile apps"],
    icon: "📱",
    image: "",
  },

  {
    id: "devops-deployment",
    title: "DevOps & Cloud Deployment",
    description:
      "Deploy and manage applications on cloud infrastructure with CI/CD, Docker, VPS setup, SSL configuration, and performance optimization.",
    keywords: [
      "Docker",
      "DigitalOcean",
      "Nginx",
      "CI/CD",
      "Linux",
      "Cloudflare",
    ],
    icon: "☁️",
    image: "",
  },

  {
    id: "wordpress-development",
    title: "WordPress Development & Optimization",
    description:
      "Build and customize WordPress websites with performance tuning, SEO optimization, and secure hosting configurations.",
    keywords: [
      "WordPress",
      "SEO",
      "themes",
      "plugins",
      "performance optimization",
    ],
    icon: "🌐",
    image: "",
  },

  {
    id: "data-engineering",
    title: "Data Engineering & Pipelines",
    description:
      "Design data pipelines for syncing, transforming, and analyzing large datasets across different databases and systems.",
    keywords: [
      "ETL",
      "MongoDB",
      "PostgreSQL",
      "data pipelines",
      "event-driven systems",
    ],
    icon: "📊",
    image: "",
  },

  {
    id: "ui-ux-web-development",
    title: "UI/UX & Web Development",
    description:
      "Create modern, responsive websites with strong focus on user experience, branding, and conversion-focused design.",
    keywords: ["UI/UX", "web design", "responsive design", "branding", "SEO"],
    icon: "🎨",
    image: "",
  },

  {
    id: "automation-tools",
    title: "Automation & Custom Tools",
    description:
      "Build custom automation tools, scripts, and workflow systems to reduce manual work and improve operational efficiency.",
    keywords: [
      "automation",
      "scripts",
      "Node.js",
      "workflows",
      "productivity tools",
    ],
    icon: "🤖",
    image: "",
  },
];
