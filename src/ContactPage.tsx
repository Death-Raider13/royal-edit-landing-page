import { Button } from "./components/ui/button";
import { Mail, MapPin, MessageCircle, Phone, Send, CheckCircle2, Clock3 } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { buildWhatsAppHref } from "./lib/whatsapp";
import type { ContactLead } from "./lib/whatsapp";

export default function ContactPage() {
  const [contactStatus, setContactStatus] = useState(false);
  const [contactForm, setContactForm] = useState<ContactLead>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Video Editing",
    budget: "",
    message: "",
  });

  const handleContactChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setContactForm((current) => ({ ...current, [name]: value }));
  };

  const handleContactSubmit = (event: FormEvent) => {
    event.preventDefault();
    setContactStatus(true);
  };

  const whatsappHref = buildWhatsAppHref(contactForm);

  return (
    <div className="min-h-screen bg-[#050505] text-[#E8E0D0]">
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C9A84C]/15 via-[#050505] to-[#050505]" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-12 items-start">
            <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-[2rem] p-10 backdrop-blur-sm">
              <span className="text-[#C9A84C] font-bold tracking-[0.2em] text-xs uppercase mb-8 block flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C9A84C]"></span>
                Contact Us
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">Tell us about your vision.</h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                Schedule a free discovery call and let our creative team turn your idea into content, campaigns, and brand systems that people remember.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C]"><Phone className="w-5 h-5" /></span>
                  <span className="text-white font-semibold">+234 812 575 3825</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C]"><Mail className="w-5 h-5" /></span>
                  <span className="text-white font-semibold">hello@royaledit.media</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C]"><MapPin className="w-5 h-5" /></span>
                  <span className="text-white font-semibold">Creative Studio · Online & On Location</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C]"><Clock3 className="w-5 h-5" /></span>
                  <span className="text-white font-semibold">Mon–Fri · 8:00 AM – 6:00 PM</span>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#C9A84C] text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </a>
                <a href="/" className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300">
                  Back To Home
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#0d0d0d] border border-white/10 p-8 md:p-12">
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">Your Name</span>
                    <input name="name" value={contactForm.name} onChange={handleContactChange} required className="w-full bg-white/[0.03] border border-white/15 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C]" placeholder="Jane Doe" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">Email Address</span>
                    <input type="email" name="email" value={contactForm.email} onChange={handleContactChange} required className="w-full bg-white/[0.03] border border-white/15 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C]" placeholder="jane@company.com" />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">Phone Number</span>
                    <input type="tel" name="phone" value={contactForm.phone} onChange={handleContactChange} required className="w-full bg-white/[0.03] border border-white/15 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C]" placeholder="+234 ..." />
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">Company / Brand</span>
                    <input name="company" value={contactForm.company} onChange={handleContactChange} className="w-full bg-white/[0.03] border border-white/15 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C]" placeholder="Your brand name" />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">Service Needed</span>
                    <select name="service" value={contactForm.service} onChange={handleContactChange} className="w-full bg-white/[0.03] border border-white/15 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C]">
                      <option className="text-black">Video Editing</option>
                      <option className="text-black">Graphic Design</option>
                      <option className="text-black">Social Media</option>
                      <option className="text-black">Advertising</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">Budget Range</span>
                    <select name="budget" value={contactForm.budget} onChange={handleContactChange} className="w-full bg-white/[0.03] border border-white/15 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C]">
                      <option className="text-black">Below $250</option>
                      <option className="text-black">$250 - $500</option>
                      <option className="text-black">$500 - $1000</option>
                      <option className="text-black">$1000+</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">Project Brief</span>
                  <textarea name="message" value={contactForm.message} onChange={handleContactChange} rows={5} required className="w-full bg-white/[0.03] border border-white/15 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C]" placeholder="Tell us about your goals..." />
                </label>

                <div className="flex flex-wrap items-center gap-4">
                  <Button type="submit" className="bg-[#C9A84C] text-black hover:bg-white font-bold px-8 h-12 rounded-full">
                    Submit Brief <Send className="ml-2 w-4 h-4" />
                  </Button>
                  <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#C9A84C] font-bold uppercase tracking-[0.2em] text-xs hover:text-white">
                    <MessageCircle className="w-4 h-4" /> Chat On WhatsApp
                  </a>
                </div>

                {contactStatus && (
                  <div className="rounded-2xl border border-[#C9A84C]/50 bg-[#C9A84C]/10 p-4 text-sm text-[#F7EDD8]">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A84C]" />
                      Thanks — your creative brief is ready. We’ll contact you shortly.
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
