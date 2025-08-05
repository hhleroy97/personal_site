"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-[#16213E]/95 border-b-2 border-[#2A3284] backdrop-blur-sm"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold font-orbitron relative group flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#FFE135] flex items-center justify-center">
              <div className="w-3 h-3 bg-black"></div>
            </div>
            <span className="text-[#FFE135] group-hover:text-[#00BFFF] transition-colors duration-300">
              CYBER_INTERFACE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-2">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative group font-mono uppercase tracking-wider text-sm font-medium transition-all duration-300",
                        pathname === item.href
                          ? ""
                          : ""
                      )}
                    >
                      <div className={cn(
                        "px-4 py-2 border transition-all duration-300 flex items-center space-x-2",
                        pathname === item.href
                          ? "bg-[#FFE135] text-black border-[#FFE135]"
                          : "text-[#8B94C7] border-[#2A3284] hover:bg-[#2A3284] hover:text-[#00BFFF] hover:border-[#00BFFF]"
                      )}>
                        <div className={cn(
                          "w-2 h-2 transition-colors duration-300",
                          pathname === item.href
                            ? "bg-black"
                            : "bg-[#2A3284] group-hover:bg-[#00BFFF]"
                        )}></div>
                        <span className="font-mono text-sm uppercase tracking-wider">
                          {item.name}
                        </span>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary hover:bg-primary/10 cp2077-hover cp2077-corners"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-2"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                  pathname === item.href
                    ? "text-primary bg-primary/10 border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}