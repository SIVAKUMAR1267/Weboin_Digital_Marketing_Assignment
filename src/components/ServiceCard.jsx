"use client";
import { motion } from "framer-motion";

export default function ServiceCard({ title, description, Icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-card p-8 md:p-10 rounded-lg border border-border shadow-sm hover:shadow-md hover:bg-muted/30 transition-all duration-300 ease-out overflow-hidden"
    >
      {/* Signature Element: Top Accent Rule (Expands on hover) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
      
      {/* Restrained Icon Execution */}
      <div className="mb-8">
        <Icon size={32} strokeWidth={1.5} className="text-accent" />
      </div>
      
      {/* Editorial Card Title */}
      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 leading-[1.3]">
        {title}
      </h3>
      
      {/* Relaxed Body Text */}
      <p className="font-sans text-muted-foreground leading-[1.75]">
        {description}
      </p>
    </motion.div>
  );
}