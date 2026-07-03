import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/app/settings")({
  head: () => ({ meta: [{ title: "Settings — LeadPilot" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return null;
      const { data } = await supabase.from("profiles").select("*").eq("id", userData.user.id).maybeSingle();
      return data;
    },
  });

  return (
    <AppShell title="Settings">
      <div className="max-w-2xl bento p-6">
        <h3 className="font-display text-xl mb-4">Account</h3>
        <div className="space-y-3">
          <Row label="Email" value={profile?.email} />
          <Row label="Full name" value={profile?.full_name ?? "—"} />
          <Row label="Plan" value={(profile?.plan ?? "free").toString().toUpperCase()} />
          <Row label="Credits remaining" value={profile?.credits_remaining} />
        </div>
        <p className="text-xs text-muted-foreground mt-6">Profile editing aayega Phase 6 me.</p>
      </div>
    </AppShell>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between py-2 border-b border-border last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium">{value ?? "—"}</span>
    </div>
  );
}
