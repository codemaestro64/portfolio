export interface Project {
  imageSrc: string 
  href: string 
  title: string 
  description: string
  tags: string[]
}

export interface Contribution {
  title: string 
  type: string 
  description: string 
  tags: string[]
  href: string
}

export interface Experience {
  title: string 
  company: string 
  companyURL: string 
  period: string 
  location: string 
  bullets: string[]
  tags: string[]
}