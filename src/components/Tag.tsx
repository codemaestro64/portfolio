import { motion } from "framer-motion"

type TagProps = {
  tag: string
  index: number 
  xs?: boolean
}

const Tag = ({ tag, index, xs }: TagProps) => {
  return (
    <motion.span 
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.3 + index * 0.004,
        ease: "easeInOut"
      }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      className={`
        px-3 py-1.5 text-accent rounded-lg font-mono bg-card border
        ${xs ? "text-xs" : "text-sm"}
      `}
    >
      {tag}
    </motion.span>
  )
}

export default Tag