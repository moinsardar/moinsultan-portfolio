import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import {
  Search,
  TrendingUp,
  Link2,
  FileText,
  BarChart3,
  Zap,
  Mail,
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
  Code2,
  Download,
  Sparkles,
  MapPin,
  Clock,
  Quote,
  Star,
  Menu,
  X,
  ArrowUp,
} from "lucide-react";
import portraitAsset from "@/assets/moin-portrait.jpg.asset.json";
import norwestBefore from "@/assets/norwest-before.jpg.asset.json";
import norwestAfter from "@/assets/norwest-after.jpg.asset.json";
import starprinters from "@/assets/starprinters.jpg.asset.json";
import rskillpilot from "@/assets/rskillpilot.jpg.asset.json";
import projZeroTrust from "@/assets/proj-thezerotrust.png";
import projDestinationRoyale from "@/assets/proj-destinationroyale.png";
import projMalwarriors from "@/assets/proj-malwarriorshub.png";
import projOppongmed from "@/assets/proj-oppongmed.png";
import projMoorlandvale from "@/assets/proj-moorlandvale.png";
import projElite from "@/assets/proj-elitecertification.png";
import msLogo from "@/assets/ms-logo.png";
import cvAsset from "@/assets/moin-sultan-cv.pdf.asset.json";

const portrait = portraitAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
});

const stats = [
  { value: "3+", label: "Years" },
  { value: "50+", label: "Projects" },
  { value: "30+", label: "Clients" },
  { value: "7+", label: "Skills" },
];

const services = [
  { icon: Search, title: "On-Page SEO", desc: "Keyword research, meta optimization, content structure and internal linking." },
  { icon: Link2, title: "Off-Page & Backlinks", desc: "White-hat authority building, guest posting, and outreach." },
  { icon: Zap, title: "Technical SEO", desc: "Audits, Core Web Vitals, schema markup, crawl and indexing fixes." },
  { icon: TrendingUp, title: "Local & GMB", desc: "Rank in your city with optimized GMB, citations and local strategy." },
  { icon: FileText, title: "SEO Content", desc: "Blogs, service pages and product copy crafted to rank and convert." },
  { icon: BarChart3, title: "Audit & Reporting", desc: "Monthly reports with rankings, traffic growth and next steps." },
  { icon: Code2, title: "WordPress Dev", desc: "Fast, SEO-optimized, secure WordPress with Elementor & WooCommerce." },
  { icon: Mail, title: "Email Marketing", desc: "Campaigns, automations and newsletters that nurture leads and drive sales." },
  { icon: BarChart3, title: "Competitor Analysis", desc: "Deep competitor research to uncover gaps, keywords and winning strategies." },
];

const skills = [
  "WordPress", "Elementor", "WooCommerce", "Google Analytics", "Search Console",
  "Ahrefs", "SEMrush", "Yoast SEO", "Rank Math", "Screaming Frog",
  "Email Marketing", "Competitor Analysis",
];

const projects = [
  {
    image: projZeroTrust,
    url: "https://thezerotrust.co.uk/",
    category: "WordPress Development",
    title: "The Zero Trust",
    desc: "Nonprofit climate initiative building awareness and driving sustainable action.",
    tags: ["WordPress", "Elementor", "SEO"],
  },
  {
    image: projDestinationRoyale,
    url: "https://destinationroyale.ae/",
    category: "WordPress Development",
    title: "Destination Royale",
    desc: "Luxury Dubai real estate platform with property listings and lead capture.",
    tags: ["Custom Post Type", "WordPress", "SEO"],
  },
  {
    image: projMalwarriors,
    url: "https://malwarriorshub.co.uk/",
    category: "Agency Website",
    title: "Malwarriors Hub",
    desc: "Creative digital agency portfolio showcasing Shopify and WordPress services.",
    tags: ["WordPress", "UI/UX", "Branding"],
  },
  {
    image: projOppongmed,
    url: "https://oppongmed.com/",
    category: "Healthcare",
    title: "OPPMed",
    desc: "Occupational medical services website for workforce wellness and compliance.",
    tags: ["WordPress", "SEO", "Corporate"],
  },
  {
    image: projMoorlandvale,
    url: "https://moorlandvale.com/",
    category: "Healthcare",
    title: "Moorland Vale",
    desc: "ADHD assessments and treatment platform for children and adults in the UK.",
    tags: ["WordPress", "Elementor", "SEO"],
  },
  {
    image: projElite,
    url: "https://elitecertification.info/",
    category: "Corporate Website",
    title: "Elite Certification",
    desc: "ISO certification & management system training portal for global clients.",
    tags: ["WordPress", "SEO", "Corporate"],
  },
];

