import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { CreditCard, Check } from "lucide-react";

export const Route = createFileRoute("/_authenticated/app/billing")({
  head: () => ({ meta: [{ title: "Billing — LeadPilot" }] }),
  component: BillingPage,
});

const plans = [
  { name: "Free", price: 0, credits: 50, features: ["50 credits/mo", "1 campaign", "100 emails/mo", "Basic support"] },
  { name: "Pro", price: 39, credits: 1000, popular: true, features: ["1,000 credits/mo", "5 campaigns", "5,000 emails/mo", "CSV import/export", "Priority support"] },
  { name: "Business", price: 99, credits: 5000, features: ["5,000 credits/mo", "Unlimited campaigns", "25,000 emails/mo", "Team seats", "API access"] },
];

function BillingPage() {
  return (
    <AppShell title="Billing">
      <div className="max-w-5xl">
        <div className="bento p-6 mb-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
            <CreditCard size={22} className="text-accent" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Current plan</p>
            <p className="font-display text-xl">Free — 50 credits / month</p>
          </div>
        </div>

        <h3 className="font-display text-2xl mb-4">Upgrade your plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((p) => (
            <div key={p.name} className={`bento p-6 ${p.popular ? "border-primary/50" : ""}`}>
              {p.popular && (
                <span className="inline-block text-[10px] uppercase tracking-wider bg-gradient-to-r from-primary to-accent text-white px-2 py-0.5 rounded-full mb-3">Popular</span>
              )}
              <h4 className="font-display text-xl">{p.name}</h4>
              <div className="mt-2 mb-4">
                <span className="font-display text-4xl font-bold">${p.price}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-2 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check size={14} className="text-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                disabled
                className={`w-full py-2.5 rounded-full font-medium text-sm ${p.popular ? "bg-gradient-to-r from-primary to-accent text-white" : "border border-border bg-card/40"} opacity-60`}
              >
                {p.price === 0 ? "Current" : "Coming in Phase 5"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
