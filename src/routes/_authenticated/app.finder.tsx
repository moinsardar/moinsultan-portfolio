import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Search } from "lucide-react";

export const Route = createFileRoute("/_authenticated/app/finder")({
  head: () => ({ meta: [{ title: "Email Finder — LeadPilot" }] }),
  component: () => (
    <AppShell title="Email Finder">
      <ComingSoon icon={Search} title="Email Finder" desc="Phase 2 me aayega — Hunter.io integration + domain search." />
    </AppShell>
  ),
});

function ComingSoon({ icon: Icon, title, desc }: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string; desc: string }) {
  return (
    <div className="max-w-2xl bento p-12 text-center">
      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-4">
        <Icon size={28} className="text-accent" />
      </div>
      <h3 className="font-display text-2xl mb-2">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
}
