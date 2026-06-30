"use client";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

export default function Services() {
  return (
    <section 
      id="services" 
      className="py-32 md:py-44 bg-background border-t border-border"
    >
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          label="Capabilities"
          title="Our Expertise" 
          subtitle="Comprehensive digital solutions tailored to elevate your brand and drive measurable results through classical restraint."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}