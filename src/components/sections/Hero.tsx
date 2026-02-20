'use client'

import { motion } from "framer-motion";
import { MapPin, ArrowDown } from "lucide-react";
import { LOCATION, EMAIL, SOCIALS } from "@/data";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-[90vh] sm:min-h-screen
        flex items-center justify-center
        section-padding
        overflow-hidden
      "
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full bg-primary/5 blur-[120px] animate-float" />
        <div
          className="absolute bottom-1/3 right-1/5 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-accent/5 blur-[100px] animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-primary/3 blur-[80px] animate-float"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border2)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border2)/0.3)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border bg-card/50 text-xs sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-muted-foreground">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="
              font-display font-bold tracking-tight
              text-3xl sm:text-5xl lg:text-6xl
              leading-tight sm:leading-[0.95]
              mb-5 sm:mb-6
            "
          >
            Hi, I&apos;m
            <span className="gradient-text"> Michael Eze</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="
              font-display font-medium
              text-xl sm:text-2xl md:text-3xl
              text-light-muted dark:text-dark-muted
              mb-3 sm:mb-4
            "
          >
            Full-Stack Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="
              text-base sm:text-lg md:text-xl
              text-muted-foreground
              max-w-xl sm:max-w-2xl
              mb-6 sm:mb-8
              leading-relaxed
            "
          >
            I architect and build high-performance web platforms at scale.
            Specializing in React ecosystems, design systems, and developer tooling
            — turning complex engineering challenges into elegant, maintainable solutions.
          </motion.p>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="
              flex flex-wrap items-center justify-center
              gap-x-3 gap-y-1
              text-xs sm:text-sm
              text-muted-foreground
              mb-8 sm:mb-10
            "
          >
            <MapPin size={14} className="text-primary" />
            <span>{LOCATION}</span>
            <span className="hidden sm:inline text-border">·</span>
            <span className="break-all">{EMAIL}</span>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            {SOCIALS.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-2.5
                  rounded-lg
                  border border-border
                  text-muted-foreground
                  hover:text-primary
                  hover:border-primary/30
                  transition-all duration-300
                "
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator (hidden on very small screens) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;