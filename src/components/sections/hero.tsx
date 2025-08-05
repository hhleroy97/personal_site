"use client";

import { motion } from "framer-motion";
import NeoButton from "@/components/ui/neo-button";
import AkiraBackground from "@/components/ui/akira-background";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Akira-Style Retro Cyberpunk Background */}
      <AkiraBackground />
      
      {/* Base Cyberpunk Game UI Background */}
      <div className="absolute inset-0 cyber-grid" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A3284]/15 via-[#0A0A0A] to-[#5A2D6F]/15" />
      
      {/* HUD Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFE135] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent" />
      
      {/* Game UI Corner Elements */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-[#FFE135]">
        <div className="absolute top-2 left-2 w-2 h-2 bg-[#FFE135]"></div>
      </div>
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-[#00BFFF]">
        <div className="absolute top-2 right-2 w-2 h-2 bg-[#00BFFF]"></div>
      </div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-[#8E44AD]">
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#8E44AD]"></div>
      </div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-[#6CC4FF]">
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#6CC4FF]"></div>
      </div>
      
      {/* Data Stream Lines */}
      <div className="absolute left-8 top-1/4 w-24 h-[1px] bg-gradient-to-r from-[#6CC4FF] to-transparent opacity-60"></div>
      <div className="absolute right-8 top-1/3 w-32 h-[1px] bg-gradient-to-l from-[#B19CD9] to-transparent opacity-60"></div>
      <div className="absolute left-12 bottom-1/3 w-20 h-[1px] bg-gradient-to-r from-[#FFE135] to-transparent opacity-40"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* HUD Status Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-block"
          >
            <div className="bg-[#16213E] border border-[#2A3284] px-6 py-3 font-mono text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#FFE135] rounded-full animate-pulse"></div>
                  <span className="text-[#FFE135]">SYSTEM ONLINE</span>
                </div>
                <div className="text-[#8B94C7]">|</div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#00BFFF] rounded-full"></div>
                  <span className="text-[#00BFFF]">NEURAL LINK STABLE</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main heading with cyberpunk game styling */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 font-orbitron relative"
          >
            <span className="text-[#FFE135] drop-shadow-[0_0_15px_#FFE135]">CYBER</span>
            <span className="text-[#00BFFF] drop-shadow-[0_0_15px_#00BFFF]">PUNK</span>
            <br />
            <span className="text-[#8E44AD] drop-shadow-[0_0_15px_#8E44AD]">DEVELOPER</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-mono"
          >
            <span className="text-[#FFE135]">[INTERFACE_ACTIVE]</span> Engineering digital realities through{" "}
            <span className="text-[#00BFFF] font-bold">CODE</span>,{" "}
            <span className="text-[#8E44AD] font-bold">DATA</span>, and{" "}
            <span className="text-[#6CC4FF] font-bold">NEURAL_NETWORKS</span>.
            <br />
            <span className="text-[#B19CD9]">[SPECIALIZATION]</span> Full-stack development // AV synthesis // Reality augmentation
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <Link href="/portfolio">
              <NeoButton tag="R25" variant="primary" glitchText="ACCESS_PORTFOLIO">
                ACCESS_PORTFOLIO
              </NeoButton>
            </Link>
            <NeoButton tag="DL" variant="secondary" glitchText="DOWNLOAD_BIO">
              DOWNLOAD_BIO
            </NeoButton>
          </motion.div>

          {/* Connection Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center space-x-8"
          >
            <Link 
              href="https://github.com" 
              className="group relative"
            >
              <div className="bg-[#16213E] border-2 border-[#FFE135] p-4 hover:bg-[#FFE135] hover:text-black transition-all duration-300">
                <Github className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono text-[#FFE135] opacity-0 group-hover:opacity-100 transition-opacity">
                REPOSITORY
              </div>
            </Link>
            <Link 
              href="https://linkedin.com" 
              className="group relative"
            >
              <div className="bg-[#16213E] border-2 border-[#00BFFF] p-4 hover:bg-[#00BFFF] hover:text-black transition-all duration-300">
                <Linkedin className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono text-[#00BFFF] opacity-0 group-hover:opacity-100 transition-opacity">
                NETWORK
              </div>
            </Link>
            <Link 
              href="mailto:hello@example.com" 
              className="group relative"
            >
              <div className="bg-[#16213E] border-2 border-[#8E44AD] p-4 hover:bg-[#8E44AD] hover:text-white transition-all duration-300">
                <Mail className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono text-[#8E44AD] opacity-0 group-hover:opacity-100 transition-opacity">
                CONTACT
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * 1920,
              y: Math.random() * 1080,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}