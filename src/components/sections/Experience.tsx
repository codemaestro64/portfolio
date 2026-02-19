'use client'

import { motion } from "framer-motion"
import experienceData from "@/data/experience"
import ExperienceCard from "@/components/cards/ExperienceCard"

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-card">
      <motion.div
        className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-sm text-accent mb-4">{experienceData.label}</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">{experienceData.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{experienceData.subtitle}</p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experienceData.experiences.map((exp, i) => (
            <ExperienceCard 
              key={i} 
              index={i} 
              {...exp}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ExperienceSection