import { motion } from "framer-motion"
import { Github, ArrowRight } from "lucide-react"
import Tag from "@/components/Tag"
import { Contribution } from "@/types"

type ContributionCardProps = Contribution & {
  index: number
}

const ContributionCard = (props: ContributionCardProps) => {
  const { title, description, href, type, tags, index } = props
  
  return (
    <motion.div 
      className="relative p-4 sm:p-6 rounded-xl bg-surface border"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent shrink-0">
            <Github size={15} />
          </div>
          <div>
            <h3 className="font-display font-semibold text-sm sm:text-base">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {type}
            </p>
          </div>
        </div>

        {/* Link */}
        <a 
          href={href} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-blue-600 hover:underline inline-flex items-center gap-2 w-fit"
        >
          <span>View on GitHub</span>
          <ArrowRight size={13} />
        </a>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag: string, i: number) => (
          <Tag 
            key={i} 
            index={i} 
            tag={tag} 
            xs
          />
        ))}
      </div>
    </motion.div>
  )
}

export default ContributionCard