import type { Project } from "@/types"

const label = "03. Projects"
const title = "Featured Work"
const subtitle = "A selection of projects that showcase my technical expertise and passion for building great products."

const items: Project[] = [
  {
    imageSrc: "https://zenprospect-production.s3.amazonaws.com/uploads/pictures/66e7da2dc26500000144b910/picture",
    href: "https://www.rightful.com.au",
    title: "Rightful",
    description: "An online legal marketplace and practice management platform that connects clients with legal talent, streamlining project sourcing and payments.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "Node.js", "PostgreSQL", "GCP"] 
  }, 
  {
    imageSrc: "https://www.vistarmedia.com/hs-fs/hubfs/2024%20-%20Vistar%20Rebrand/2024%20Vistar%20Media%20Logos/Vistar_Media_Logo_Stacked_Orange.png?width=1600&height=912&name=Vistar_Media_Logo_Stacked_Orange.png",
    href: "https://www.vistarmedia.com/programmatic-marketplace",
    title: "Vistar Media SSP",
    description: "A global programmatic marketplace for Digital Out-of-Home (DOOH) advertising, facilitating automated real-time bidding for digital billboards and signage.",
    tags: ["Go", "Python", "React", "Node.js", "BigQuery", "AdTech", "AWS"]
  }, 
  {
    imageSrc: "https://cdn.assets.pluto-service.com/dashboard/careaccess/img/logo.png",
    href: "https://careaccess.plutohealth.com",
    title: "Pluto Health Care Access",
    description: "A health coordination platform that unifies fragmented medical records, labs, and insurance data to identify care gaps and clinical trial opportunities.",
    tags: ["Go", "Node.js", "Django", "Next.js", "React.js", "GCP", "Healthcare AI", "HIPAA"]
  }
]

const projects = {
  label,
  title,
  subtitle,
  items
}

export default projects