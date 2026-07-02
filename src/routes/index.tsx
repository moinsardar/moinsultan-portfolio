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
} from "lucide-react";
import portrait from "@/assets/moin-portrait.jpg";

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
];

const skills = [
  "Google Analytics",
  "Search Console",
  "Ahrefs",
  "SEMrush",
  "Yoast SEO",
  "Rank Math",
  "Screaming Frog",
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
      <section id="home" className="relative px-6 pt-16 pb-24">
        <div className="max-w-6xl mx-auto glow-border p-8 md:p-14">
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
            <div className="relative flex justify-center">
              <div className="absolute inset-0 rounded-full blur-3xl opacity-40 bg-gradient-to-br from-primary to-accent" />
              <img
                src={portrait}
                alt="Moin Sultan — SEO Specialist portrait"
                width={1024}
                height={1024}
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-2 border-primary/50 shadow-[0_0_60px_oklch(0.65_0.28_310/0.5)]"
              />
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

      {/* ABOUT */}
      <section id="about" className="px-6 py-20 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-accent font-medium tracking-wider uppercase">
            About Me
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold">
            Passionate about <span className="text-gradient">organic growth</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            I'm Moin Sultan, an SEO specialist with 3+ years of experience helping
            brands, startups and local businesses climb Google's rankings. My work
            combines technical precision, data-driven content strategy, and honest
            white-hat link building — no shortcuts, just sustainable growth.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I've delivered 50+ successful SEO campaigns for 30+ happy clients
            across e-commerce, service businesses and personal brands worldwide.
          </p>
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
      <section id="contact" className="px-6 py-24 border-t border-border/50">
        <div className="max-w-4xl mx-auto glow-border p-8 md:p-14 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Let's <span className="text-gradient">rank you higher</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Ready to grow your organic traffic? Reach out and let's talk about
            your SEO goals.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <a
              href="tel:+923096169298"
              className="card-neon p-5 flex items-center gap-3 text-left"
            >
              <Phone className="text-accent" size={20} />
              <div>
                <p className="text-xs text-muted-foreground">Primary</p>
                <p className="font-medium">0309-6169298</p>
              </div>
            </a>
            <a
              href="tel:+920546904384"
              className="card-neon p-5 flex items-center gap-3 text-left"
            >
              <Phone className="text-accent" size={20} />
              <div>
                <p className="text-xs text-muted-foreground">Secondary</p>
                <p className="font-medium">0546-904384</p>
              </div>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923096169298"
              target="_blank"
              rel="noreferrer"
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium"
            >
              <MessageCircle size={18} /> WhatsApp Me
            </a>
            <a
              href="mailto:hello@moinsultan.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/60 transition"
            >
              <Mail size={18} /> Email
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
