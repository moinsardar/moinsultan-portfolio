import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Search, ShieldCheck, Send, Users, CreditCard, Settings, LogOut, Zap, Menu, X, Sparkles,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const nav = [
  { to: "/app", label: "Dashboard", icon: Sparkles, exact: true },
  { to: "/app/finder", label: "Email Finder", icon: Search },
  { to: "/app/verifier", label: "Verifier", icon: ShieldCheck },
  { to: "/app/campaigns", label: "Campaigns", icon: Send },
  { to: "/app/leads", label: "Leads", icon: Users },
  { to: "/app/billing", label: "Billing", icon: CreditCard },
  { to: "/app/settings", label: "Settings", icon: Settings },
] as const;

export function AppShell({ title, children }: { title: string; children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => setMobileOpen(false), [location.pathname]);

  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return null;
      const { data } = await supabase
        .from("profiles")
        .select("email, full_name, plan, credits_remaining, avatar_url")
        .eq("id", userData.user.id)
        .maybeSingle();
      return data;
    },
  });

  const handleSignOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    toast.success("Signed out");
    navigate({ to: "/auth", replace: true });
  };

  const isActive = (to: string, exact?: boolean) =>
    exact ? location.pathname === to : location.pathname === to || location.pathname.startsWith(to + "/");

  return (
    <div className="min-h-screen flex">
      <div className="fixed inset-0 pointer-events-none grid-bg opacity-20" aria-hidden />

      {/* Sidebar - desktop */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-border bg-card/30 backdrop-blur-xl fixed inset-y-0 z-30">
        <SidebarInner profile={profile} onSignOut={handleSignOut} isActive={isActive} />
      </aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="relative w-72 bg-card/95 backdrop-blur-xl border-r border-border flex flex-col">
            <SidebarInner profile={profile} onSignOut={handleSignOut} isActive={isActive} />
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 lg:ml-64 flex flex-col min-w-0">
        <header className="sticky top-0 z-20 h-16 border-b border-border bg-background/70 backdrop-blur-xl flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-card/50"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
            <h1 className="font-display text-xl md:text-2xl font-bold">{title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs">
              <Zap size={12} className="text-accent" />
              <span className="font-medium">{profile?.credits_remaining ?? "…"} credits</span>
            </div>
            <Link
              to="/app/billing"
              className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition"
            >
              Upgrade
            </Link>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8 relative">{children}</main>
      </div>
    </div>
  );
}

function SidebarInner({
  profile,
  onSignOut,
  isActive,
}: {
  profile: { email?: string; full_name?: string | null; plan?: string; credits_remaining?: number; avatar_url?: string | null } | null | undefined;
  onSignOut: () => void;
  isActive: (to: string, exact?: boolean) => boolean;
}) {
  return (
    <>
      <div className="h-16 flex items-center justify-between px-6 border-b border-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
            <Zap size={16} className="text-white" />
          </div>
          <span className="font-display text-lg font-bold">LeadPilot</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {nav.map((item) => {
          const active = isActive(item.to, item.exact);
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active
                  ? "bg-primary/15 text-foreground border border-primary/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/50"
              }`}
            >
              <Icon size={16} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border space-y-3">
        <div className="rounded-xl bg-card/40 border border-border p-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-sm overflow-hidden">
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt="" className="w-full h-full object-cover" />
              ) : (
                (profile?.full_name?.[0] ?? profile?.email?.[0] ?? "?").toUpperCase()
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{profile?.full_name || profile?.email?.split("@")[0] || "User"}</p>
              <p className="text-xs text-muted-foreground truncate capitalize">{profile?.plan ?? "free"} plan</p>
            </div>
          </div>
        </div>
        <button
          onClick={onSignOut}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-card/50 transition"
        >
          <LogOut size={16} />
          Sign out
        </button>
      </div>
    </>
  );
}
