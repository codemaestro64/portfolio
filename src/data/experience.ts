import { Experience } from "@/types"

const label = "02. Experience"
const title = "Where I've Worked"
const subtitle = "A journey through innovative companies where I've made meaningful impact."

const experiences: Experience[] = [{
  title: "Senior Frontend Engineer",
  company: "Vistar Media",
  companyURL: "https://www.google.com",
  period: "Jan 2023 - Present",
  location: "USA (Remote)",
  bullets: [
    "Lead a team of 6 engineers building the next-gen design system (Atlas) with 120+ components adopted across 12 products",
    "Architected micro-frontend infrastructure reducing deployment time by 40% and enabling independent team releases",
    "Drove Core Web Vitals improvements — LCP from 4.2s to 1.1s, CLS from 0.25 to 0.02 across the product suite",
    "Introduced E2E testing strategy with Playwright, achieving 95%+ coverage and cutting production incidents by 60%",
  ],
  tags: ["React", "TypeScript", "PHP", "Go", "Python"]
}, {
  title: "Senior Frontend Engineer",
  company: "Vistar Media",
  companyURL: "https://www.google.com",
  period: "Jan 2023 - Present",
  location: "USA (Remote)",
  bullets: [
    "Built a real-time collaboration platform (CRDT-based) supporting 500+ concurrent users with <50ms sync latency",
    "Shipped a complete product redesign in 8 weeks, resulting in 35% increase in user engagement and 20% reduction in churn",
    "Designed and implemented a GraphQL API layer that unified 4 microservices into a single query interface",
    "Mentored 3 junior developers, establishing code review practices and technical onboarding documentation",
  ],
  tags: ["React", "TypeScript", "PHP", "Go", "Python"]
}]



const experience = {
  label,
  title,
  subtitle,
  experiences
}

export default experience