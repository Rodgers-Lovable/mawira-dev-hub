export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
  rating: number;
  projectType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Wanjiku",
    role: "CEO",
    company: "Jowam Training Centre",
    quote: "Brian delivered ahead of schedule and exceeded expectations. Our website traffic increased by 40% within the first month of launch. His attention to performance optimization made a real difference.",
    rating: 5,
    projectType: "Website Development"
  },
  {
    id: "testimonial-2",
    name: "Dr. James Kimani",
    role: "Director",
    company: "Kenya Veterinary Association",
    quote: "The animal health platform transformed how we collect and analyze disease data across the country. Brian understood our complex requirements and built a system that veterinarians actually want to use.",
    rating: 5,
    projectType: "API Development"
  },
  {
    id: "testimonial-3",
    name: "Moses Ochieng",
    role: "Farm Manager",
    company: "Boma360 Early Adopter",
    quote: "Finally an app that works even when I'm out in the fields with no network! The Boma360 app has helped me track all my cattle records without worrying about losing data.",
    rating: 5,
    projectType: "Mobile App"
  },
  {
    id: "testimonial-4",
    name: "Grace Muthoni",
    role: "Operations Manager",
    company: "FastBite Delivery",
    quote: "Our delivery app handles hundreds of orders daily without any hiccups. Brian's attention to real-time tracking and payment integration was exceptional. Our customers love the experience.",
    rating: 5,
    projectType: "Mobile App"
  }
];
