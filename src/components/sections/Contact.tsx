'use client'

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { LOCATION, SOCIALS, EMAIL, PHONE } from "@/data/general"
import ContactItem from "@/components/ContactItem"
import SectionHeader from "@/components/SectionHeader"

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <SectionHeader 
          title="Let's Work Together"
          label="05. Contact"
          subtitle="I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology."
        />

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            max-w-4xl mx-auto
            relative
            glass-card-elevated
            rounded-2xl
            bg-surface
            border border-primary/30
            p-5 sm:p-8
            flex flex-col
            items-center
            text-center
          "
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 w-full">
            <ContactItem icon={Mail} label="Email" value={EMAIL} />
            <ContactItem icon={Phone} label="Phone" value={PHONE} />
            <ContactItem icon={MapPin} label="Location" value={LOCATION} />
          </div>

          {/* Send mail button */}
          <a
            href={`mailto:${EMAIL}`}
            className="
              btn-primary
              inline-flex
              items-center
              gap-2
              px-6 sm:px-8
              py-3 sm:py-4
              rounded-lg
              font-medium
              text-white
              text-base sm:text-lg
            "
          >
            <Mail size={20} />
            Send Mail
          </a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-3 sm:gap-4 mt-8 sm:mt-10"
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
                  transition-all
                  duration-300
                "
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactSection