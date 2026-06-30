"use client";
import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle, label }) {
  // Refined, slow editorial ease-out animation
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="text-center max-w-2xl mx-auto mb-20">
      
      {/* Signature Element: Small Caps Label with Rule Lines */}
      {label && (
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="mb-6 flex items-center justify-center gap-4 mx-auto max-w-xs"
        >
          <span className="h-px w-12 md:w-24 bg-border" />
          <span className="small-caps text-accent">{label}</span>
          <span className="h-px w-12 md:w-24 bg-border" />
        </motion.div>
      )}

      {/* Editorial Serif Headline */}
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={itemVariants}
        className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-[1.2]"
      >
        {title}
      </motion.h2>

      {/* Relaxed Body Subtitle */}
      {subtitle && (
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-lg text-muted-foreground leading-[1.75]"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}