import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Search,
  TrendingUp,
  Link2,
  FileText,
  BarChart3,
  Zap,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
  Code2,
  Linkedin,
  Download,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";
import portraitAsset from "@/assets/moin-portrait.jpg.asset.json";
import norwestBefore from "@/assets/norwest-before.jpg.asset.json";
import norwestAfter from "@/assets/norwest-after.jpg.asset.json";
import starprinters from "@/assets/starprinters.jpg.asset.json";
import rskillpilot from "@/assets/rskillpilot.jpg.asset.json";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

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
];

const skills = [
  "WordPress", "Elementor", "WooCommerce", "Google Analytics", "Search Console",
  "Ahrefs", "SEMrush", "Yoast SEO", "Rank Math", "Screaming Frog",
];

const projects = [
  {
    image: project1,
    category: "WordPress Development",
    title: "Induction Portal UK",
    desc: "Fire risk assessment platform helping UK businesses stay compliant.",
    tags: ["WordPress", "PHP", "SEO"],
  },
  {
    image: project2,
    category: "WordPress Development",
    title: "Destination Royale",
    desc: "Luxury real estate showcasing premium properties across the UAE.",
    tags: ["Custom Post Type", "WordPress", "SEO"],
  },
  {
    image: project3,
    category: "WooCommerce",
    title: "Dezele Beauty Salon",
    desc: "Modern salon website with clean booking experience.",
    tags: ["WordPress", "UI/UX", "Payments"],
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
        <ContactSection />
      </main>

      <Footer />
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
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="relative w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-sm bg-gradient-to-br from-primary to-accent text-white shadow-glow">
            MS
          </span>
          <span className="font-display font-semibold tracking-tight text-foreground">Moin<span className="text-primary">.</span></span>
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
      </nav>
    </header>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -top-4 -right-4 rounded-2xl border border-border bg-card/90 backdrop-blur-md px-4 py-3 shadow-elev"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400/30 to-emerald-500/20 flex items-center justify-center">
                  <TrendingUp size={16} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Avg Growth</p>
                  <p className="font-display font-bold text-sm text-foreground">+215%</p>
                </div>
              </div>
            </motion.div>
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
              <a href="/cv/moin-sultan-cv.pdf" download className="btn-primary text-sm py-3">
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
          {projects.map((p, i) => (
            <motion.article key={p.title} {...stagger(i)} className="bento overflow-hidden group">
              <div className="bento-glow" />
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-accent">{p.category}</p>
                <h3 className="mt-2 font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2.5 py-1 rounded-full border border-border text-muted-foreground uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
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
          {caseStudies.map((cs, i) => (
            <motion.article key={cs.title} {...stagger(i)} className="bento overflow-hidden group flex flex-col">
              <div className="bento-glow" />
              {cs.beforeImage && (
                <div className="aspect-[4/3] overflow-hidden relative border-b border-border">
                  <img src={cs.beforeImage} alt={`${cs.title} before`} loading="lazy" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-black/70 border border-white/10 text-white/80 uppercase tracking-wider backdrop-blur-md">
                    Before
                  </span>
                </div>
              )}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={cs.afterImage} alt={`${cs.title} after`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white uppercase tracking-wider shadow-glow">
                  After
                </span>
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
          ))}
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

/* ─────────────────────────────── CONTACT ─────────────────────────────── */

function ContactSection() {
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

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/923096169298" target="_blank" rel="noreferrer" className="btn-primary">
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a href="mailto:moinseoagency@gmail.com" className="btn-ghost">
              <Mail size={18} /> Email me
            </a>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
            {[
              { icon: Phone, label: "Phone", value: "+92 309 6169298", href: "tel:+923096169298" },
              { icon: Mail, label: "Email", value: "moinseoagency@gmail.com", href: "mailto:moinseoagency@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "moin-sultan-seo", href: "https://www.linkedin.com/in/moin-sultan-seo" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl border border-border bg-card/40 backdrop-blur-md p-4 hover:border-primary/50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium text-foreground truncate">{value}</p>
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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 Moin Sultan. Crafted with care.</p>
        <p>SEO Specialist · WordPress Developer</p>
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
