'use client'

import { motion } from "framer-motion"
import experienceData from "@/data/experience"
import SectionHeader from "@/components/SectionHeader"
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
        <SectionHeader 
          title={experienceData.title}
          label={experienceData.label}
          subtitle={experienceData.subtitle}
        />

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