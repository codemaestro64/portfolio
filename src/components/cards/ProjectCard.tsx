import Tag from "@/components/Tag"
import type { Project } from "@/types"
import { Link } from "lucide-react"
import Image from "next/image"


type ProjectCardProps = Project

const ProjectCard = (props: ProjectCardProps) => {
  const { title, imageSrc, href, description, tags } = props
  
  return (
    <div className="p-6 rounded-xl bg-surface border border-light overflow-hidden">
      <div className="h-40 rounded-lg mb-6 flex items-center justify-center relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-lg" // or object-cover
          sizes="(max-width: 768px) 100vw, 400px"
          priority={false}
        />
      </div>
      <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <Tag 
            key={i}
            index={i}
            tag={tag} 
            xs
          />
        ))}
      </div>
      <div className="flex gap-4">
        <a 
          href={href} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline inline-flex items-center gap-2"
        >
          <Link size={13} />
          <span>Visit Website</span>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard