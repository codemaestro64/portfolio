import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Tag from "@/components/Tag";
import { Experience } from "@/types";

type ExperienceCardProps = Experience & {
  index: number;
};

const ExperienceCard = (props: ExperienceCardProps) => {
  const { title, company, period, bullets, techTags, conceptTags, index } =
    props;

  const [showAll, setShowAll] = useState(false);
  const toggleShow = () => setShowAll((prev) => !prev);

  const bulletsToShow = showAll ? bullets : bullets.slice(0, 2);

  return (
    <motion.div
      className="relative pl-6 sm:pl-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Timeline line */}
      <div
        className="absolute left-[6px] sm:left-[7px] top-4 sm:top-5 bottom-0 w-[2px]"
        style={{
          background:
            "linear-gradient(180deg, var(--color-primary) 20%, transparent 100%)",
        }}
      />

      {/* Timeline dot */}
      <div className="absolute left-0 top-4 sm:top-5 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary" />

      <motion.div
        className="p-4 sm:p-6 rounded-xl bg-surface border border-light project-card"
        whileHover={{
          y: -4,
          boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
          <div>
            <h3 className="font-display text-lg sm:text-xl font-semibold">
              {title}
            </h3>
            <p className="text-accent font-medium text-sm sm:text-base">
              {company}
            </p>
          </div>

          <span className="font-mono text-xs sm:text-sm text-muted-foreground px-3 py-1 rounded-full bg-card w-fit">
            {period}
          </span>
        </div>

        {/* Bullets */}
        <motion.ul className="space-y-2 mb-2">
          <AnimatePresence initial={false}>
            {bulletsToShow.map((bullet, j) => (
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
        </motion.ul>

        {/* Show more / less */}
        {bullets.length > 2 && (
          <button
            onClick={toggleShow}
            className="flex items-center gap-1 text-sm text-primary font-medium mt-2 hover:underline"
          >
            {showAll ? "Show less" : "Show all"}
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        )}

        {/* Tech Tags */}
        <div className="mt-4">
          <span className="text-sm">Tech:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {techTags.map((tag, i) => (
              <Tag key={i} index={i} tag={tag} xs />
            ))}
          </div>
        </div>

        {/* Concept Tags */}
        <div className="mt-4">
          <span className="text-sm">Concepts:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {conceptTags.map((tag, i) => (
              <Tag key={i} index={i} tag={tag} xs />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
