"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  tag?: string;
  variant?: "primary" | "secondary" | "accent" | "destructive";
  glitchText?: string;
}

export default function NeoButton({ 
  children, 
  tag = "NEO", 
  variant = "primary",
  glitchText,
  className,
  ...props 
}: NeoButtonProps) {
  const variantColors = {
    primary: { 
      bg: "var(--cyber-yellow)", 
      shadow: "var(--cyber-blue)", 
      shadowSecondary: "var(--cyber-purple)" 
    },
    secondary: { 
      bg: "var(--cyber-purple)", 
      shadow: "var(--cyber-yellow)", 
      shadowSecondary: "var(--cyber-blue)" 
    },
    accent: { 
      bg: "var(--cyber-blue)", 
      shadow: "var(--cyber-purple)", 
      shadowSecondary: "var(--cyber-yellow)" 
    },
    destructive: { 
      bg: "var(--destructive)", 
      shadow: "var(--cyber-yellow)", 
      shadowSecondary: "var(--cyber-blue)" 
    }
  };

  const colors = variantColors[variant];

  return (
    <button 
      className={cn("neo-btn text-black font-bold", className)}
      style={{
        "--primary": colors.bg,
        "--shadow-primary": colors.shadow,
        "--shadow-secondary": colors.shadowSecondary,
      } as React.CSSProperties}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span aria-hidden className="neo-btn__glitch">
        <span className="relative z-10">{glitchText || children}_</span>
      </span>
      {tag && (
        <span aria-hidden className="neo-btn__tag">
          {tag}
        </span>
      )}
    </button>
  );
}