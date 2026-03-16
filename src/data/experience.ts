import { Experience } from "@/types";

const label = "02. Experience";
const title = "Where I've Worked";
const subtitle =
  "A journey through innovative companies where I've made meaningful impact.";

const experiences: Experience[] = [
  {
    title: "Senior Frontend Engineer",
    company: "Vistar Media",
    companyURL: "https://www.vistamedia.com",
    period: "Sep 2022 - Jan 2026",
    location: "USA (Remote)",
    bullets: [
      `Architected and delivered 14+ high-performance Node.js and Go microservices processing over 150K
     daily requests with 99.9% uptime, leveraging NestJS patterns for modular, maintainable code.`,

      `Shipped RESTful APIs with sub-200ms response times, improving ad targeting accuracy by 15%+ and
     enabling reliable integrations for downstream systems.`,

      `Reduced deployment time by 40% and achieved near-zero downtime by building Docker-based CI/CD
     pipelines with automated regression testing.`,

      `Resolved 95% of critical production incidents within SLA through proactive monitoring, structured
     debugging, and on-call participation.`,
    ],
    techTags: [
      "Node.js",
      "Go",
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "Docker",
      "Zustand",
      "Redux",
      "Jest",
    ],
    conceptTags: [
      "Microservices",
      "REST API Development",
      "Performance Optimization",
      "Frontend Architecture",
      "CI/CD Pipelines",
      "Automated Testing",
      "Code Reviews",
      "Mentorship",
      "Scalable Systems",
      "Production Debugging",
    ],
  },
  {
    title: "Software Engineer",
    company: "Pluto Health",
    companyURL: "https://www.pluto.health",
    period: "Jul 2020 - Aug 2022",
    location: "USA (Remote)",
    bullets: [
      `Developed 12+ scalable microservices with Node.js, Docker, and Kubernetes, reducing infrastructure costs by 20% and improving system resilience.`,

      `Built and maintained the H.E.A.R.T. Program — a consumer-facing digital health platform serving
     patients and care providers — using React, TypeScript, and Node.js, improving user engagement by
     30% through performance optimizations and UX improvements.`,

      `Implemented automated testing strategies with 85% code coverage using Jest and Cypress, cutting bug
    reports by 40% and deployment issues by 50%+.`,

      `Optimized MySQL and MongoDB query performance, reducing page load times and improving
    responsiveness across core user-facing services.`,
    ],
    techTags: [
      "React",
      "TypeScript",
      "Node.js",
      "Docker",
      "Kubernetes",
      "MySQL",
      "MongoDB",
      "Jest",
      "Cypress",
    ],
    conceptTags: [
      "Microservices",
      "Full-Stack Development",
      "Performance Optimization",
      "UX Improvements",
      "Automated Testing",
      "Workflow Automation",
      "Database Optimization",
      "Scalable Systems",
      "Infrastructure Cost Optimization",
      "System Resilience",
    ],
  },
  {
    title: "Software Engineer",
    company: "Seamfix",
    companyURL: "https://www.seamfix.com",
    period: "Oct 2018 - Mar 2020",
    location: "Lagos, Nigeria",
    bullets: [
      `Built a consumer-facing legal-tech platform end-to-end with React, TypeScript, and Python, enabling 5K+
users to connect with solicitors and access legal services digitally.`,
      `Designed 15+ REST APIs processing over 130K monthly requests, with emphasis on security, rate
limiting, and performance.`,
      `Optimized Next.js frontend with React Query and TypeScript for data fetching, reducing page load times
by 40%+ across 20+ endpoints.`,
      `Integrated 10+ third-party APIs including payment processors and document verification services
supporting KYC compliance at scale.`,
    ],
    techTags: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "React Query",
      "REST APIs",
      "PostgreSQL",
      "Third-Party APIs",
    ],
    conceptTags: [
      "Full-Stack Development",
      "API Design",
      "Performance Optimization",
      "Data Fetching",
      "System Architecture",
      "Third-Party Integrations",
      "KYC Compliance",
      "Scalable Systems",
      "Security & Rate Limiting",
      "Technical Design",
    ],
  },
];

const experience = {
  label,
  title,
  subtitle,
  experiences,
};

export default experience;
