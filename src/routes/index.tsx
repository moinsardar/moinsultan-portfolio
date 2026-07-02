import { createFileRoute } from "@tanstack/react-router";
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
  ArrowRight,
  Code2,
  Linkedin,
  Download,
} from "lucide-react";
import portraitAsset from "@/assets/moin-portrait.jpg.asset.json";
const portrait = portraitAsset.url;
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import norwestBefore from "@/assets/norwest-before.jpg.asset.json";
import norwestAfter from "@/assets/norwest-after.jpg.asset.json";
import starprinters from "@/assets/starprinters.jpg.asset.json";
import rskillpilot from "@/assets/rskillpilot.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "7+", label: "Technical Skills" },
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Satisfied Clients" },
];

const services = [
  {
    icon: Search,
    title: "On-Page SEO",
    desc: "Keyword research, meta optimization, content structure and internal linking to make every page rank-ready and user-friendly.",
  },
  {
    icon: Link2,
    title: "Off-Page SEO & Backlinks",
    desc: "High-authority backlink building, guest posting, and outreach that boosts domain authority the safe, white-hat way.",
  },
  {
    icon: Zap,
    title: "Technical SEO",
    desc: "Site audits, Core Web Vitals, schema markup, crawl and indexing fixes so search engines love your website.",
  },
  {
    icon: TrendingUp,
    title: "Local & Google Business SEO",
    desc: "Rank in your city with optimized GMB profiles, local citations, and location-targeted keyword strategy.",
  },
  {
    icon: FileText,
    title: "SEO Content Writing",
    desc: "SEO-friendly blogs, service pages and product descriptions crafted to rank and convert real customers.",
  },
  {
    icon: BarChart3,
    title: "SEO Audit & Reporting",
    desc: "Detailed monthly reports with keyword rankings, traffic growth, and next-step recommendations — full transparency.",
  },
  {
    icon: Code2,
    title: "WordPress Development",
    desc: "Custom WordPress websites — fast, SEO-optimized, secure, and easy to manage. Elementor, WooCommerce, and custom themes.",
  },
];

const skills = [
  "WordPress",
  "Elementor",
  "WooCommerce",
  "Google Analytics",
  "Search Console",
  "Ahrefs",
  "SEMrush",
  "Yoast SEO",
  "Rank Math",
  "Screaming Frog",
];

const projects = [
  {
    image: project1,
    category: "WordPress Development",
    title: "Induction Portal UK",
    desc: "Professional fire risk assessment website helping businesses across the UK stay safe and compliant.",
    tags: ["WordPress", "PHP", "Custom Theme", "SEO"],
  },
  {
    image: project2,
    category: "WordPress Development",
    title: "Destination Royale",
    desc: "Luxury real estate website showcasing premium properties across the UAE with elegant design and clear details.",
    tags: ["Custom Post Type", "WordPress", "PHP", "SEO"],
  },
  {
    image: project3,
    category: "WooCommerce",
    title: "Dezele Beauty Salon",
    desc: "A beauty salon website offering professional services with a clean, modern, and easy-to-book experience.",
    tags: ["WordPress", "UI/UX", "Payment Integration"],
  },
];

const caseStudies = [
  {
    beforeImage: norwestBefore.url,
    afterImage: norwestAfter.url,
    site: "norwestcosmeticsurgery.com.au",
    title: "Norwest Cosmetic Surgery",
    summary:
      "Full SEO campaign for an Australian cosmetic surgery clinic — technical fixes, content strategy, and AI Search optimization more than doubled organic traffic in a few months.",
    metrics: [
      { label: "Organic Traffic", before: "66", after: "670", change: "+102%" },
      { label: "Organic Keywords", before: "243", after: "600", change: "+9.1%" },
      { label: "AI Visibility", before: "0", after: "27", change: "New" },
      { label: "Traffic Share (US)", before: "0%", after: "22%", change: "+22pt" },
    ],
    tags: ["Semrush", "Technical SEO", "AI Search"],
  },
  {
    afterImage: starprinters.url,
    site: "starprinters.co.uk",
    title: "Star Printers UK",
    summary:
      "Ongoing SEO for a UK print business — Google Search Console shows steady clicks and impressions across a 3-month window, with average position improving to 16.8.",
    metrics: [
      { label: "Total Clicks", before: "~0", after: "903", change: "New Traffic" },
      { label: "Impressions", before: "Low", after: "63.5K", change: "Massive Reach" },
      { label: "Avg. CTR", before: "—", after: "1.4%", change: "Baseline set" },
      { label: "Avg. Position", before: "40+", after: "16.8", change: "Climbing" },
    ],
    tags: ["Google Search Console", "UK Market", "On-Page SEO"],
  },
  {
    afterImage: rskillpilot.url,
    site: "rskillpilot.com",
    title: "RSkill Pilot",
    summary:
      "Explosive growth campaign — clicks scaled from near zero to 158/day within a week, with a strong 17.3% CTR and Google position 8.5 across target keywords.",
    metrics: [
      { label: "Weekly Clicks", before: "~0", after: "13.9K", change: "🚀 Growth" },
      { label: "Impressions", before: "~0", after: "80.4K", change: "New Reach" },
      { label: "Avg. CTR", before: "—", after: "17.3%", change: "Excellent" },
      { label: "Avg. Position", before: "50+", after: "8.5", change: "Page 1" },
    ],
    tags: ["Google Search Console", "CTR Optimization", "Growth"],
  },
];


