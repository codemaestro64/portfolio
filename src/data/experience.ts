import { Experience } from "@/types"

const label = "02. Experience"
const title = "Where I've Worked"
const subtitle = "A journey through innovative companies where I've made meaningful impact."

const experiences: Experience[] = [{
  title: "Senior Frontend Engineer",
  company: "Vistar Media",
  companyURL: "https://www.vistamedia.com",
  period: "Sep 2022 - Apr 2025",
  location: "USA (Remote)",
  bullets: [
    "Developed a responsive web application that increased user engagement by 30% through optimised user interface and experience design.",
    "Architected micro-frontend infrastructure reducing deployment time by 40% and enabling independent team releases",
    "Drove Core Web Vitals improvements — LCP from 4.2s to 1.1s, CLS from 0.25 to 0.02 across the product suite",
    "Automated deployment processes using Docker, streamlining releases and reducing downtime by 30%.",
  ],
  tags: ["React", "TypeScript", "PHP", "Go", "Python", "Node.js"]
}, {
  title: "Software Engineer",
  company: "Pluto Health",
  companyURL: "https://www.pluto.health",
  period: "Jul 2020 - Aug 2022",
  location: "USA (Remote)",
  bullets: [
    "Boosted user engagement by 30% through performance optimizations in React and Go applications.",
    "Improved scalability and cut server costs by 20% by developing and deploying microservices with Golang, Docker, and Kubernetes.",
    "Minimized deployment issues and cut bug reports by 40% through automated testing strategies.",
    "Improved scalability and cut server costs by 20% by developing and deploying microservices with Golang, Docker, and Kubernetes.",
  ],
  tags: ["Go", "Python", "React", "TypeScript"]
}, {
  title: "Software Engineer",
  company: "Seamfix",
  companyURL: "https://www.seamfix.com",
  period: "Oct 2018 - Mar 2020",
  location: "Lagos, Nigeria",
  bullets: [
    "Optimized data fetching in a Next.js frontend using React Query and TypeScript, enhancing performance, type safety and maintainability.",
    "Shipped a complete product redesign in 8 weeks, resulting in 35% increase in user engagement and 20% reduction in churn",
    "Collaborated in technical design discussions to architect scalable solutions, evaluate trade-offs, and align implementation with product goals.",
    "Built and maintained identity onboarding tools for biometric capture, supporting KYC compliance at scale.",
  ],
  tags: ["PHP", "Python", "Next.js", "React", "TypeScript"]
}]



const experience = {
  label,
  title,
  subtitle,
  experiences
}

export default experience