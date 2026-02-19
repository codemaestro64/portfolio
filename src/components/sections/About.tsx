'use client'

import { motion } from "framer-motion"
import about from "@/data/about"
import Tag from "@/components/Tag"

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Column */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="inline-block font-mono text-sm text-accent mb-4"
            >
              {about.label}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl font-bold mb-6"
            >
              {about.title}
            </motion.h2>

            {about.paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="font-medium mb-4 text-sm uppercase text-muted-foreground">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {about.tech_stack.map((stack, i) => (
                  <Tag 
                    key={i} 
                    index={i} 
                    tag={stack} 
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Card */}
          {about.stats && (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="glass-card-elevated rounded-2xl bg-surface border-primary/30 p-8"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                <div className="grid grid-cols-2 gap-8">
                  {about.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.35 + i * 0.08,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="text-center p-8 rounded-xl bg-card border"
                    >
                      <div className="font-display text-4xl font-bold gradient-text mb-2">
                        {stat.stat}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.title}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection
