'use client'

import type { Metadata } from "next";
import { motion } from "framer-motion"
import projectData from "@/data/projects"
import SectionHeader from "@/components/SectionHeader"
import ProjectCard from "@/components/cards/ProjectCard"

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software projects by Michael Eze",
}

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
        <SectionHeader 
          title={projectData.title}
          label={projectData.label}
          subtitle={projectData.subtitle}
        />

        {/* Projects */}
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