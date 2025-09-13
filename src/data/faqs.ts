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
    id: "tech-stack",
    question: "What technologies do you specialize in?",
    answer: "My main stack includes Node.js, TypeScript, Express, PostgreSQL, MongoDB, Flutter, and WordPress. But I’m also flexible and can pick up new tools quickly when needed.",
    tags: ["services", "portfolio"]
  },
  {
    id: "project-process",
    question: "What does your project process look like?",
    answer: "I usually start with understanding your needs, draft a plan, set milestones, and keep communication open with regular updates. Transparency and collaboration are key.",
    tags: ["services"]
  },
  {
    id: "freelance-vs-fulltime",
    question: "Are you open to freelance or full-time opportunities?",
    answer: "Both! I love freelance projects for the variety and challenges, but I’m also open to impactful long-term roles where I can grow with a team.",
    tags: ["about", "contact"]
  },
  {
    id: "pricing-model",
    question: "How do you price your services?",
    answer: "It depends on the project scope. I usually offer project-based pricing for websites and apps, and hourly/daily rates for consulting or ongoing support.",
    tags: ["services", "contact"]
  },
  {
    id: "portfolio-size",
    question: "Where can I see your past work?",
    answer: "Check out my Portfolio page — I’ve organized projects by categories like Websites, SaaS & APIs, and Mobile Apps so you can browse easily.",
    tags: ["portfolio"]
  },
  {
    id: "turnaround-time",
    question: "How long does it take to build a website or app?",
    answer: "Depends on the complexity. A small business website might take 2–3 weeks, while a full SaaS platform could take months. I’ll always give you a realistic timeline upfront.",
    tags: ["services", "portfolio"]
  },
  {
    id: "after-launch-support",
    question: "Do you provide support after project launch?",
    answer: "Yes — I can help with maintenance, updates, and scaling. I don’t just launch and disappear 🚀.",
    tags: ["services", "contact"]
  },
  {
    id: "coffee-energy",
    question: "What keeps you energized while coding?",
    answer: "Coffee ☕, lots of it. And sometimes blasting Afrobeat or Lo-Fi while debugging helps too.",
    tags: ["about"]
  },
  {
    id: "why-software",
    question: "Why did you choose software engineering?",
    answer: "Because solving problems with code feels like having superpowers 🦸🏽‍♂️. Plus, I enjoy building things that make people’s lives easier.",
    tags: ["about"]
  },
  {
    id: "collaboration-tools",
    question: "How do you collaborate with teams remotely?",
    answer: "I use tools like Slack, Zoom, GitHub, Trello, and Notion. Clear communication is just as important as clean code.",
    tags: ["services", "contact"]
  },
  {
    id: "fun-fact",
    question: "Fun fact about you?",
    answer: "I can explain complex backend logic with cow analogies 🐄 — thanks to working on livestock management apps like Boma360.",
    tags: ["about"]
  }
]
