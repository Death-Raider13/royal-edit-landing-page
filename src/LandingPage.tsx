import { motion } from "framer-motion";
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
  Target,
  Zap,
  TrendingUp,
  Menu,
  ArrowRight,
  Star
} from "lucide-react";
import logo from "./assets/logo.jpeg";
import flyer1 from "./assets/brands'flyer.jpeg";
import flyer2 from "./assets/brands-flyer.jpeg";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-[#E8E0D0] font-sans selection:bg-[#C9A84C] selection:text-black">
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img src={logo} alt="Royal Edit logo" className="w-10 h-10 object-contain rounded-md" />
            <span className="font-serif text-xl md:text-2xl font-bold tracking-widest uppercase">Royal Edit</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wider"
          >
            {['Home', 'About', 'Services', 'Work', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                {item.toUpperCase()}
              </a>
            ))}
            <Button className="bg-[#C9A84C] text-black hover:bg-white hover:text-black font-bold rounded-full px-8 h-12 transition-all duration-300 shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              WORK WITH US
            </Button>
          </motion.div>

          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section id="home" className="relative pt-40 pb-32 md:pt-56 md:pb-48 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-[#C9A84C] uppercase">Premium Creative Agency</span>
          </motion.div>

          <motion.h1 variants={fadeIn} className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            We Build Brands That <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#F2E3C6]">Get Seen.</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light">
            Creative media, branding, and digital solutions designed to help businesses, creators, and organizations stand out in a noisy world.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Button size="lg" className="bg-[#C9A84C] text-black hover:bg-white font-bold px-10 h-14 rounded-full text-base transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(201,168,76,0.2)]">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-10 h-14 rounded-full text-base font-medium transition-all duration-300 w-full sm:w-auto backdrop-blur-sm">
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ABOUT */}
      <section id="about" className="py-32 px-6 bg-zinc-950 relative border-y border-white/5">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="container mx-auto max-w-4xl text-center relative z-10"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 tracking-tight">More Than Media. <span className="text-[#C9A84C] italic">We Build Presence.</span></h2>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
            Royal Edit Media House is a premier creative agency. We solve the problem of digital invisibility by equipping ambitious brands with high-impact visuals and strategic digital presence. Our vision is to ensure that every brand with something to say is heard and remembered.
          </p>
        </motion.div>
      </section>

      {/* 3. SERVICES */}
      <section id="services" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-[#C9A84C] font-bold tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Services that elevate your brand.</h2>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Video size={28} />, title: "Video Editing", items: ["Social media videos", "Promotional videos", "Documentary edits"] },
              { icon: <PenTool size={28} />, title: "Graphic Design", items: ["Event Flyers", "Brand visuals", "Social media designs"] },
              { icon: <Share2 size={28} />, title: "Social Media", items: ["Content planning", "Page management", "Growth strategy"] },
              { icon: <Megaphone size={28} />, title: "Advertising", items: ["Business advertising", "Campaign content", "Promo strategies"] },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-[#C9A84C]/50 transition-all duration-500 rounded-2xl h-full group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] mb-8 group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-2xl mb-4 text-white">{service.title}</h3>
                    <ul className="space-y-3 text-gray-400 text-sm mb-8">
                      {service.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-[#C9A84C]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO WE WORK WITH */}
      <section className="py-32 px-6 bg-[#C9A84C] text-black rounded-t-[3rem] md:rounded-t-[5rem] mt-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">Built For People With <br/>Something To Say.</h2>
            <p className="text-xl font-medium opacity-80 max-w-2xl mx-auto">We partner with ambitious visionaries across all industries.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-black/5 hover:bg-black/10 hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="text-black">{target.icon}</div>
                <span className="font-bold text-sm uppercase tracking-wider">{target.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY ROYAL EDIT? */}
      <section className="py-32 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="text-[#C9A84C] font-bold tracking-widest text-sm uppercase mb-4 block">The Difference</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 tracking-tight">Why choose Royal Edit?</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We combine striking aesthetics with deep strategic thinking. Our goal isn't just to make things look pretty—it's to drive engagement, build trust, and create lasting impact.
              </p>
              <Button className="bg-white text-black hover:bg-[#C9A84C] font-bold rounded-full px-8 h-12 transition-colors">
                Read Our Story
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Sparkles />, title: "Creative", desc: "We make content that is truly memorable." },
                { icon: <Target />, title: "Strategic", desc: "Every piece of content has a clear purpose." },
                { icon: <Zap />, title: "Modern", desc: "Equipped with modern creative & digital tools." },
                { icon: <TrendingUp />, title: "Results-Focused", desc: "Built for visibility, engagement, and growth." },
              ].map((point, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeIn}
                  className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-[#C9A84C]/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] mb-6">
                    {point.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{point.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. OUR WORK */}
      <section id="work" className="py-32 px-6 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#C9A84C] font-bold tracking-widest text-sm uppercase mb-4 block">Portfolio</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Selected Projects</h2>
            </div>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black rounded-full px-8">
              View All Work
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <motion.div 
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: project * 0.1 }}
                className="group cursor-pointer block"
              >
                <div className="aspect-[4/3] rounded-3xl bg-zinc-900 relative overflow-hidden mb-6 border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-8">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Button className="bg-[#C9A84C] text-black hover:bg-white rounded-full">
                        View Project <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C9A84C] to-transparent" />
                </div>
                <div className="px-2">
                  <h3 className="font-bold text-2xl mb-2 group-hover:text-[#C9A84C] transition-colors">Campus Brand Campaign 0{project}</h3>
                  <p className="text-gray-400 font-medium">Social Media + Graphic Design</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BRANDS SHOWCASE (Flyers) */}
      <section id="brands" className="py-32 px-6 bg-black border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#C9A84C] mb-4">Our Brand Collateral</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A glimpse at the visual assets we’ve crafted for our partners.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[flyer1, flyer2].map((img, idx) => (
              <motion.div key={idx} variants={fadeIn} className="overflow-hidden rounded-2xl shadow-lg border border-white/5">
                <img src={img} alt={`Brand flyer ${idx + 1}`} className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. STATS */}
      <section className="py-24 px-6 border-y border-white/5 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C9A84C]/5" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
            {[
              { num: "50+", label: "Projects Completed" },
              { num: "20+", label: "Brands Served" },
              { num: "300+", label: "Content Pieces" },
              { num: "15+", label: "Platforms Managed" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={i % 2 === 0 ? "" : "border-none md:border-solid"}
              >
                <div className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{stat.num}</div>
                <div className="text-xs md:text-sm text-[#C9A84C] font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tight">Client Feedback</h2>
            <div className="w-12 h-1 bg-[#C9A84C] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((t) => (
              <motion.div 
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: t * 0.1 }}
              >
                <Card className="bg-black border-white/5 rounded-3xl h-full p-2">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-8">
                      {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-[#C9A84C] text-[#C9A84C]" />)}
                    </div>
                    <p className="text-gray-300 italic mb-8 leading-relaxed text-lg">
                      "Royal Edit Media House completely transformed the way our brand presents itself online. Highly recommended!"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10" />
                      <div>
                        <div className="font-bold text-white">Client Name</div>
                        <div className="text-[#C9A84C] text-sm">Business/Organization</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="py-40 px-6 text-center relative overflow-hidden bg-[#C9A84C]">
        <div className="absolute inset-0 bg-black/10" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl relative z-10"
        >
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-black tracking-tight leading-tight">
            Ready To Build Your Brand?
          </h2>
          <p className="text-xl md:text-2xl text-black/80 mb-12 font-medium">Let's create something people will remember.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-zinc-900 font-bold px-12 h-16 rounded-full text-lg shadow-xl hover:-translate-y-1 transition-transform">
              Work With Royal Edit
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/5 px-12 h-16 rounded-full text-lg font-bold transition-colors">
              Chat With Us
            </Button>
          </div>
        </motion.div>
      </section>

      {/* 11. FOOTER */}
      <footer id="contact" className="py-16 px-6 bg-black border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Royal Edit logo" className="w-8 h-8 object-contain rounded-md" />
              <span className="font-serif font-bold tracking-widest uppercase">Royal Edit</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 font-medium tracking-wider">
              {['Home', 'Services', 'Work', 'About', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">{link}</a>
              ))}
            </div>

            <div className="flex gap-6 text-gray-400">
              {['Instagram', 'TikTok', 'Facebook', 'WhatsApp'].map(social => (
                <a key={social} href="#" className="hover:text-[#C9A84C] transition-colors text-sm font-medium">{social}</a>
              ))}
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 Royal Edit Media House. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
