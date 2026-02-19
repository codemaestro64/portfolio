import { motion } from "framer-motion"

type SectionHeaderProps = {
  title: string
  label: string 
  subtitle?: string
}

const SectionHeader = (props: SectionHeaderProps) => {
  const { title, label, subtitle } = props
  
  return (
    <div className="text-center mb-16">
      {label && (
        <motion.span  
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="inline-block font-mono text-sm text-accent mb-4"
        >
          {label}
        </motion.span>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold mb-4"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
         <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeader