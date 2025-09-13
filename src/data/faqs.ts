export interface FAQ {
  id: string;
  question: string;
  answer: string;
  tags: string[];
}

export const faqs: FAQ[] = [
  {
    id: "international-clients",
    question: "Do you work with international clients?",
    answer: "Yes, I'm based in Nairobi but I work with clients worldwide 🌍. I'm comfortable with different time zones and use modern collaboration tools.",
    tags: ["services", "contact"]
  },
  {
    id: "offline-apps",
    question: "Can you build apps that work offline?",
    answer: "Absolutely — I specialize in Flutter offline-first apps using GetStorage and local databases. Your users stay productive even without internet.",
    tags: ["portfolio", "services"]
  },
  {
    id: "response-time",
    question: "What happens after I send a contact form?",
    answer: "I reply within 24-48 hours (unless I'm debugging at 3 AM 🐛). You'll get a detailed response about your project requirements.",
    tags: ["contact"]
  },
  {
    id: "project-timeline",
    question: "How long do projects typically take?",
    answer: "It depends on complexity: Simple web apps (2-4 weeks), Mobile apps (4-8 weeks), Complex systems (8-16 weeks). I always provide realistic timelines upfront.",
    tags: ["services", "portfolio"]
  },
  {
    id: "technology-stack",
    question: "What technologies do you specialize in?",
    answer: "My sweet spot is Node.js APIs, Flutter mobile apps, and React/Vue web applications. I also work with Python, databases, and cloud platforms.",
    tags: ["portfolio", "services"]
  },
  {
    id: "maintenance-support",
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes! I offer maintenance packages starting from $300/month. This includes bug fixes, security updates, and minor feature additions.",
    tags: ["services", "contact"]
  },
  {
    id: "pricing-structure",
    question: "How do you structure your pricing?",
    answer: "I offer both fixed-price projects and hourly consulting. After understanding your requirements, I'll provide a detailed quote with milestones.",
    tags: ["services", "contact"]
  },
  {
    id: "remote-work",
    question: "Do you work remotely or on-site?",
    answer: "I primarily work remotely using tools like Slack, Zoom, and GitHub. For Nairobi-based clients, I can arrange occasional in-person meetings.",
    tags: ["services", "contact"]
  },
  {
    id: "project-examples",
    question: "Can you show examples of your previous work?",
    answer: "Check out my portfolio section! I've built e-commerce APIs handling 10K+ daily transactions, mobile apps with 4.8-star ratings, and analytics dashboards.",
    tags: ["portfolio"]
  },
  {
    id: "api-documentation",
    question: "Do you provide API documentation?",
    answer: "Always! I use tools like Swagger/OpenAPI to create comprehensive, interactive documentation. Your team will know exactly how to use the APIs.",
    tags: ["portfolio", "services"]
  }
];