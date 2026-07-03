# Snov.io-Style SaaS — Build Plan

Full working SaaS tool with 4 core features + Stripe billing. Backend Lovable Cloud (Postgres + auth + server functions). 3rd party APIs handle heavy lifting (email data, verification, sending) — hum reseller model use kar rahe hain.

## Tech Stack
- **Frontend:** TanStack Start (already setup) + shadcn/ui + Tailwind
- **Backend:** Lovable Cloud (Postgres, Auth, server functions)
- **Payments:** Stripe (built-in Lovable Payments)
- **3rd Party APIs (aap ko accounts + API keys chahiye honge):**
  - **Hunter.io** — Email Finder (domain search, email finder)
  - **NeverBounce** or **ZeroBounce** — Email Verifier
  - **Resend** — Cold email sending (via Lovable connector)

## Cost Reality Check (aap ke liye)
Users ko service dene ke liye aap in APIs ko pay karenge:
- Hunter.io: ~$34/mo (500 searches) → aap credits me resell karo
- NeverBounce: $0.008/email verify
- Resend: $20/mo (50k emails)

Isliye credit system zaruri hai (Snov jaisa) — har action X credits kaatega, plan ke hisab se monthly credits milenge.

## Features Breakdown

### 1. Auth & Dashboard
- Email/password + Google login
- Protected dashboard `/app/*` route
- Sidebar: Finder, Verifier, Campaigns, Leads, Billing, Settings

### 2. Email Finder
- **Domain Search:** company.com daalo → sab emails milengi
- **Email Finder:** first name + last name + domain → specific email
- Har search me credits kaatein
- Results ko Lead me save karne ka button

### 3. Email Verifier
- Single email verify (real-time)
- Bulk CSV upload → background job → results download
- Status: valid / invalid / risky / catch-all

### 4. Cold Email Campaigns
- Campaign create karo (name, sender email)
- Sequence steps: Email 1 → wait X days → Email 2 → wait → Email 3
- Recipient list attach karo (leads se ya CSV se)
- Merge tags: `{{first_name}}`, `{{company}}`
- Cron-based scheduler emails bhejta hai
- Basic tracking: sent / opened / replied (pixel + reply detection)

### 5. Mini CRM
- Leads table: name, email, company, status, tags, source
- Lists (folders) me organize karo
- CSV import/export
- Search + filter

### 6. Stripe Billing
- 3 plans:
  - **Free:** 50 credits/mo, 1 campaign, 100 emails/mo
  - **Pro ($39/mo):** 1000 credits, 5 campaigns, 5k emails
  - **Business ($99/mo):** 5000 credits, unlimited campaigns, 25k emails
- Stripe checkout + customer portal
- Webhook → user plan update

## Database Schema (main tables)

```text
profiles         → user info, current_plan, credits_remaining
leads            → email, name, company, status, tags, list_id, user_id
lists            → name, user_id
campaigns        → name, status, sender_email, user_id
campaign_steps   → campaign_id, order, subject, body, wait_days
campaign_sends   → campaign_id, lead_id, step_order, status, sent_at, opened_at
verifications    → email, status, verified_at, user_id
searches         → type, query, results_json, credits_used, user_id
subscriptions    → stripe_customer_id, plan, status, current_period_end
credit_ledger    → user_id, delta, reason, created_at
```

All tables get RLS: har user sirf apna data dekh sakega.

## Build Phases (order me)

**Phase 1 — Foundation (start here)**
- Enable Lovable Cloud
- Auth (email/pw + Google)
- Dashboard layout + sidebar
- Profiles + credits schema

**Phase 2 — Email Finder + Verifier**
- Hunter.io + NeverBounce connectors setup (aap se API keys lunga)
- UI screens + server functions
- Credits deduction logic

**Phase 3 — CRM (Leads + Lists)**
- Leads table CRUD
- CSV import/export
- "Save to leads" from Finder results

**Phase 4 — Campaigns**
- Resend connector
- Campaign builder UI
- Sequence steps + merge tags
- Cron scheduler (pg_cron)
- Open tracking pixel

**Phase 5 — Stripe Billing**
- Enable Stripe Payments
- 3 pricing tiers + checkout
- Webhook → plan sync + monthly credit refill

**Phase 6 — Polish**
- Landing page + pricing page
- Onboarding flow
- Analytics dashboard (charts)

## Aap se kya chahiye
1. **API accounts banayein** (main setup me help karunga):
   - Hunter.io account
   - NeverBounce (ya ZeroBounce) account
   - Resend account
2. Har phase ke start me API keys mangunga (secure form me daloge)
3. Har phase test karke feedback do, phir agla start

## Time / Credits Estimate
Ye 6 phases hain — har phase ~15–25 messages lega (complexity depend). Pura MVP ~100+ messages. Chhote tukro me karenge taake tum test karte raho.

---

**Approve karo to Phase 1 (Cloud + Auth + Dashboard shell) se start karta hoon.**