function Index() {
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg btn-glow">
              MS
            </span>
            <span className="font-semibold tracking-tight">Moin Sultan</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-foreground transition">Home</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#projects" className="hover:text-foreground transition">Projects</a>
            <a href="#case-studies" className="hover:text-foreground transition">Case Studies</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex btn-glow px-4 py-2 rounded-lg text-sm font-medium"
          >
            Hire Me
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative px-6 pt-16 pb-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(168,85,247,0.28), transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(103,232,249,0.14), transparent 55%), linear-gradient(180deg, #05010f 0%, #0a0518 50%, #05010f 100%)",
        }}
      >
        {/* faint code-monitor grid lines behind */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-6xl mx-auto rounded-3xl p-8 md:p-14 border border-[#a855f7]/30 bg-black/40 backdrop-blur-sm shadow-[0_0_80px_rgba(168,85,247,0.2)]">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/60 border border-border text-xs text-muted-foreground mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for new SEO projects
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-gradient">Moin Sultan.</span>
              </h1>
              <h2 className="mt-3 text-xl md:text-2xl font-semibold text-gradient">
                SEO SPECIALIST
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
                I help businesses rank higher on Google, drive qualified organic
                traffic, and turn visitors into customers. From technical audits
                to content strategy — I build SEO that actually moves the needle.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/923096169298"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium"
                >
                  Hire me <ArrowRight size={16} />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/60 transition text-sm"
                >
                  View Services
                </a>
              </div>
            </div>
            <div className="relative flex justify-center items-center py-10">
              {/* Outer purple glow */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-60 bg-gradient-to-br from-[#a855f7] via-[#7e22ce] to-[#4c1d95]" />



              {/* Portrait in glowing purple ring */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-[#a855f7] shadow-[0_0_80px_rgba(168,85,247,0.7),inset_0_0_60px_rgba(168,85,247,0.3)]">
                <img
                  src={portrait}
                  alt="Moin Sultan — SEO Specialist portrait"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-bold text-gradient">
                {s.value}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-20 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm text-accent font-medium tracking-wider uppercase">
              What I Do
            </p>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold">
              SEO Services that <span className="text-gradient">grow your traffic</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-neon p-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                  <s.icon className="text-accent" size={22} />
                </div>
                <h3 className="text-lg font-semibold text-gradient">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-20 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm text-accent font-medium tracking-wider uppercase">
              My Work
            </p>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              A selection of WordPress websites and SEO projects delivered for
              clients across different industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="card-neon overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden bg-secondary/50">
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.category} project preview`}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-accent font-medium tracking-wider uppercase">
                    {p.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES — Before & After */}
      <section id="case-studies" className="px-6 py-20 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm text-accent font-medium tracking-wider uppercase">
              SEO Case Studies
            </p>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold">
              Real <span className="text-gradient">Before &amp; After</span> Results
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Actual Semrush &amp; Google Search Console screenshots — see the
              metrics before I started, and where they are now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <article key={cs.title} className="card-neon overflow-hidden group flex flex-col">
                {cs.beforeImage && (
                  <div className="aspect-[4/3] overflow-hidden bg-secondary/50 relative border-b border-border/60">
                    <img
                      src={cs.beforeImage}
                      alt={`${cs.title} — SEO metrics before`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-black/70 border border-border/60 text-muted-foreground uppercase tracking-wider">
                      Before
                    </span>
                  </div>
                )}
                <div className="aspect-[4/3] overflow-hidden bg-secondary/50 relative">
                  <img
                    src={cs.afterImage}
                    alt={`${cs.title} — SEO metrics after`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r from-primary/80 to-accent/80 text-white uppercase tracking-wider shadow-lg">
                    After
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-accent font-medium tracking-wider uppercase">
                    SEO Case Study
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{cs.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{cs.site}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {cs.summary}
                  </p>

                  {/* Metrics */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {cs.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-lg border border-border/60 bg-secondary/30 p-2.5"
                      >
                        <p className="text-[9px] uppercase tracking-wider text-muted-foreground">
                          {m.label}
                        </p>
                        <div className="mt-1 flex items-baseline gap-1.5">
                          <span className="text-[11px] text-muted-foreground line-through">
                            {m.before}
                          </span>
                          <ArrowRight size={10} className="text-accent" />
                          <span className="text-sm font-bold text-gradient">
                            {m.after}
                          </span>
                        </div>
                        <p className="mt-0.5 text-[10px] text-accent font-medium">
                          {m.change}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {cs.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <p className="text-sm text-accent font-medium tracking-wider uppercase">
            About Me
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold">
            Passionate about <span className="text-gradient">organic growth</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed [animation-delay:100ms] animate-fade-in">
            I'm a <span className="text-foreground font-medium">Software Engineering graduate</span> with
            over three years of freelance experience working with clients from
            around the world. I've also spent time working on-site, where I gained
            hands-on experience collaborating with teams and managing real-world
            projects.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed [animation-delay:200ms] animate-fade-in">
            I'm passionate about creating clean, functional, and user-friendly
            websites that bring ideas to life. My strong communication skills help
            me understand exactly what clients need, turning their vision into
            something that looks great and performs even better.
          </p>
          <div className="mt-8 flex justify-center [animation-delay:300ms] animate-fade-in">
            <a
              href="/cv/moin-sultan-cv.pdf"
              download
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </section>


      {/* SKILLS */}
      <section id="skills" className="px-6 py-20 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-accent font-medium tracking-wider uppercase">
            Tools & Skills
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold">
            My <span className="text-gradient">SEO Stack</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="card-neon px-5 py-2 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative px-6 py-24 border-t border-[#e8b84a]/20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(232,184,74,0.18), transparent 60%), linear-gradient(180deg, #1a0f06 0%, #2a1a0a 50%, #12080a 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[radial-gradient(circle_at_50%_10%,#f5deb3_0%,transparent_40%)]" />
        <div className="relative max-w-5xl mx-auto rounded-3xl p-8 md:p-14 border border-[#e8b84a]/30 bg-black/30 backdrop-blur-sm shadow-[0_0_80px_rgba(232,184,74,0.15)]">
          <div className="grid md:grid-cols-[auto,1fr] gap-8 md:gap-12 items-center">
            <div className="mx-auto md:mx-0">
              <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden ring-4 ring-[#e8b84a]/70 shadow-[0_0_80px_rgba(232,184,74,0.55)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/15 via-transparent to-[#f5deb3]/15 pointer-events-none z-10" />
                <img
                  src={portrait}
                  alt="Moin Sultan — SEO Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold">
                Let's <span className="text-gradient">rank you higher</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Ready to grow your organic traffic? Hire me — reach out on WhatsApp,
                email, or LinkedIn and let's talk about your SEO goals.
              </p>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <a
              href="https://wa.me/923096169298"
              target="_blank"
              rel="noreferrer"
              className="card-neon p-5 flex items-center gap-3 text-left group"
            >
              <span className="w-10 h-10 rounded-full bg-green-500/15 text-green-400 flex items-center justify-center group-hover:scale-110 transition">
                <MessageCircle size={20} />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">WhatsApp · Primary</p>
                <p className="font-medium">0309-6169298</p>
              </div>
            </a>
            <a
              href="https://wa.me/920546904384"
              target="_blank"
              rel="noreferrer"
              className="card-neon p-5 flex items-center gap-3 text-left group"
            >
              <span className="w-10 h-10 rounded-full bg-green-500/15 text-green-400 flex items-center justify-center group-hover:scale-110 transition">
                <MessageCircle size={20} />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">WhatsApp · Secondary</p>
                <p className="font-medium">0546-904384</p>
              </div>
            </a>
            <a
              href="mailto:moinseoagency@gmail.com"
              className="card-neon p-5 flex items-center gap-3 text-left group"
            >
              <span className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center group-hover:scale-110 transition">
                <Mail size={20} />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-medium break-all">moinseoagency@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/moin-sultan-seo"
              target="_blank"
              rel="noreferrer"
              className="card-neon p-5 flex items-center gap-3 text-left group"
            >
              <span className="w-10 h-10 rounded-full bg-[#0A66C2]/20 text-[#4ea3ff] flex items-center justify-center group-hover:scale-110 transition">
                <Linkedin size={20} />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="font-medium">in/moin-sultan-seo</p>
              </div>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923096169298?text=Hi%20Moin%2C%20I%27d%20like%20to%20hire%20you%20for%20SEO."
              target="_blank"
              rel="noreferrer"
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium"
            >
              <MessageCircle size={18} /> Hire Me on WhatsApp
            </a>
            <a
              href="mailto:moinseoagency@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/60 transition"
            >
              <Mail size={18} /> Send Email
            </a>
          </div>
        </div>
      </section>


      <footer className="px-6 py-8 border-t border-border/50 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Moin Sultan · SEO Specialist. All rights reserved.
      </footer>
    </div>
  );
}
