export default function Footer() {
  return (
    <footer className="bg-background py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Editorial Masthead */}
        <div className="font-serif text-3xl font-medium text-foreground tracking-tight">
          Nexus.
        </div>
        
        {/* Relaxed Body Copy */}
        <p className="font-sans text-muted-foreground text-sm tracking-[0.02em] text-center md:text-left">
          © {new Date().getFullYear()} Nexus Studio. All rights reserved.
        </p>
        
        {/* Small Caps Navigation */}
        <div className="flex gap-8">
          {["Twitter", "LinkedIn", "Dribbble"].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="small-caps text-muted-foreground hover:text-foreground relative pb-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}