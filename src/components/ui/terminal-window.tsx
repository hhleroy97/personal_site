"use client";

import { motion } from "framer-motion";
import { X, Minus, Square } from "lucide-react";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function TerminalWindow({ 
  title = "terminal", 
  children, 
  className = "" 
}: TerminalWindowProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-background border-2 border-primary/50 rounded-none shadow-2xl overflow-hidden ${className}`}
    >
      {/* Terminal Header */}
      <div className="bg-card border-b border-primary/30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-destructive animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
          </div>
          <span className="text-sm font-mono text-muted-foreground ml-4">
            {title}@cyberpunk-terminal
          </span>
        </div>
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Minus size={14} className="hover:text-foreground cursor-pointer" />
          <Square size={14} className="hover:text-foreground cursor-pointer" />
          <X size={14} className="hover:text-destructive cursor-pointer" />
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm bg-background/95 backdrop-blur-sm">
        <div className="text-primary mb-2">
          <span className="text-secondary">user@cyberpunk</span>
          <span className="text-muted-foreground">:</span>
          <span className="text-accent">~</span>
          <span className="text-muted-foreground">$ </span>
          <span className="glitch-subtle">cat {title}.txt</span>
        </div>
        <div className="text-foreground/90 leading-relaxed">
          {children}
        </div>
        <div className="flex items-center mt-4 text-primary">
          <span className="text-secondary">user@cyberpunk</span>
          <span className="text-muted-foreground">:</span>
          <span className="text-accent">~</span>
          <span className="text-muted-foreground">$ </span>
          <span className="animate-pulse">█</span>
        </div>
      </div>
    </motion.div>
  );
}