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
    id: "jowam-training",
    title: "Jowam Training Centre Website",
    category: "Websites",
    description: "Professional WordPress website deployed on DigitalOcean with Cloudflare CDN and SSL management.",
    problem: "Jowam Training Centre needed an online presence to reach more students and showcase their training programs, but lacked technical expertise for deployment and performance optimization.",
    role: "Full-stack developer responsible for design, development, deployment, and performance optimization.",
    solution: "Built a responsive WordPress site with custom theme, optimized images, implemented Cloudflare CDN for global reach, and configured DigitalOcean droplet for reliable hosting.",
    techStack: ["WordPress", "Nginx", "Cloudflare", "DigitalOcean"],
    outcome: "Improved site speed by 60% and enhanced SEO visibility for training programs.",
    metrics: ["60% faster load times", "40% increase in organic traffic", "99.9% uptime"],
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
    problem: "Kenyan farmers struggled to track cattle health records, breeding cycles, and inventory in areas with poor internet connectivity.",
    role: "Lead mobile developer handling architecture design, offline sync logic, and Firebase integration.",
    solution: "Developed a Flutter app with GetStorage for local persistence, implemented conflict resolution for sync, and designed intuitive UI for non-tech-savvy users.",
    techStack: ["Flutter", "Dart", "GetX", "GetStorage", "Firebase"],
    outcome: "Deployed to 50+ farmers, managing 5000+ cattle records with 99% offline reliability.",
    metrics: ["50+ active farmers", "5000+ cattle tracked", "99% offline reliability"],
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
    problem: "Veterinarians across Kenya had no unified system to report disease outbreaks, leading to delayed response times and poor data for policy decisions.",
    role: "Backend architect and lead developer for API design, database optimization, and dashboard development.",
    solution: "Built a microservices-based API with PostgreSQL for structured data, MongoDB for logs, Redis caching for speed, all containerized with Docker for easy scaling.",
    techStack: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    outcome: "Processes 1000+ daily reports from veterinarians, reducing processing time by 70%.",
    metrics: ["1000+ daily reports", "70% faster processing", "100+ veterinarians onboarded"],
    keywords: ["API development", "Node.js", "PostgreSQL", "scalability", "healthcare"],
    featured: true
  },
  {
    id: "ecommerce-api",
    title: "E-Commerce API Platform",
    category: "SaaS & APIs",
    description: "Built a scalable REST API for an e-commerce platform handling 10K+ daily transactions with real-time inventory management.",
    problem: "An e-commerce startup needed a robust backend to handle growing traffic spikes during flash sales without crashing.",
    role: "Backend developer responsible for API architecture, caching strategy, and payment integration.",
    solution: "Designed RESTful endpoints with rate limiting, implemented Redis caching for product catalogs, and integrated JWT authentication for secure transactions.",
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "JWT"],
    outcome: "Reduced response times by 40% and improved system reliability to 99.9% uptime.",
    metrics: ["40% faster responses", "99.9% uptime", "10K+ daily transactions"],
    keywords: ["API development", "Node.js", "MongoDB", "scalability"],
    featured: false
  },
  {
    id: "flutter-delivery",
    title: "Food Delivery Mobile App",
    category: "Mobile Apps",
    description: "Developed a cross-platform food delivery app with real-time tracking, offline capabilities, and seamless payment integration.",
    problem: "A local restaurant chain wanted to reduce dependency on third-party delivery apps and build direct customer relationships.",
    role: "Full-stack mobile developer handling app development, maps integration, and payment gateway setup.",
    solution: "Built cross-platform Flutter app with real-time GPS tracking using Google Maps API, integrated Stripe for payments, and implemented push notifications for order updates.",
    techStack: ["Flutter", "Dart", "Firebase", "Google Maps API", "Stripe"],
    outcome: "App launched with 5K+ downloads in first month and 4.8-star rating.",
    metrics: ["5K+ downloads", "4.8-star rating", "30% increase in direct orders"],
    keywords: ["Flutter", "mobile development", "real-time tracking", "payment integration"],
    featured: false
  },
  {
    id: "analytics-dashboard",
    title: "Business Analytics Dashboard",
    category: "SaaS & APIs",
    description: "Created a comprehensive analytics dashboard for SMEs to track sales, inventory, and customer insights with interactive charts.",
    problem: "Small business owners lacked visibility into their sales patterns and inventory levels, making decisions based on gut feeling rather than data.",
    role: "Full-stack developer responsible for frontend visualization, API development, and database design.",
    solution: "Developed React dashboard with D3.js for custom visualizations, Node.js backend for data aggregation, and PostgreSQL for efficient querying of historical data.",
    techStack: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    outcome: "Helped 50+ businesses make data-driven decisions, increasing their revenue by average 25%.",
    metrics: ["50+ businesses onboarded", "25% average revenue increase", "80% daily active usage"],
    keywords: ["React", "TypeScript", "data visualization", "business intelligence"],
    featured: false
  },
  {
    id: "school-management",
    title: "School Management System",
    category: "Websites",
    description: "Comprehensive web application for managing students, teachers, courses, and academic records with role-based access control.",
    problem: "Schools were managing student records manually using spreadsheets, leading to data inconsistencies and hours of administrative work.",
    role: "Full-stack developer handling frontend, backend, database design, and role-based access implementation.",
    solution: "Built a Vue.js SPA with Laravel backend, implemented RBAC for admin/teacher/student roles, and designed normalized MySQL schema for efficient data management.",
    techStack: ["Vue.js", "Laravel", "MySQL", "Bootstrap"],
    outcome: "Deployed in 3 schools, managing 2000+ students and reducing administrative work by 60%.",
    metrics: ["3 schools deployed", "2000+ students managed", "60% reduction in admin work"],
    keywords: ["Vue.js", "Laravel", "education technology", "database management"],
    featured: false
  },
  {
    id: "dev-tools-cli",
    title: "Developer Productivity CLI",
    category: "Open Source",
    description: "Command-line tool for automating common development tasks with Git integration and project scaffolding.",
    problem: "Developers spend too much time on repetitive setup tasks like initializing projects, configuring linters, and setting up CI/CD templates.",
    role: "Creator and maintainer of the open-source project, handling feature development and community management.",
    solution: "Built a Python CLI using Click framework with modular architecture, YAML-based configuration, and Git hooks integration for automated workflows.",
    techStack: ["Python", "Click", "Git", "YAML"],
    outcome: "300+ GitHub stars, used by developers to reduce setup time by 80%.",
    metrics: ["300+ GitHub stars", "1000+ monthly downloads", "80% time savings"],
    keywords: ["Python", "CLI", "developer tools", "automation"],
    githubUrl: "https://github.com/mawirab/dev-cli",
    featured: false
  },
  {
    id: "iot-monitoring",
    title: "IoT Environmental Monitoring",
    category: "Open Source",
    description: "Developed an IoT solution for monitoring environmental conditions with real-time alerts and historical data analysis.",
    problem: "Agricultural operations lacked real-time visibility into soil moisture, temperature, and humidity, leading to crop losses from delayed responses.",
    role: "IoT developer and data engineer handling sensor integration, data pipeline, and visualization dashboard.",
    solution: "Deployed Raspberry Pi sensors with MQTT for lightweight messaging, InfluxDB for time-series data, and Grafana dashboards for real-time monitoring with configurable alerts.",
    techStack: ["Python", "Raspberry Pi", "MQTT", "InfluxDB", "Grafana"],
    outcome: "Deployed in agricultural settings, helping farmers optimize crop yields by 30%.",
    metrics: ["30% yield improvement", "24/7 monitoring", "5+ farms deployed"],
    keywords: ["IoT", "Python", "environmental monitoring", "data analysis"],
    githubUrl: "https://github.com/mawirab/iot-env-monitor",
    featured: false
  }
];

export const categories = ["All", "Websites", "SaaS & APIs", "Mobile Apps", "Open Source"];
