'use client'

import { motion } from "framer-motion"
import contributionData from "@/data/contributions"
import SectionHeader from "@/components/SectionHeader"
import ContributionCard from "@/components/cards/ContributionCard"

const ContributionsSection = () => {
  return (
    <section id="contributions" className="section-padding bg-card">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <SectionHeader 
          title={contributionData.title}
          label={contributionData.label}
          subtitle={contributionData.subtitle}
        />
  
        {/* Contributions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {contributionData.items.map((contribution, i) => (
            <ContributionCard 
              key={i} 
              index={i}
              {...contribution}
            />
          ))}
        </div>

      </motion.div>
    </section>
  )
}

export default ContributionsSection