import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Search, ShieldCheck, Send, Users, Zap, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LeadPilot — Find, verify & reach leads on autopilot" },
      { name: "description", content: "All-in-one sales prospecting: email finder, verifier, cold email campaigns and lightweight CRM. Get 50 free credits." },
      { property: "og:title", content: "LeadPilot — Find, verify & reach leads on autopilot" },
      { property: "og:description", content: "Email finder, verifier, cold campaigns & CRM in one place. Start free." },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: Search, title: "Email Finder", desc: "Domain search + name-to-email. Find verified work emails in seconds." },
  { icon: ShieldCheck, title: "Email Verifier", desc: "Real-time single & bulk verification. Protect your sender reputation." },
  { icon: Send, title: "Cold Campaigns", desc: "Multi-step drip sequences with merge tags, scheduling & tracking." },
  { icon: Users, title: "Built-in CRM", desc: "Organize leads into lists, import CSVs, tag & filter — all in one place." },
];

const plans = [
  { name: "Free", price: 0, credits: "50", features: ["1 campaign", "100 emails/mo", "Basic verification"] },
  { name: "Pro", price: 39, credits: "1,000", popular: true, features: ["5 campaigns", "5,000 emails/mo", "CSV import/export", "Priority support"] },
  { name: "Business", price: 99, credits: "5,000", features: ["Unlimited campaigns", "25,000 emails/mo", "Team seats", "API access"] },
];

function Landing() {
  const [authed, setAuthed] = useState(false);
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setAuthed(!!data.session));
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none grid-bg opacity-30" aria-hidden />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
              <Zap size={18} className="text-white" />
            </div>
            <span className="font-display text-xl font-bold">LeadPilot</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
          </div>
          {authed ? (
            <Link to="/app" className="btn-primary text-sm py-2.5 px-5">Go to app <ArrowUpRight size={16} /></Link>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/auth" className="text-sm text-muted-foreground hover:text-foreground">Sign in</Link>
              <Link to="/auth" className="btn-primary text-sm py-2.5 px-5">Get started <ArrowUpRight size={16} /></Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero */}
      <section className="relative px-6 pt-20 pb-24 text-center max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur-md px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <Sparkles size={12} className="text-accent" />
            50 free credits · No credit card
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight mb-6">
            Find, verify & reach<br />
            <span className="text-gradient-brand">every lead that matters.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            The all-in-one sales prospecting platform. Email finder, verifier, cold email
            sequences and lightweight CRM — under one roof.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/auth" className="btn-primary">Start free <ArrowUpRight size={18} /></Link>
            <a href="#features" className="btn-ghost">See features</a>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-accent mb-3">Everything you need</p>
          <h2 className="font-display text-4xl md:text-5xl">One toolkit. Every step of outreach.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bento p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="font-display text-2xl mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-accent mb-3">Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl">Simple, credit-based pricing</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((p) => (
            <div key={p.name} className={`bento p-8 ${p.popular ? "border-primary/50 md:scale-105" : ""}`}>
              {p.popular && (
                <span className="inline-block text-[10px] uppercase tracking-wider bg-gradient-to-r from-primary to-accent text-white px-2 py-0.5 rounded-full mb-3">Most popular</span>
              )}
              <h3 className="font-display text-2xl">{p.name}</h3>
              <div className="mt-3 mb-1">
                <span className="font-display text-5xl font-bold">${p.price}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <p className="text-sm text-accent mb-6">{p.credits} credits/month</p>
              <ul className="space-y-2 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check size={14} className="text-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/auth"
                className={`block text-center py-2.5 rounded-full font-medium text-sm ${p.popular ? "bg-gradient-to-r from-primary to-accent text-white" : "border border-border bg-card/40 hover:bg-card/60"} transition`}
              >
                {p.price === 0 ? "Start free" : "Get started"}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <div className="bento p-12 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Ready to fill your pipeline?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              50 credits on the house. Sign up in seconds, no card required.
            </p>
            <Link to="/auth" className="btn-primary">Start free <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © 2026 LeadPilot. Built with ❤️ on Lovable.
      </footer>
    </div>
  );
}
