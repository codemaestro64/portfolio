'use client'

import { motion } from "framer-motion"
import contributionData from "@/data/contributions"
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
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-sm text-accent mb-4">{contributionData.label}</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">{contributionData.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{contributionData.subtitle}</p>
        </div>

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