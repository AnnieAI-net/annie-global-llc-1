import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import heroForex from "@/assets/hero-forex.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Annie Global LLC — Forex traded by Annie AI",
        description:
          "Annie Global LLC deploys Annie AI to read global currency markets in real time — surfacing signals, sizing positions, and executing with disciplined precision.",
      },
      {
        property: "og:title",
        content: "Annie Global LLC — Forex traded by Annie AI",
      },
      {
        property: "og:description",
        content:
          "Annie Global LLC deploys Annie AI to trade global forex markets with disciplined precision.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Annie Global LLC — Forex traded by Annie AI",
      },
      {
        name: "twitter:description",
        content:
          "Annie Global LLC deploys Annie AI to trade global forex markets with disciplined precision.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-line bg-card/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a
            href="#top"
            className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground"
          >
            Annie Global LLC
          </a>
          <nav className="hidden items-center gap-8 text-[13px] font-medium text-inksoft md:flex">
            <a href="#platform" className="transition-colors hover:text-foreground">
              Platform
            </a>
            <a href="#annie-ai" className="transition-colors hover:text-foreground">
              Annie AI
            </a>
            <a href="#performance" className="transition-colors hover:text-foreground">
              Performance
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden text-[13px] font-medium text-inksoft transition-colors hover:text-foreground sm:inline"
            >
              {"\n"}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-brand"
            >
              Request access
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-10 pt-16 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand shadow-sm">
              <span className="size-1.5 rounded-full bg-accent" /> Powered by Annie AI
            </span>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,6vw,4.4rem)] font-semibold leading-[1.02] tracking-tight">
              Forex, traded by <span className="text-brand">intelligence</span>.
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-inksoft">
              Annie Global LLC deploys Annie AI to read global currency markets in real time —
              surfacing signals, sizing positions, and safeguarding capital with disciplined precision.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
              >
                Start trading with AI
              </a>
              <a
                href="#annie-ai"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-ink/30"
              >
                See how Annie AI works
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-inksoft">
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" /> 1:1 Risk:Reward Ratio
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" /> G10 liquid currency pairs
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" /> 100% Client Transparency
              </span>
            </div>
          </div>

          {/* HERO IMAGE PANEL */}
          <div className="lg:col-span-6">
            <div className="relative">
              <img
                src={heroForex}
                alt="Annie AI monitoring live EUR/USD price action"
                width={1200}
                height={900}
                className="w-full rounded-3xl shadow-[0_30px_60px_-30px_rgba(11,18,32,0.25)]"
              />
              {/* floating glass cards */}
              <div className="absolute -bottom-6 -left-4 w-56 rounded-2xl border border-white/70 bg-card/80 p-4 shadow-[0_20px_40px_-20px_rgba(11,18,32,0.35)] backdrop-blur-md sm:-left-8">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-inksoft">
                    EUR / USD
                  </span>
                  <span className="text-[11px] font-semibold text-brand">+0.42%</span>
                </div>
                <div className="mt-2 font-display text-2xl font-semibold tracking-tight">
                  1.0842
                </div>
                <div className="mt-3 h-10 rounded-lg bg-gradient-to-r from-accent/20 via-brand/25 to-accent/10" />
              </div>
              <div className="absolute -top-5 -right-3 w-40 rounded-2xl border border-white/70 bg-card/80 p-4 shadow-[0_20px_40px_-20px_rgba(11,18,32,0.35)] backdrop-blur-md sm:-right-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-inksoft">
                  AI confidence
                </div>
                <div className="mt-1 font-display text-xl font-semibold tracking-tight">&gt;82%</div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
                  <div className="h-full w-[94%] bg-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section id="platform" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-line bg-card p-7 shadow-[0_20px_50px_-30px_rgba(11,18,32,0.25)]">
            <div className="grid size-11 place-items-center rounded-xl bg-brand-soft font-display font-bold text-brand">
              01
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
              Signal detection
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-inksoft">
              Annie AI scans price action, order flow and macro data to flag high-probability
              forex setups before they mature.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-card p-7 shadow-[0_20px_50px_-30px_rgba(11,18,32,0.25)]">
            <div className="grid size-11 place-items-center rounded-xl bg-brand-soft font-display font-bold text-brand">
              02
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
              Risk-aware sizing
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-inksoft">
              Every position is sized against live volatility and your risk profile, capping
              exposure automatically.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-card p-7 shadow-[0_20px_50px_-30px_rgba(11,18,32,0.25)]">
            <div className="grid size-11 place-items-center rounded-xl bg-brand-soft font-display font-bold text-brand">
              03
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
              Risk Arbitrage
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-inksoft">
              Rules-based long and short entry and exit remove emotion and minimising risk, keeping strategy consistent across every session.
            </p>
          </div>
        </div>
      </section>

      {/* HOW ANNIE AI WORKS */}
      <section id="annie-ai" className="mx-auto max-w-7xl px-6 pb-4 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            Annie AI
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            One trading intelligence, three disciplines.
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-inksoft">
            Annie AI doesn't chase signals. It reads the market, places the order, and guards the
            position — a continuous loop running across every trading session.
          </p>
        </div>
      </section>

      {/* METRICS BAND */}
      <section id="performance" className="mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-10">
        <div className="grid gap-8 rounded-3xl bg-ink p-8 text-primary-foreground sm:grid-cols-4 sm:p-12">
          <div>
            <div className="font-display text-4xl font-semibold tracking-tight">G10</div>
            <div className="mt-1 text-[13px] text-primary-foreground/60">
              The most liquid currency pairs monitored
            </div>
          </div>
          <div>
            <div className="font-display text-4xl font-semibold tracking-tight">&gt;80%</div>
            <div className="mt-1 text-[13px] text-primary-foreground/60">
              Work on a profit probability of more than 80%
            </div>
          </div>
          <div>
            <div className="font-display text-4xl font-semibold tracking-tight">100%</div>
            <div className="mt-1 text-[13px] text-primary-foreground/60">
              100% Transparency with real time tracking
            </div>
          </div>
          <div>
            <div className="font-display text-4xl font-semibold tracking-tight">24/7</div>
            <div className="mt-1 text-[13px] text-primary-foreground/60">
              Global market coverage
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t border-line bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-inksoft">
                Contact
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Let&apos;s find your edge.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-7 text-inksoft">
                Whether you&apos;re running an institutional book or a private mandate, our
                specialists are ready to help.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  {
                    href: "mailto:anniegloballlc@gmail.com",
                    label: "Email",
                    value: "anniegloballlc@gmail.com",
                    icon: Mail,
                  },
                  {
                    href: "https://wa.me/13103101157",
                    label: "WhatsApp",
                    value: "@annieglobalofficial",
                    icon: MessageCircle,
                  },
                  {
                    href: "tel:+13103101157",
                    label: "Phone",
                    value: "+1 (310) 310-1157",
                    icon: Phone,
                  },
                ].map(({ href, label, value, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg border border-line bg-card p-3 transition-all duration-300 hover:border-foreground hover:shadow-sm"
                  >
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-md border border-input">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-inksoft">
                      {label}
                    </p>
                    <p className="mt-1 break-all text-[15px] leading-6 text-foreground">{value}</p>
                  </a>
                ))}
                <a
                  href="https://maps.google.com/?q=55+West,+47+Street,+New+York,+NY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg border border-line bg-card p-3 transition-all duration-300 hover:border-foreground hover:shadow-sm"
                >
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-md border border-input">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-inksoft">
                    OFFICE
                  </p>
                  <p className="mt-1 text-sm leading-5 text-foreground">
                    139 Millburn Avenue, Millburn, NJ 07041
                  </p>
                </a>
              </div>
            </div>
            <div className="flex h-full flex-col rounded-lg border border-line bg-card p-7 shadow-sm">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex h-full flex-col space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-foreground">
                      Name
                    </label>
                    <input
                      required
                      placeholder="Jane Doe"
                      className="w-full rounded-md border border-input bg-background px-4 py-3 outline-none transition focus:border-foreground"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full rounded-md border border-input bg-background px-4 py-3 outline-none transition focus:border-foreground"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-foreground">
                    Company
                  </label>
                  <input
                    placeholder="Company name"
                    className="w-full rounded-md border border-input bg-background px-4 py-3 outline-none transition focus:border-foreground"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-foreground">
                    Message
                  </label>
                  <textarea
                    required
                    placeholder="Describe your mandate — strategy, markets, size, timeline, or anything else our specialists should know."
                    className="h-full min-h-[260px] w-full resize-none rounded-md border border-input bg-background px-4 py-3 outline-none transition focus:border-foreground"
                  />
                </div>
                <div className="mt-auto pt-2">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-brand px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-accent disabled:opacity-50"
                  >
                    Send inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row lg:px-10">
          <a
            href="#top"
            className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground"
          >
            Annie Global LLC
          </a>
          <p className="text-[12px] text-inksoft">
            © 2025 Annie Global LLC. Trading involves risk. Annie AI is a decision-support tool.
          </p>
        </div>
      </footer>
    </div>
  );
}
