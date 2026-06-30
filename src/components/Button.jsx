import { forwardRef } from "react";

const Button = forwardRef(({ 
  children, 
  variant = "primary", 
  className = "", 
  disabled = false,
  ...props 
}, ref) => {
  // Base styles applied to all buttons: 
  // 44px min-height for touch targets, medium sans-serif font, smooth 200ms transitions
  const baseStyles = "inline-flex items-center justify-center px-6 min-h-[44px] rounded-md font-sans text-sm font-medium tracking-[0.05em] transition-all duration-200 ease-out touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    // Primary: Burnished gold, slight lift on hover. No bouncy scale effects.
    primary: "bg-accent text-accent-foreground shadow-sm hover:bg-accent-secondary hover:-translate-y-[2px] hover:shadow-md active:translate-y-0",
    
    // Secondary: Strong contrast border, shifts to warm fill and gold border.
    secondary: "bg-transparent border border-foreground text-foreground hover:bg-muted hover:border-accent hover:text-accent",
    
    // Ghost: Muted text, reveals gold underline on hover.
    ghost: "bg-transparent text-muted-foreground hover:text-foreground relative after:absolute after:bottom-2 after:left-6 after:right-6 after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 after:ease-out pb-[2px]",
  };

  return (
    <button 
      ref={ref}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;