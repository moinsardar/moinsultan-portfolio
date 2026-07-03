import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Send } from "lucide-react";

export const Route = createFileRoute("/_authenticated/app/campaigns")({
  head: () => ({ meta: [{ title: "Campaigns — LeadPilot" }] }),
  component: () => (
    <AppShell title="Campaigns">
      <div className="max-w-2xl bento p-12 text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/20 to-primary/20 border border-primary/30 flex items-center justify-center mb-4">
          <Send size={28} className="text-accent" />
        </div>
        <h3 className="font-display text-2xl mb-2">Cold Email Campaigns</h3>
        <p className="text-muted-foreground">Phase 4 me aayega — drip sequences, scheduler, tracking.</p>
      </div>
    </AppShell>
  ),
});
