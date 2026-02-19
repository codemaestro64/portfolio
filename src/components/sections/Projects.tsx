'use client'

import { motion } from "framer-motion"
import projectData from "@/data/projects"
import ProjectCard from "@/components/cards/ProjectCard"


const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-sm text-accent mb-4">{projectData.label}</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">{projectData.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{projectData.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.items.map((project, i) => (
            <ProjectCard 
              key={project.href ?? i} 
              index={i}
              {...project}
            />
          ))}
        </div>

      </motion.div>
    </section>
  )
}

export default ProjectsSection