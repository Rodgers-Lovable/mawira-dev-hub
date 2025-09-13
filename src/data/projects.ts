export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  outcome: string;
  keywords: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ecommerce-api",
    title: "E-Commerce API Platform",
    description: "Built a scalable REST API for an e-commerce platform handling 10K+ daily transactions with real-time inventory management.",
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "JWT"],
    outcome: "Reduced response times by 40% and improved system reliability to 99.9% uptime.",
    keywords: ["API development", "Node.js", "MongoDB", "scalability"],
    featured: true
  },
  {
    id: "flutter-delivery",
    title: "Food Delivery Mobile App",
    description: "Developed a cross-platform food delivery app with real-time tracking, offline capabilities, and seamless payment integration.",
    techStack: ["Flutter", "Dart", "Firebase", "Google Maps API", "Stripe"],
    outcome: "App launched with 5K+ downloads in first month and 4.8-star rating.",
    keywords: ["Flutter", "mobile development", "real-time tracking", "payment integration"],
    featured: true
  },
  {
    id: "analytics-dashboard",
    title: "Business Analytics Dashboard",
    description: "Created a comprehensive analytics dashboard for SMEs to track sales, inventory, and customer insights with interactive charts.",
    techStack: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    outcome: "Helped 50+ businesses make data-driven decisions, increasing their revenue by average 25%.",
    keywords: ["React", "TypeScript", "data visualization", "business intelligence"],
    featured: true
  },
  {
    id: "school-management",
    title: "School Management System",
    description: "Comprehensive web application for managing students, teachers, courses, and academic records with role-based access control.",
    techStack: ["Vue.js", "Laravel", "MySQL", "Bootstrap"],
    outcome: "Deployed in 3 schools, managing 2000+ students and reducing administrative work by 60%.",
    keywords: ["Vue.js", "Laravel", "education technology", "database management"],
    featured: false
  },
  {
    id: "iot-monitoring",
    title: "IoT Environmental Monitoring",
    description: "Developed an IoT solution for monitoring environmental conditions with real-time alerts and historical data analysis.",
    techStack: ["Python", "Raspberry Pi", "MQTT", "InfluxDB", "Grafana"],
    outcome: "Deployed in agricultural settings, helping farmers optimize crop yields by 30%.",
    keywords: ["IoT", "Python", "environmental monitoring", "data analysis"],
    featured: false
  }
];