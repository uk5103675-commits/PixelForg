import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MessageCircle, Send, Sparkles, CheckCircle2, Copy, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    service: "YouTube Channel Acquisition & Sale",
    message: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const servicesList = [
    "YouTube Channel Acquisition & Sale",
    "YouTube Channel Growth",
    "20-Day Channel Warm-Up Program",
    "Thumbnail Design",
    "Islamic Short Video Editing",
    "Banner Design",
    "Logo Design",
    "UK Business Account Sales",
    "Mobile CapCut Account Sales",
    "Premium Tools Access",
    "Portfolio Website Design & Launch"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getWhatsAppLink = (number: string) => {
    const baseText = `Hello PixelForge! I would like to inquire about your services.\n\n*Name:* ${formData.name || "Visitor"}\n*Service:* ${formData.service}\n*Message:* ${formData.message || "I am interested in this service!"}`;
    return `https://wa.me/${number}?text=${encodeURIComponent(baseText)}`;
  };

  const getEmailLink = () => {
    const subject = `PixelForge Service Inquiry: ${formData.service}`;
    const body = `Hello PixelForge Team,\n\nName: ${formData.name || "Visitor"}\nSelected Service: ${formData.service}\n\nMessage:\n${formData.message || "I would like to inquire about this service!"}\n\nBest regards,`;
    return `mailto:gaminginhell56@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (type: "whatsapp" | "email") => {
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);

    if (type === "whatsapp") {
      // Directs to the primary whatsapp number
      window.open(getWhatsAppLink("923041245158"), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = getEmailLink();
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full bg-purple-900/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-px w-6 bg-indigo-500" />
            <span className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">
              Get in Touch
            </span>
            <span className="h-px w-6 bg-indigo-500" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Forge Your Next <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300">Big Project</span> With Us
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Contact us directly on WhatsApp or submit a quick inquiry below. We typically reply within 15 minutes!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="font-display font-bold text-white text-xl sm:text-2xl mb-4">
              Direct Contact Details
            </h3>
            
            {/* WhatsApp Cards */}
            <div className="space-y-4">
              {/* WhatsApp Card 1 */}
              <div className="p-6 rounded-[24px] border border-emerald-500/25 bg-emerald-950/10 backdrop-blur-md relative overflow-hidden flex flex-col space-y-4 shadow-[0_8px_32px_rgba(16,185,129,0.05)] hover:border-emerald-500/45 hover:shadow-[0_8px_32px_rgba(16,185,129,0.15)] transition-all duration-300 group">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-all" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/25 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:bg-emerald-500/20 transition-colors">
                      <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                    </div>
                    <div>
                      <div className="text-[10px] text-emerald-400/70 font-mono tracking-widest uppercase">Verified Account</div>
                      <h4 className="text-white font-display font-extrabold text-sm sm:text-base">WhatsApp Number 1</h4>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Online
                  </span>
                </div>

                <div className="py-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 tracking-wide font-mono drop-shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                    03041245158
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("03041245158");
                      setCopied1(true);
                      setTimeout(() => setCopied1(false), 2000);
                    }}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#020205] hover:bg-emerald-950/30 border border-emerald-500/20 hover:border-emerald-500/40 text-xs text-emerald-400 font-semibold transition-all duration-200 cursor-pointer"
                  >
                    {copied1 ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-emerald-400/70" />
                        Copy Number
                      </>
                    )}
                  </button>
                  <a
                    href="https://wa.me/923041245158"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-xs text-white font-bold transition-all duration-300 shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/20 hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4 text-white fill-white/10" />
                    Click to Chat
                  </a>
                </div>
              </div>

              {/* WhatsApp Card 2 */}
              <div className="p-6 rounded-[24px] border border-emerald-500/25 bg-emerald-950/10 backdrop-blur-md relative overflow-hidden flex flex-col space-y-4 shadow-[0_8px_32px_rgba(16,185,129,0.05)] hover:border-emerald-500/45 hover:shadow-[0_8px_32px_rgba(16,185,129,0.15)] transition-all duration-300 group">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-all" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/25 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:bg-emerald-500/20 transition-colors">
                      <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                    </div>
                    <div>
                      <div className="text-[10px] text-emerald-400/70 font-mono tracking-widest uppercase">Verified Account</div>
                      <h4 className="text-white font-display font-extrabold text-sm sm:text-base">WhatsApp Number 2</h4>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Online
                  </span>
                </div>

                <div className="py-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 tracking-wide font-mono drop-shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                    03074073876
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("03074073876");
                      setCopied2(true);
                      setTimeout(() => setCopied2(false), 2000);
                    }}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#020205] hover:bg-emerald-950/30 border border-emerald-500/20 hover:border-emerald-500/40 text-xs text-emerald-400 font-semibold transition-all duration-200 cursor-pointer"
                  >
                    {copied2 ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-emerald-400/70" />
                        Copy Number
                      </>
                    )}
                  </button>
                  <a
                    href="https://wa.me/923074073876"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-xs text-white font-bold transition-all duration-300 shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/20 hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4 text-white fill-white/10" />
                    Click to Chat
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <a
              href="mailto:gaminginhell56@gmail.com"
              className="block p-6 rounded-3xl border border-indigo-950/40 bg-[#04040d]/70 backdrop-blur-md relative overflow-hidden shadow-xl hover:border-indigo-500/30 transition-all duration-300 group text-left"
            >
              <div className="flex items-center space-x-3 text-indigo-400 font-semibold text-sm tracking-wider uppercase mb-3">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span>Email Address</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Send us an email for formal requests, large business partnerships, or contract agreements.
              </p>
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#020205] border border-indigo-950/50 group-hover:border-indigo-500/40 group-hover:bg-indigo-950/10 transition-all">
                <div className="font-mono text-xs sm:text-sm text-white font-semibold">
                  gaminginhell56@gmail.com
                </div>
                <Send className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300" />
              </div>
            </a>

          </div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-[32px] border border-indigo-950/45 bg-[#050511]/80 backdrop-blur-md relative overflow-hidden shadow-xl text-left">
              
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" />
                <h3 className="font-display font-bold text-white text-xl sm:text-2xl">
                  Quick Inquiry Portal
                </h3>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="font-display font-bold text-white text-lg">Inquiry Link Generated!</h4>
                  <p className="text-gray-400 text-sm max-w-sm">
                    We've prepared your details. If your chat or email window did not open automatically, please click on the direct buttons below.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Michael"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#020205]/80 border border-indigo-950/60 focus:border-indigo-500/60 focus:outline-none text-white text-sm transition-all placeholder:text-gray-600 shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">
                      Select Desired Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#020205]/80 border border-indigo-950/60 focus:border-indigo-500/60 focus:outline-none text-white text-sm transition-all shadow-inner"
                    >
                      {servicesList.map((serviceName) => (
                        <option key={serviceName} value={serviceName} className="bg-[#03030c] text-white">
                          {serviceName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">
                      Inquiry Details
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Explain your channel requirements, target design style, timeline, or inquiries..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#020205]/80 border border-indigo-950/60 focus:border-indigo-500/60 focus:outline-none text-white text-sm transition-all placeholder:text-gray-600 shadow-inner resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                    <button
                      type="button"
                      onClick={() => handleSubmit("whatsapp")}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 font-semibold text-white shadow-lg shadow-emerald-600/10 hover:shadow-emerald-600/20 hover:scale-[1.01] transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Submit via WhatsApp
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSubmit("email")}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold text-white shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 hover:scale-[1.01] transition-all"
                    >
                      <Mail className="w-5 h-5" />
                      Submit via Email
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
