export interface Service {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  icon: string;
  pricing?: string;
}

export const services: Service[] = [
  {
    id: "api-development",
    title: "API Development & Integration",
    description: "Build robust, scalable REST and GraphQL APIs with proper authentication, documentation, and testing. Perfect for connecting your applications and services.",
    keywords: ["REST API", "GraphQL", "Node.js", "authentication", "documentation"],
    icon: "🔌",
    pricing: "From $800"
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using Flutter that work seamlessly on iOS and Android. Offline-first architecture with beautiful, native-feeling UI.",
    keywords: ["Flutter", "cross-platform", "iOS", "Android", "offline-first"],
    icon: "📱",
    pricing: "From $1,200"
  },
  {
    id: "web-applications",
    title: "Web Application Development",
    description: "Modern, responsive web applications using React, Vue.js, or vanilla JavaScript. Focus on performance, SEO, and user experience.",
    keywords: ["React", "Vue.js", "responsive design", "SEO", "performance"],
    icon: "🌐",
    pricing: "From $600"
  },
  {
    id: "database-design",
    title: "Database Design & Optimization",
    description: "Design efficient database schemas, optimize queries, and implement proper indexing strategies for MySQL, PostgreSQL, and MongoDB.",
    keywords: ["database design", "MySQL", "PostgreSQL", "MongoDB", "optimization"],
    icon: "🗄️",
    pricing: "From $400"
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    description: "Architecture reviews, technology stack selection, code reviews, and strategic technical guidance for your development projects.",
    keywords: ["architecture", "code review", "technical strategy", "consulting"],
    icon: "🧠",
    pricing: "From $100/hour"
  },
  {
    id: "maintenance",
    title: "Application Maintenance",
    description: "Ongoing support, bug fixes, security updates, and feature enhancements for existing applications. Keep your systems running smoothly.",
    keywords: ["maintenance", "bug fixes", "security updates", "support"],
    icon: "🔧",
    pricing: "From $300/month"
  }
];