import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { portfolio } from "../data/portfolio";

export default function Portfolio() {
  return (
    <section 
      id="work" 
      className="py-32 md:py-44 bg-background border-t border-border"
    >
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle 
          label="Selected Archives"
          title="Featured Work" 
          subtitle="A curated showcase of our recent commissions, highlighting our dedication to craft, typography, and performance."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {portfolio.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}