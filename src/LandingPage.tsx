import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {
  Video,
  PenTool,
  Share2,
  Megaphone,
  MonitorSmartphone,
  Building,
  User,
  Lightbulb,
  GraduationCap,
  Sparkles,
  Menu,
  ArrowRight,
  Star,
  ArrowUpRight,
  Play,
  X,
  MessageCircle,
  Quote,
  Layers3,
  Target,
  Rocket,
  BarChart3,
} from "lucide-react";
import logo from "./assets/logo.jpeg";
import flyer1 from "./assets/brands'flyer.jpeg";
import flyer2 from "./assets/brands-flyer.jpeg";
import { useEffect, useState } from "react";
import { buildWhatsAppHref } from "./lib/whatsapp";

// --- Animation Variants ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappHref = buildWhatsAppHref({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Video Editing",
    budget: "",
    message: "Hello Royal Edit Media House, I need help with a creative brand project.",
  });

  return (
    <div className="min-h-screen bg-[#050505] text-[#E8E0D0] font-sans overflow-x-hidden selection:bg-[#C9A84C] selection:text-black">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="overflow-hidden rounded-md border border-white/10 group-hover:border-[#C9A84C]/50 transition-colors">
              <img src={logo} alt="Royal Edit logo" className="w-10 h-10 object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <span className="font-serif text-xl md:text-2xl font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-[#C9A84C] transition-all duration-500">Royal Edit</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-widest"
          >
            {['Home', 'About', 'Services', 'Work'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-[#C9A84C] transition-colors relative group">
                {item.toUpperCase()}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href="/contact" className="inline-flex items-center justify-center bg-[#C9A84C] text-black hover:bg-white hover:text-black font-bold rounded-full px-8 h-12 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              WORK WITH US
            </a>
          </motion.div>

          <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10 rounded-full" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute right-6 top-[76px] w-72 bg-[#0b0b0b]/95 border border-white/10 rounded-3xl p-6 shadow-2xl">
            <div className="flex flex-col gap-5">
              {['Home', 'About', 'Services', 'Work', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-[#C9A84C] transition-colors font-bold uppercase tracking-[0.2em]" onClick={() => setMenuOpen(false)}>{item}</a>
              ))}
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 bg-[#C9A84C] text-black px-7 py-3 rounded-full font-bold">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* --- 1. HERO SECTION --- */}
      <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C9A84C]/10 via-[#050505] to-[#050505] -z-10" />
        <motion.div 
          style={{ y }} 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C9A84C]/10 rounded-full blur-[150px] -z-10 pointer-events-none opacity-50" 
        />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto flex flex-col items-center relative z-10 mt-10"
        >
          <motion.div variants={fadeUpBlur} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 mb-10 backdrop-blur-md shadow-2xl hover:bg-white/[0.06] transition-colors cursor-pointer">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A84C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C9A84C]"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-white uppercase opacity-90">Now Taking New Projects</span>
          </motion.div>

          <motion.h1 variants={fadeUpBlur} className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] tracking-tight">
            We Build Brands <br/>
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] via-[#F2E3C6] to-[#C9A84C] bg-[length:200%_auto] animate-gradient">
                That Get Seen.
              </span>
            </span>
          </motion.h1>
          
          <motion.p variants={fadeUpBlur} className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-medium">
            Creative media, branding, and digital solutions designed to help visionary businesses, creators, and organizations dominate their market.
          </motion.p>
          
          <motion.div variants={fadeUpBlur} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a href="/contact" className="inline-flex items-center justify-center bg-[#C9A84C] text-black hover:bg-white font-bold px-10 h-14 rounded-full text-base transition-all duration-500 hover:scale-105 w-full sm:w-auto shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] group">
              Start Your Project <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <Button size="lg" type="button" variant="outline" onClick={() => setShowreelOpen(true)} className="border-white/20 text-white hover:bg-white hover:text-black px-10 h-14 rounded-full text-base font-bold transition-all duration-500 w-full sm:w-auto backdrop-blur-sm group">
              <Play className="mr-2 w-4 h-4 fill-current opacity-70 group-hover:opacity-100" /> View Showreel
            </Button>
          </motion.div>

          <motion.div variants={fadeUpBlur} className="mt-12 flex flex-wrap items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-[0.24em] text-gray-400">
            {['Brand Systems', 'Video Editing', 'Social Campaigns', 'Creative Strategy'].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:border-[#C9A84C] transition-colors">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>
      </section>

      {/* --- 2. ABOUT --- */}
      <section id="about" className="py-32 px-6 bg-[#0a0a0a] relative border-y border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="container mx-auto max-w-5xl text-center relative z-10"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-10 tracking-tight leading-tight">
            More Than Media. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#8B6F2E] italic">We Build Presence.</span>
          </h2>
          <p className="text-xl md:text-3xl text-gray-400 leading-relaxed font-light max-w-4xl mx-auto">
            Royal Edit Media House is a premier creative agency. We solve the problem of digital invisibility by equipping ambitious brands with high-impact visuals and strategic digital presence. 
            <span className="text-white font-medium"> Our vision is to ensure that every brand with something to say is heard and remembered.</span>
          </p>
        </motion.div>
      </section>

      {/* --- 3. SERVICES --- */}
      <section id="services" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-[#C9A84C] font-bold tracking-[0.2em] text-xs uppercase mb-6 block flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C9A84C]"></span>
                Our Expertise
              </span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight">Services that elevate your brand.</h2>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Video size={32} />, title: "Video Editing", items: ["Social media videos", "Promotional videos", "Documentary edits"] },
              { icon: <PenTool size={32} />, title: "Graphic Design", items: ["Event Flyers", "Brand visuals", "Social media designs"] },
              { icon: <Share2 size={32} />, title: "Social Media", items: ["Content planning", "Page management", "Growth strategy"] },
              { icon: <Megaphone size={32} />, title: "Advertising", items: ["Business advertising", "Campaign content", "Promo strategies"] },
            ].map((service, i) => (
              <motion.div key={i} variants={fadeUpBlur}>
                <Card className="bg-white/[0.02] border-white/5 hover:bg-[#111] hover:border-[#C9A84C]/30 transition-all duration-500 rounded-3xl h-full group overflow-hidden relative">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-10 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A84C] mb-8 group-hover:scale-110 group-hover:bg-[#C9A84C] group-hover:text-black transition-all duration-500">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-2xl mb-6 text-white">{service.title}</h3>
                    <ul className="space-y-4 text-gray-400 text-sm mb-8 font-medium">
                      {service.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES DETAIL / STRATEGY --- */}
      <section className="py-32 px-6 bg-[#111] relative overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(circle_at_right,_rgba(201,168,76,0.08),transparent_30%)]" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="space-y-8"
            >
              <span className="text-[#C9A84C] font-bold tracking-[0.2em] text-xs uppercase mb-6 block flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C9A84C]"></span>
                Strategy Studio
              </span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
                Creative systems built to make your brand impossible to ignore.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Royal Edit connects the right visual language with the right distribution rhythm so your content becomes instantly recognizable.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                  <span className="text-[#C9A84C] text-3xl font-serif font-bold">360°</span>
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-3">Creative Direction</div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                  <span className="text-[#C9A84C] text-3xl font-serif font-bold">01</span>
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-3">Launch Plans</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="inline-flex items-center gap-2 bg-[#C9A84C] text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300">
                  Plan My Project <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#workflow" className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 rounded-full text-white font-bold hover:bg-white hover:text-black transition-all duration-300">
                  See Workflow
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid grid-cols-1 gap-4"
            >
              {[
                { title: "Brand Positioning", text: "We define your voice, offer and creative direction before content begins.", icon: <Target size={26} /> },
                { title: "Content Packaging", text: "We package your idea into visual systems, reels, flyers, captions and campaign assets.", icon: <Layers3 size={26} /> },
                { title: "Social Launch", text: "We build the distribution rhythm that makes campaigns move across platforms.", icon: <Rocket size={26} /> },
                { title: "Growth Feedback", text: "We turn campaign learnings into visual improvements and sharper creative decisions.", icon: <BarChart3 size={26} /> },
              ].map((service, index) => (
                <motion.div key={index} variants={fadeUpBlur} className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 flex items-start gap-5 hover:bg-[#C9A84C]/10 transition-all duration-500 hover:-translate-y-1">
                  <span className="w-12 h-12 rounded-full flex items-center justify-center border border-[#C9A84C]/50 text-[#C9A84C]">{service.icon}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{service.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 4. BRANDS SHOWCASE (Flyers) --- */}
      <section id="work" className="py-32 px-6 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <span className="text-[#C9A84C] font-bold tracking-[0.2em] text-xs uppercase mb-6 block flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C9A84C]"></span>
                Portfolio
              </span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight">Our Brand Collateral</h2>
            </div>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black rounded-full px-8 h-12 font-bold group transition-all duration-300">
              View All Work <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[flyer1, flyer2].map((img, idx) => (
              <motion.div key={idx} variants={scaleUp} className="group cursor-pointer">
                <div className="overflow-hidden rounded-[2rem] bg-[#111] relative border border-white/5 aspect-[4/5] md:aspect-square">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  <img src={img} alt={`Brand flyer ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[#C9A84C] font-bold text-sm tracking-widest uppercase mb-2 block">Brand Identity</span>
                      <h3 className="font-serif text-3xl text-white font-bold mb-6">Premium Campaign 0{idx + 1}</h3>
                      <Button className="bg-white text-black hover:bg-[#C9A84C] hover:text-black rounded-full font-bold">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CASE STUDIES / WORKSHOWCASE --- */}
      <section id="case-studies" className="py-32 px-6 bg-black border-b border-white/5">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
          >
            <div>
              <span className="text-[#C9A84C] font-bold tracking-[0.2em] text-xs uppercase mb-6 block flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C9A84C]"></span>
                Case Studies
              </span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-white">Campaign Systems</h2>
            </div>
            <a href="/contact" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-[#C9A84C] hover:text-black transition-all duration-300">
              Build A System <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Visual Identity Reset", audience: "Lifestyle + Retail", result: "+38% Reach", detail: "Campaign clarity and premium creative design for a new product launch." },
              { title: "Creator Growth Pack", audience: "Creator Economy", result: "+112% Saves", detail: "Short-form social design system built for repeatable content momentum." },
              { title: "Event Promo System", audience: "Live Experience", result: "+64% RSVPs", detail: "Flyer, social, and audience strategy packaged for a memorable event reveal." },
            ].map((study, index) => (
              <motion.div key={index} variants={scaleUp} className="group rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 hover:bg-[#C9A84C]/10 hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.2em]">{study.audience}</span>
                  <span className="w-12 h-[1px] bg-[#C9A84C]"></span>
                </div>
                <div className="font-serif text-3xl font-bold text-white mb-5">{study.title}</div>
                <p className="text-sm text-gray-400 leading-relaxed mb-8">{study.detail}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-[#C9A84C] uppercase text-xs font-bold tracking-[0.2em]">Impact</span>
                  <span className="text-white font-bold text-sm">{study.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. WHO WE WORK WITH --- */}
      <section className="py-32 px-6 bg-[#C9A84C] text-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center mb-24"
          >
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">Built For People With <br/>Something To Say.</h2>
            <p className="text-xl md:text-2xl font-medium opacity-80 max-w-3xl mx-auto">We partner with visionary leaders across all industries to elevate their message and maximize their impact.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {[
              { icon: <Building size={32}/>, label: "Businesses" },
              { icon: <Lightbulb size={32}/>, label: "Entrepreneurs" },
              { icon: <Sparkles size={32}/>, label: "Creators" },
              { icon: <MonitorSmartphone size={32}/>, label: "Organizations" },
              { icon: <User size={32}/>, label: "Personal Brands" },
              { icon: <GraduationCap size={32}/>, label: "Campus" },
            ].map((target, i) => (
              <motion.div 
                key={i} 
                variants={scaleUp}
                className="flex flex-col items-center gap-5 p-8 rounded-[2rem] bg-black/5 hover:bg-black hover:text-white hover:-translate-y-2 transition-all duration-300 text-center group"
              >
                <div className="text-black group-hover:text-[#C9A84C] transition-colors">{target.icon}</div>
                <span className="font-bold text-sm uppercase tracking-wider">{target.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 6. PROCESS --- */}
      <section className="py-32 px-6 bg-[#0b0b0b] border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-[#C9A84C] font-bold tracking-[0.2em] text-xs uppercase mb-6 block flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-[#C9A84C]"></span>
              Creative Process
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight">From signal to strategy.</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { icon: <Target size={32} />, title: "01 · Discover", text: "We clarify your offer, audience, and competitive opportunity." },
              { icon: <Layers3 size={32} />, title: "02 · Design", text: "We craft the visual language, campaign direction, and content system." },
              { icon: <Rocket size={32} />, title: "03 · Launch", text: "We deliver production-ready assets built for digital momentum." },
              { icon: <BarChart3 size={32} />, title: "04 · Grow", text: "We optimize feedback loops to make your content work harder." },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeUpBlur} className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 group hover:bg-[#C9A84C] hover:text-black transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center mb-8 text-[#C9A84C] group-hover:text-black group-hover:bg-white/90 transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-gray-400 group-hover:text-black leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-32 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Royal Edit translated our brand into a consistent creative system we could scale.", name: "Executive Team", title: "Business Growth" },
              { quote: "Their content direction gave our campaign a stronger voice and sharper visual rhythm.", name: "Campaign Lead", title: "Creative Strategy" },
              { quote: "From flyers to campaign visuals, every piece felt premium and intentional.", name: "Founder", title: "Personal Brand" },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10">
                <Quote className="w-8 h-8 text-[#C9A84C] mb-8" />
                <p className="text-gray-300 leading-relaxed mb-8 italic">“{testimonial.quote}”</p>
                <div className="border-t border-white/10 pt-6">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mt-2">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. STATS --- */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 text-center divide-x divide-white/10"
          >
            {[
              { num: "50+", label: "Projects Completed" },
              { num: "20+", label: "Brands Served" },
              { num: "300+", label: "Content Pieces" },
              { num: "15+", label: "Platforms Managed" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUpBlur}
                className={i % 2 === 0 ? "border-none md:border-solid md:border-l" : "border-none md:border-solid md:border-l"}
              >
                <div className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">{stat.num}</div>
                <div className="text-xs md:text-sm text-[#C9A84C] font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 7. CTA --- */}
      <section className="py-40 px-6 text-center relative overflow-hidden bg-[#111] border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#C9A84C]/5" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="container mx-auto max-w-4xl relative z-10"
        >
          <div className="w-20 h-20 mx-auto bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-10 border border-[#C9A84C]/20">
            <Star className="w-8 h-8 text-[#C9A84C] fill-[#C9A84C]" />
          </div>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white tracking-tight leading-[1.1]">
            Ready To Build <br/><span className="text-[#C9A84C]">Your Brand?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 font-medium max-w-2xl mx-auto">Let's create something people will remember. Book a free consultation with our creative directors today.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-[#C9A84C] text-black hover:bg-white font-bold px-12 h-16 rounded-full text-lg shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:-translate-y-1 transition-all duration-300">
              Start A Project
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 h-16 rounded-full text-lg font-bold transition-colors">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </section>

      {showreelOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="w-full max-w-4xl rounded-[2rem] border border-[#C9A84C]/50 bg-[#0d0d0d] p-3 shadow-[0_0_40px_rgba(201,168,76,0.2)]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div>
                <span className="text-[#C9A84C] font-bold uppercase tracking-[0.2em] text-xs">Royal Edit Showreel</span>
              </div>
              <button type="button" onClick={() => setShowreelOpen(false)} className="rounded-full border border-white/20 p-2 text-white hover:text-black hover:bg-[#C9A84C] transition-all">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-hidden rounded-[1.6rem] mt-3">
              <video poster={flyer1} controls autoPlay className="w-full aspect-video bg-black object-cover">
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}

      <a href={whatsappHref} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300">
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* --- 8. FOOTER --- */}
      <footer className="py-16 px-6 bg-[#050505] border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Royal Edit logo" className="w-12 h-12 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500" />
              <span className="font-serif font-bold tracking-[0.2em] uppercase text-xl">Royal Edit</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10 text-sm text-gray-400 font-bold tracking-[0.1em] uppercase">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'Work', href: '#work' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '/contact' },
              ].map(link => (
                <a key={link.label} href={link.href} className="hover:text-[#C9A84C] transition-colors">{link.label}</a>
              ))}
            </div>

            <div className="flex gap-8 text-gray-400">
              {['Instagram', 'TikTok', 'Facebook', 'WhatsApp'].map(social => (
                <a key={social} href="#" className="hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">{social}</a>
              ))}
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 text-center text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4 font-medium">
            <p>© {new Date().getFullYear()} Royal Edit Media House. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
