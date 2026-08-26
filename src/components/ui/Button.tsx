"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-primary text-primary-foreground shadow hover:bg-primary/90 uppercase tracking-widest text-xs",
      secondary: "bg-surface text-foreground shadow-sm hover:bg-surface-light border border-border-light",
      outline: "border border-primary text-primary bg-transparent shadow-sm hover:bg-primary/10",
      ghost: "hover:bg-surface-light hover:text-primary",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-6 py-2",
      lg: "h-12 px-8 py-3 text-sm",
      icon: "h-9 w-9",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
