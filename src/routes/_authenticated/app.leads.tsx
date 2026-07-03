import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Users } from "lucide-react";

export const Route = createFileRoute("/_authenticated/app/leads")({
  head: () => ({ meta: [{ title: "Leads — LeadPilot" }] }),
  component: () => (
    <AppShell title="Leads">
      <div className="max-w-2xl bento p-12 text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-pink-500/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-4">
          <Users size={28} className="text-accent" />
        </div>
        <h3 className="font-display text-2xl mb-2">Leads & Lists</h3>
        <p className="text-muted-foreground">Phase 3 me aayega — leads CRUD, CSV import/export, lists.</p>
      </div>
    </AppShell>
  ),
});