const caseStudies = [
  {
    beforeImage: norwestBefore.url,
    afterImage: norwestAfter.url,
    site: "norwestcosmeticsurgery.com.au",
    title: "Norwest Cosmetic Surgery",
    summary: "Technical fixes, content strategy and AI Search optimization doubled organic traffic in months.",
    metrics: [
      { label: "Organic Traffic", before: "66", after: "670", change: "+915%" },
      { label: "Keywords", before: "243", after: "600", change: "+147%" },
      { label: "AI Visibility", before: "0", after: "27", change: "New" },
      { label: "US Traffic", before: "0%", after: "22%", change: "+22pt" },
    ],
    tags: ["Semrush", "Technical SEO", "AI Search"],
  },
  {
    afterImage: starprinters.url,
    site: "starprinters.co.uk",
    title: "Star Printers UK",
    summary: "Ongoing SEO with steady clicks and impressions climbing across a 3-month window.",
    metrics: [
      { label: "Clicks", before: "~0", after: "903", change: "New" },
      { label: "Impressions", before: "Low", after: "63.5K", change: "Reach" },
      { label: "CTR", before: "—", after: "1.4%", change: "Baseline" },
      { label: "Position", before: "40+", after: "16.8", change: "Climbing" },
    ],
    tags: ["GSC", "UK Market", "On-Page"],
  },
  {
    afterImage: rskillpilot.url,
    site: "rskillpilot.com",
    title: "RSkill Pilot",
    summary: "Explosive growth — clicks scaled from zero to 158/day with a strong 17.3% CTR.",
    metrics: [
      { label: "Weekly Clicks", before: "~0", after: "13.9K", change: "Growth" },
      { label: "Impressions", before: "~0", after: "80.4K", change: "New" },
      { label: "CTR", before: "—", after: "17.3%", change: "Excellent" },
      { label: "Position", before: "50+", after: "8.5", change: "Page 1" },
    ],
    tags: ["GSC", "CTR", "Growth"],
  },
];

// Motion helpers
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
});

