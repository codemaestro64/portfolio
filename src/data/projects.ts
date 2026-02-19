import type { Project } from "@/types"

const label = "03. Projects"
const title = "Featured Work"
const subtitle = "A selection of projects that showcase my technical expertise and passion for building great products."

const items: Project[] = [{
  imageSrc: "https://zenprospect-production.s3.amazonaws.com/uploads/pictures/66e7da2dc26500000144b910/picture",
  href: "https://www.rightful.com.au",
  title: "Rightful",
  description: "Care Access powered through Pluto Health brings together all of your medical histories and combines that with care options.",
  tags: ["Python", "FastAPI", "GCP", "Firestore"]
}, {
  imageSrc: "https://zenprospect-production.s3.amazonaws.com/uploads/pictures/66e7da2dc26500000144b910/picture",
  href: "https://www.vistarmedia.com/programmatic-marketplace",
  title: "Programmatic DOOH Marketplace",
  description: "Care Access powered through Pluto Health brings together all of your medical histories and combines that with care options.",
  tags: ["Python", "FastAPI", "GCP", "Firestore"]
}, {
  imageSrc: "https://zenprospect-production.s3.amazonaws.com/uploads/pictures/66e7da2dc26500000144b910/picture",
  href: "https://careaccess.plutohealth.com",
  title: "Programmatic DOOH Marketplace",
  description: "Care Access powered through Pluto Health brings together all of your medical histories and combines that with care options.",
  tags: ["Python", "FastAPI", "GCP", "Firestore"]
}]

const projects = {
  label,
  title,
  subtitle,
  items
}

export default projects