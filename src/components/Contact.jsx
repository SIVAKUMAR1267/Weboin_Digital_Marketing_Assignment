"use client";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section 
      id="contact" 
      className="py-32 md:py-44 bg-background border-t border-border"
    >
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          label="Inquiries"
          title="Let's Build Something" 
          subtitle="Ready to transform your digital presence? Reach out to discuss your next commission."
        />
        
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card p-8 md:p-12 rounded-sm border border-border shadow-sm relative overflow-hidden"
          >
            {/* Signature Element: Top Accent Rule */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-accent" />

            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-accent mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-3xl mb-4 text-foreground">Message Received</h3>
                <p className="font-sans text-muted-foreground leading-[1.75]">
                  Thank you for your inquiry. Our studio director will respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block font-sans text-sm font-medium mb-3 text-foreground tracking-[0.02em]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-12 px-4 bg-transparent border border-border rounded-md font-sans text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition-all duration-200 ease-out"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-sans text-sm font-medium mb-3 text-foreground tracking-[0.02em]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 px-4 bg-transparent border border-border rounded-md font-sans text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition-all duration-200 ease-out"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-sans text-sm font-medium mb-3 text-foreground tracking-[0.02em]">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 bg-transparent border border-border rounded-md font-sans text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition-all duration-200 ease-out resize-none"
                    placeholder="Tell us about your objectives..."
                  />
                </div>
                <div className="pt-2">
                  <Button type="submit" className="w-full" disabled={status === "loading"}>
                    {status === "loading" ? (
                      <><Loader2 className="animate-spin mr-2" size={20} strokeWidth={1.5} /> Transmitting...</>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}