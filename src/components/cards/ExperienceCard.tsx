
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Tag from "@/components/Tag";
import { Experience } from "@/types";

type ExperienceCardProps = Experience & {
  index: number
}

const ExperienceCard = (props: ExperienceCardProps) => {
  const { title, company, companyURL, period, location, bullets, tags, index } = props

  const [showAll, setShowAll] = useState(false)

  const toggleShow = () => setShowAll((prev) => !prev)

  const bulletsToShow = showAll ? bullets : bullets.slice(0, 2)

  return (
    <motion.div
      className="relative pl-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Timeline line */}
      <div
        className="absolute left-[7px] top-5 bottom-0 w-[2px]"
        style={{ background: 'linear-gradient(180deg, var(--color-primary) 20%, transparent 100%)' }}
      />

      {/* Timeline dot */}
      <div
        className="absolute left-0 top-5 w-4 h-4 rounded-full bg-primary"
      />
      
      <motion.div
        className="p-6 rounded-xl bg-surface border border-light project-card cursor-pointer"
        whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
          <div>
            <h3 className="font-display text-xl font-semibold">{title}</h3>
            <p className="text-accent font-medium">{company}</p>
          </div>
          <span className="font-mono text-sm text-muted-foreground px-3 py-1 rounded-full bg-card">
            {period}
          </span>
        </div>

        <ul className="space-y-2 mb-2">
          <AnimatePresence initial={false}>
            {bulletsToShow.map((bullet: string, j: number) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: j * 0.05 }}
                className="text-muted-foreground text-sm leading-relaxed flex gap-2"
              >
                <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                <span>{bullet}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {/* Show more / less button */}
        {bullets.length > 2 && (
          <button
            onClick={toggleShow}
            className="flex items-center gap-1 text-sm text-primary font-medium mt-2 hover:underline"
          >
            {showAll ? "Show less" : "Show all"}{" "}
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag: string, i: number) => (
            <Tag 
              key={i} 
              index={i} 
              tag={tag} 
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ExperienceCard