function Index() {
  return (
    <div className="min-h-screen relative">
      {/* Global grid overlay */}
      <div className="fixed inset-0 pointer-events-none grid-bg opacity-40" aria-hidden />

      <Header />

      <main className="relative">
        <Hero />
        <MarqueeBar />
        <BentoAbout />
        <ServicesSection />
        <ProjectsSection />
        <CaseStudiesSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

/* ────────────────────────────────── HEADER ────────────────────────────────── */

function Header() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#contact", label: "Contact" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <img src={msLogo} alt="Moin Sultan logo" width={56} height={56} className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-[0_0_16px_oklch(0.55_0.24_275/0.6)]" />
        </a>
        <div className="hidden md:flex items-center gap-1 rounded-full border border-border bg-card/40 backdrop-blur-md px-1.5 py-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-primary/10 transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5">
          Let's Talk
          <ArrowUpRight size={16} />
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border border-border bg-card/50 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-foreground rounded-lg hover:bg-primary/10 transition-all"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary text-sm py-3 mt-2 justify-center"
              >
                Let's Talk <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─────────────────────────────── SCROLL TO TOP ─────────────────────────────── */

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-elev flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────── HERO ─────────────────────────────────── */

function Hero() {
  return (
    <section id="home" className="relative px-6 pt-16 md:pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
        {/* Left */}
        <div className="lg:col-span-7">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur-md px-4 py-1.5 text-xs text-muted-foreground">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
              </span>
              Available for new SEO projects · 2026
            </div>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight"
          >
            SEO that
            <br />
            actually moves
            <br />
            <span className="text-gradient-brand">the needle.</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            I'm <span className="text-foreground font-medium">Moin Sultan</span> — SEO
            specialist & WordPress developer. I help brands climb Google, drive
            qualified traffic, and turn visitors into customers.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn-primary">
              Start a project <ArrowUpRight size={18} />
            </a>
            <a href="#work" className="btn-ghost">
              View work
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="mt-14 grid grid-cols-4 gap-6 max-w-lg"
          >
            {stats.map((s) => (
              <div key={s.label} className="border-l border-border pl-4">
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {s.value}
                </div>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Portrait */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-md"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-60 bg-gradient-to-br from-primary/40 via-accent/20 to-transparent" />

            {/* Portrait frame */}
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 shadow-elev">
              <img
                src={portrait}
                alt="Moin Sultan — SEO Specialist"
                width={1024}
                height={1024}
                className="w-full h-full object-contain"
              />
              {/* Overlay chip */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 backdrop-blur-lg px-4 py-3">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-accent" />
                  <p className="text-xs font-medium text-white">SEO Specialist</p>
                </div>
                <p className="text-[10px] text-white/60 flex items-center gap-1">
                  <MapPin size={10} /> Remote · Worldwide
                </p>
              </div>
            </div>

            {/* Floating badge */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────── MARQUEE ───────────────────────────────── */

function MarqueeBar() {
  const items = ["WordPress", "Semrush", "Ahrefs", "Search Console", "Google Analytics", "Yoast SEO", "Rank Math", "WooCommerce", "Elementor", "Schema"];
  return (
    <div className="relative py-8 border-y border-border overflow-hidden bg-card/20">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-16 mx-8 font-display text-2xl md:text-3xl text-muted-foreground/60 hover:text-foreground transition-colors">
            <span>{item}</span>
            <span className="text-primary/60">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────── BENTO ABOUT ──────────────────────────────── */

function BentoAbout() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="About" title={<>Built for <span className="text-gradient-brand">measurable growth</span>.</>} />

        <div className="mt-14 grid md:grid-cols-6 gap-4 md:gap-5 auto-rows-[minmax(0,auto)]">
          {/* Story - big */}
          <motion.article {...stagger(0)} className="bento md:col-span-4 md:row-span-2 p-8 md:p-10">
            <div className="bento-glow" />
            <p className="text-xs uppercase tracking-wider text-accent">Story</p>
            <h3 className="mt-3 font-display text-2xl md:text-3xl leading-tight">
              I'm a <span className="text-gradient-brand">Software Engineering graduate</span> with 3+ years of freelance experience serving clients worldwide.
            </h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              I've also worked on-site collaborating with teams and managing real
              projects. I'm passionate about clean, functional, user-friendly
              websites that bring ideas to life. My communication skills help me
              turn client vision into results that look great and perform better.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={cvAsset.url} download="Moin-Sultan-CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-3">
                <Download size={16} /> Download CV
              </a>
              <a href="#contact" className="btn-ghost text-sm py-3">
                Hire me <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.article>

          {/* Availability */}
          <motion.article {...stagger(1)} className="bento md:col-span-2 p-6 flex flex-col justify-between min-h-[180px]">
            <div className="bento-glow" />
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Availability</p>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div>
              <p className="font-display text-2xl">Open for<br /><span className="text-gradient-brand">Q1 2026</span></p>
              <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1.5">
                <Clock size={12} /> Replies within 24h
              </p>
            </div>
          </motion.article>

          {/* Focus */}
          <motion.article {...stagger(2)} className="bento md:col-span-2 p-6 min-h-[180px]">
            <div className="bento-glow" />
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Focus</p>
            <div className="mt-4 space-y-2">
              {["Organic SEO", "Technical audits", "WordPress builds"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <span className="w-1 h-1 rounded-full bg-primary" /> {f}
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── SERVICES ─────────────────────────────── */

function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Services"
          title={<>Everything you need to <span className="text-gradient-brand">rank & grow</span>.</>}
          subtitle="From technical audits to content and off-page — a complete SEO toolkit for real, sustainable growth."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                {...stagger(i)}
                className="bento p-7 group"
              >
                <div className="bento-glow" />
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/25 to-accent/15 border border-primary/30 flex items-center justify-center">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                  />
                </div>
                <h3 className="mt-6 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── PROJECTS ─────────────────────────────── */

function ProjectsSection() {
  return (
    <section id="work" className="px-6 py-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>WordPress builds & <span className="text-gradient-brand">SEO campaigns</span>.</>}
          subtitle="A selection of client projects across industries — every one built for performance and long-term ranking."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const domain = p.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
            return (
              <motion.a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                {...stagger(i)}
                className="bento overflow-hidden group block cursor-pointer"
              >
                <div className="bento-glow" />
                {/* Browser-style mockup */}
                <div className="p-3 pb-0">
                  <div className="rounded-xl overflow-hidden border border-border bg-background/80 shadow-2xl shadow-primary/5">
                    {/* Browser chrome */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-card/80 border-b border-border">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                      </div>
                      <div className="flex-1 mx-2 rounded-md bg-background/60 border border-border/60 px-2 py-0.5 text-[10px] text-muted-foreground truncate">
                        {domain}
                      </div>
                      <ArrowUpRight size={12} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {/* Screenshot */}
                    <div className="aspect-[16/10] overflow-hidden relative bg-background">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/40 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent">{p.category}</p>
                  <h3 className="mt-2 font-display text-xl flex items-center gap-2 group-hover:text-primary transition-colors">
                    {p.title}
                    <ArrowUpRight size={16} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] px-2.5 py-1 rounded-full border border-border text-muted-foreground uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────── CASE STUDIES ─────────────────────────────── */

function CaseStudiesSection() {
  return (
    <section id="case-studies" className="px-6 py-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Case Studies"
          title={<>Real <span className="text-gradient-brand">before & after</span> results.</>}
          subtitle="Actual Semrush and Google Search Console screenshots — see what changed."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {caseStudies.map((cs, i) => {
            const hasBefore = "beforeImage" in cs && Boolean(cs.beforeImage);

            return (
            <motion.article key={cs.title} {...stagger(i)} className="bento overflow-hidden group flex flex-col">
              <div className="bento-glow" />
              <div className={`relative bg-background/60 p-2 ${hasBefore ? "grid grid-cols-2 gap-2" : "aspect-video flex items-center justify-center"}`}>
                {hasBefore && (
                  <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-background/60 flex items-center justify-center">
                    <img src={cs.beforeImage} alt={`${cs.title} before result`} loading="lazy" className="w-full h-full object-contain" />
                    <span className="absolute top-2 left-2 text-[9px] font-semibold px-2 py-0.5 rounded-full bg-card/85 text-muted-foreground uppercase tracking-wider z-10">
                      Before
                    </span>
                  </div>
                )}
                <div className={`relative aspect-video overflow-hidden rounded-xl border border-border bg-background/60 flex items-center justify-center ${hasBefore ? "" : "w-full h-full border-0 rounded-none bg-transparent"}`}>
                  <img src={cs.afterImage} alt={`${cs.title} after result`} loading="lazy" className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-700" />
                  <span className="absolute top-2 left-2 text-[9px] font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground uppercase tracking-wider shadow-glow z-10">
                    After
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs uppercase tracking-wider text-accent">SEO Case Study</p>
                <h3 className="mt-2 font-display text-lg">{cs.title}</h3>
                <p className="text-[11px] text-muted-foreground mt-0.5">{cs.site}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{cs.summary}</p>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border border-border bg-background/40 p-3">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground">{m.label}</p>
                      <div className="mt-1 flex items-baseline gap-1.5">
                        <span className="text-[10px] text-muted-foreground line-through">{m.before}</span>
                        <ArrowRight size={9} className="text-accent" />
                        <span className="text-sm font-display font-bold text-gradient-brand">{m.after}</span>
                      </div>
                      <p className="mt-0.5 text-[9px] text-accent font-medium">{m.change}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {cs.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── SKILLS ─────────────────────────────── */

function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <SectionHeader
          eyebrow="Stack"
          title={<>The <span className="text-gradient-brand">SEO toolkit</span>.</>}
          center
        />
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              {...stagger(i)}
              className="px-5 py-2.5 text-sm rounded-full border border-border bg-card/40 backdrop-blur-md text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── TESTIMONIALS ─────────────────────────────── */

const testimonials = [
  {
    quote: "Moin transformed our organic traffic. Within 4 months our rankings jumped and leads doubled. Truly a pro at what he does.",
    name: "Sarah Mitchell",
    role: "Founder, Norwest Cosmetic Surgery",
    initials: "SM",
  },
  {
    quote: "Fast, professional and always on top of the details. Our WordPress site is faster, cleaner and finally ranks on page 1.",
    name: "James Carter",
    role: "Director, Star Printers UK",
    initials: "JC",
  },
  {
    quote: "Best SEO specialist I've worked with. Clear reports, real results and honest communication throughout the project.",
    name: "Ahmed Raza",
    role: "CEO, Elite Certification",
    initials: "AR",
  },
];

function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>What clients <span className="text-gradient-brand">say</span>.</>}
          subtitle="Real feedback from businesses I've helped grow."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...stagger(i)}
              className="bento p-6 flex flex-col gap-4 relative"
            >
              <Quote className="text-primary/40" size={28} />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-sm font-semibold text-foreground">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── CONTACT ─────────────────────────────── */

function ContactSection() {
  const whatsappLink =
    "https://wa.me/923096169298?text=Hi%20Moin%2C%20I%20want%20to%20discuss%20an%20SEO%20project.";

  return (
    <section id="contact" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="relative rounded-[2rem] overflow-hidden border border-primary/30 p-10 md:p-16 text-center">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/25 via-background to-accent/15" />
          <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

          <p className="text-xs uppercase tracking-[0.2em] text-accent">Get in touch</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
            Let's build your
            <br />
            <span className="text-gradient-brand">next growth chapter.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Have a project in mind? I reply within 24 hours. Free 30-minute audit
            call for qualified inquiries.
          </p>




          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-left">
            {[
              {
                label: "WhatsApp (PAK)",
                value: "+92 309 6169298",
                href: whatsappLink,
                brand: "bg-emerald-500/15",
                svg: (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="#10b981" aria-hidden>
                    <path d="M20 15.5c-1.2 0-2.5-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.4-.5-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.4c0-.6-.4-1-1-1z" />
                  </svg>
                ),
              },
              {
                label: "WhatsApp (KSA)",
                value: "+966 54 690 4384",
                href: "https://wa.me/966546904384?text=Hi%20Moin%2C%20I%20want%20to%20discuss%20an%20SEO%20project.",
                brand: "bg-emerald-500/15",
                svg: (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="#10b981" aria-hidden>
                    <path d="M20 15.5c-1.2 0-2.5-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.4-.5-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.4c0-.6-.4-1-1-1z" />
                  </svg>
                ),
              },
              {
                label: "Gmail",
                value: "moinseoagency@gmail.com",
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=moinseoagency@gmail.com&su=SEO%20Project%20Inquiry",
                external: true,
                brand: "bg-red-500/10",
                svg: (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" aria-hidden>
                    <path fill="#4285F4" d="M22 5.5v13c0 .8-.7 1.5-1.5 1.5H18V9.4l-6 4.5-6-4.5V20H3.5C2.7 20 2 19.3 2 18.5v-13c0-.8.7-1.5 1.5-1.5H4l8 6 8-6h.5c.8 0 1.5.7 1.5 1.5z" />
                    <path fill="#34A853" d="M6 20V9.4L2 6.5v12c0 .8.7 1.5 1.5 1.5H6z" />
                    <path fill="#FBBC04" d="M18 20h2.5c.8 0 1.5-.7 1.5-1.5v-12l-4 2.9V20z" />
                    <path fill="#EA4335" d="M6 9.4L2 6.5V5.5c0-.8.7-1.5 1.5-1.5H4l8 6 8-6h.5c.8 0 1.5.7 1.5 1.5v1l-4 2.9-6 4.5-6-4.5z" />
                    <path fill="#C5221F" d="M6 9.4v.1L12 14l6-4.5v-.1l-6 4.5z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                value: "moin-sultan-seo",
                href: "https://www.linkedin.com/in/moin-sultan-seo",
                brand: "bg-sky-500/15",
                svg: (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="#0A66C2" aria-hidden>
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11-.01-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                ),
              },
            ].map(({ label, value, href, brand, svg }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/30 backdrop-blur-md px-3 py-2 hover:border-primary/50 transition-all">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${brand}`}>
                  {svg}
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground leading-none">{label}</p>
                  <p className="text-xs font-medium text-foreground truncate max-w-[180px]">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── FOOTER ─────────────────────────────── */

function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground text-center">
        <p>Made with <span className="text-red-500">♥</span> by Moin Sultan</p>
        <p>© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ─────────────────────────────── SECTION HEADER ─────────────────────────────── */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div {...fadeUp} className={center ? "text-center" : "max-w-3xl"}>
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="w-8 hairline" />
        <p className="text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      </div>
      <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-muted-foreground text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
