import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/_authenticated/app/verifier")({
  head: () => ({ meta: [{ title: "Email Verifier — LeadPilot" }] }),
  component: () => (
    <AppShell title="Email Verifier">
      <div className="max-w-2xl bento p-12 text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-4">
          <ShieldCheck size={28} className="text-accent" />
        </div>
        <h3 className="font-display text-2xl mb-2">Email Verifier</h3>
        <p className="text-muted-foreground">Phase 2 me aayega — single + bulk CSV verification.</p>
      </div>
    </AppShell>
  ),
});
