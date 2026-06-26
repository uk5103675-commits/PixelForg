import React from "react";
import { motion } from "motion/react";
import { MessageCircle, ArrowDown, Calendar, Users, Briefcase, Award } from "lucide-react";
import Counter from "./Counter";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-950/45 border border-indigo-500/35 backdrop-blur-md shadow-lg shadow-indigo-500/5 text-indigo-300 font-medium text-xs sm:text-sm"
            >
              <Calendar className="w-4 h-4 text-indigo-400" />
              <span>⭐ 6+ Years of Professional Experience</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
                PixelForge
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-400">
                Professional Digital Solutions
              </span>{" "}
              <span className="text-white">for Creators & Businesses</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              Helping creators and businesses grow with trusted digital services, professional design, and premium online solutions. We forge your digital vision into reality.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/923041245158"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold text-white shadow-xl shadow-indigo-600/20 hover:shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 fill-white/10" />
                Contact on WhatsApp
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#0a0a18]/80 hover:bg-indigo-950/20 text-gray-200 border border-indigo-900/40 hover:border-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                View Services
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
            </motion.div>

            {/* Floating Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 w-full"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-3xl bg-indigo-950/10 border border-indigo-950/30 backdrop-blur-sm">
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    <Counter end={500} suffix="+" />
                  </div>
                  <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <Users className="w-3 h-3 text-indigo-400" /> Happy Clients
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    <Counter end={1500} suffix="+" />
                  </div>
                  <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <Briefcase className="w-3 h-3 text-indigo-400" /> Projects Done
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    <Counter end={99} suffix="%" />
                  </div>
                  <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <Award className="w-3 h-3 text-indigo-400" /> Success Rate
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    24/7
                  </div>
                  <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" /> Online Support
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Floating Character Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            {/* Background glowing circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-full bg-gradient-to-tr from-purple-600/20 via-indigo-600/20 to-blue-500/20 blur-[60px] -z-10 animate-pulse" />
            
            {/* Floating character wrapper using custom .hero-image style */}
            <div className="hero-image relative z-10 flex items-center justify-center">
              <img
                src="https://plain-eeur-prod-public.komododecks.com/202606/26/fFc0Po3Ll7fnCNOrCB0C/image.jpg"
                alt="PixelForge Founder & Digital Expert"
                referrerPolicy="no-referrer"
                className="transition-transform duration-700 hover:scale-[1.03]"
                onError={(e) => {
                  // Fallback if the image cannot be read
                  e.currentTarget.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
