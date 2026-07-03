import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Search, ShieldCheck, Send, Users, TrendingUp, Zap } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/app")({
  head: () => ({ meta: [{ title: "Dashboard — LeadPilot" }] }),
  component: DashboardPage,
});

function DashboardPage() {
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return null;
      const { data } = await supabase.from("profiles").select("*").eq("id", userData.user.id).maybeSingle();
      return data;
    },
  });

  const shortcuts = [
    { to: "/app/finder", icon: Search, label: "Find emails", desc: "Search by domain or name", color: "from-blue-500/20 to-primary/20" },
    { to: "/app/verifier", icon: ShieldCheck, label: "Verify emails", desc: "Check deliverability", color: "from-emerald-500/20 to-accent/20" },
    { to: "/app/campaigns", icon: Send, label: "Send campaign", desc: "Cold outreach sequences", color: "from-purple-500/20 to-primary/20" },
    { to: "/app/leads", icon: Users, label: "Manage leads", desc: "Import & organize", color: "from-pink-500/20 to-accent/20" },
  ] as const;

  return (
    <AppShell title="Dashboard">
      <div className="max-w-6xl">
        <div className="bento p-6 md:p-8 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="relative">
            <p className="text-sm text-muted-foreground mb-1">Welcome back</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              {profile?.full_name || profile?.email?.split("@")[0] || "there"} 👋
            </h2>
            <div className="flex flex-wrap gap-6">
              <Stat label="Credits" value={profile?.credits_remaining ?? "…"} icon={Zap} />
              <Stat label="Plan" value={(profile?.plan ?? "free").toString().toUpperCase()} icon={TrendingUp} />
            </div>
          </div>
        </div>

        <h3 className="font-display text-xl mb-4">Quick actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {shortcuts.map((s) => {
            const Icon = s.icon;
            return (
              <Link key={s.to} to={s.to} className="bento p-6 group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} border border-primary/20 flex items-center justify-center mb-4`}>
                  <Icon size={22} className="text-foreground" />
                </div>
                <h4 className="font-display text-lg mb-1 group-hover:text-primary transition">{s.label}</h4>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}

function Stat({ label, value, icon: Icon }: { label: string; value: React.ReactNode; icon: React.ComponentType<{ size?: number; className?: string }> }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
        <Icon size={16} className="text-accent" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="font-display text-lg font-bold">{value}</p>
      </div>
    </div>
  );
}
