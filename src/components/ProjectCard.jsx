"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ title, category, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative cursor-pointer flex flex-col gap-6"
    >
      {/* Image Container: Clean edges, subtle hover interaction */}
      <div className="relative overflow-hidden aspect-[4/3] rounded-sm bg-muted border border-border">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:opacity-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle accent line at the bottom of the image container that appears on hover */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-10" />
      </div>
      
      {/* Editorial Meta Data (Below Image) */}
      <div className="flex flex-col items-start px-2">
        <div className="mb-3 flex items-center gap-3">
          <span className="small-caps text-accent">{category}</span>
          <span className="h-px w-8 bg-border" />
        </div>
        
        <div className="flex justify-between items-center w-full">
          <h3 className="font-serif text-2xl text-foreground relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 group-hover:after:scale-x-100">
            {title}
          </h3>
          <ArrowUpRight 
            size={20} 
            strokeWidth={1.5} 
            className="text-muted-foreground group-hover:text-accent transition-colors duration-300" 
          />
        </div>
      </div>
    </motion.div>
  );
}