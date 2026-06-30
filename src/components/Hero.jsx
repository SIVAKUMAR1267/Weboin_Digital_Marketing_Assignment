"use client";
import { motion } from "framer-motion";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  // Editorial motion: Slow, deliberate, no bouncing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Custom elegant ease-out
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden">
      
      {/* Ambient Glow: Replaces the tech blobs with a single warm, deeply blurred accent light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-accent/5 rounded-full blur-[100px] md:blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Signature Small Caps Label with Rule Lines */}
          <motion.div variants={itemVariants} className="mb-8 flex items-center justify-center gap-4 w-full max-w-xs">
            <span className="h-px flex-1 bg-border" />
            <span className="small-caps text-accent">
              Premium Design Studio
            </span>
            <span className="h-px flex-1 bg-border" />
          </motion.div>
          
          {/* High-Contrast Serif Headline */}
          <motion.h1 
            variants={itemVariants} 
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-foreground mb-8 leading-[1.1] tracking-tight"
          >
            Crafting Digital <br className="hidden md:block" />
            <span className="italic text-muted-foreground/80">Experiences</span> That Matter
          </motion.h1>
          
          {/* Relaxed Body Typography */}
          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-[1.75]"
          >
            We partner with visionary brands to design and build stunning, high-performance websites rooted in classical restraint and modern precision.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button 
              onClick={() => document.getElementById("work")?.scrollIntoView()} 
              className="group w-full sm:w-auto"
            >
              View Our Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
              className="w-full sm:w-auto"
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}