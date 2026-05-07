import Navbar from "@/components/navbar";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper";

/* ─── DATA ─── */

const heroMetrics = [
  { value: "8.4x", label: "Avg ROAS" },
  { value: "₹4.2Cr", label: "Ad Spend Managed" },
  { value: "62%", label: "CPL Reduction" },
  { value: "40+", label: "Funnels Built" },
];

const services = [
  {
    title: "Paid Advertising",
    desc: "High-performance Meta, Google & YouTube ad campaigns engineered for ROAS, not vanity metrics.",
    icon: "📈",
  },
  {
    title: "Tracking & Attribution",
    desc: "Server-side tagging, CAPI, GA4 event architecture — so every rupee is accounted for.",
    icon: "🎯",
  },
  {
    title: "Funnel Architecture",
    desc: "End-to-end conversion funnels — landing pages, upsells, order bumps — built for scale.",
    icon: "🔧",
  },
  {
    title: "Shopify Tracking",
    desc: "Pixel-perfect Shopify tracking setups with server-side events, UTM flows, and purchase attribution.",
    icon: "🛒",
  },
  {
    title: "Automation & Workflows",
    desc: "Zapier, Make, and custom webhook workflows that eliminate manual work and reduce response time.",
    icon: "⚡",
  },
  {
    title: "Analytics & Dashboards",
    desc: "Custom Looker Studio & GA4 dashboards that give you clarity on what's actually driving revenue.",
    icon: "📊",
  },
];

const results = [
  { value: "8.4x", label: "Average ROAS", sub: "across all client accounts" },
  { value: "62%", label: "CPL Reduction", sub: "within the first 60 days" },
  {
    value: "3.1x",
    label: "Conversion Lift",
    sub: "after funnel architecture overhaul",
  },
  {
    value: "₹4.2Cr",
    label: "Ad Spend Managed",
    sub: "profitably across Meta & Google",
  },
];

const caseStudies = [
  {
    title: "D2C Skincare Brand",
    desc: "Scaled a Shopify D2C brand from ₹2L/mo to ₹18L/mo in ad spend while improving ROAS from 1.8x to 6.2x through funnel restructuring and server-side tracking.",
    before: [
      { label: "ROAS", value: "1.8x" },
      { label: "Monthly Spend", value: "₹2L" },
      { label: "CPL", value: "₹420" },
    ],
    after: [
      { label: "ROAS", value: "6.2x" },
      { label: "Monthly Spend", value: "₹18L" },
      { label: "CPL", value: "₹160" },
    ],
  },
  {
    title: "EdTech Lead Gen",
    desc: "Rebuilt the entire tracking and funnel stack for an EdTech company, cutting CPL by 58% and tripling qualified leads through better attribution and creative testing.",
    before: [
      { label: "CPL", value: "₹680" },
      { label: "Qualified Leads/mo", value: "120" },
      { label: "Conversion Rate", value: "2.1%" },
    ],
    after: [
      { label: "CPL", value: "₹285" },
      { label: "Qualified Leads/mo", value: "380" },
      { label: "Conversion Rate", value: "5.8%" },
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit",
    desc: "Deep-dive into your ad accounts, tracking, funnels, and analytics to identify leaks and quick wins.",
  },
  {
    step: "02",
    title: "Architecture",
    desc: "Design the conversion system — tracking stack, funnel flow, campaign structure, and attribution model.",
  },
  {
    step: "03",
    title: "Launch",
    desc: "Deploy campaigns, implement tracking, build funnels, and start driving qualified traffic.",
  },
  {
    step: "04",
    title: "Scale",
    desc: "Optimize based on real data. Scale spend on winners, kill losers, and compound growth week over week.",
  },
];

/* ─── GLASS CARD UTILITY ─── */
const glass =
  "rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl";
const glassHover =
  "hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-300";

/* ─── PAGE ─── */

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-6">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-br from-[#4F9EFF]/20 to-[#8B5CF6]/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <FadeUp>
            <span className="inline-block mb-6 rounded-full border border-white/[0.1] bg-white/[0.05] px-4 py-1.5 text-xs font-medium tracking-wide text-[#94A3B8] uppercase">
              Performance Marketing & Conversion Systems
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
              I Build{" "}
              <span className="bg-gradient-to-r from-[#4F9EFF] to-[#8B5CF6] bg-clip-text text-transparent">
                Conversion Systems
              </span>{" "}
              That Scale
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              From paid ads and server-side tracking to high-converting funnels
              and automation — I architect the entire performance marketing stack
              so you can scale profitably.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#book"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-[#4F9EFF] to-[#8B5CF6] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(79,158,255,0.3)] hover:shadow-[0_0_48px_rgba(79,158,255,0.5)] hover:scale-105 transition-all"
              >
                Book a Free Audit
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center rounded-full border border-white/[0.1] bg-white/[0.05] px-8 py-3.5 text-sm font-medium text-white hover:bg-white/[0.1] transition-all"
              >
                See Case Studies
              </a>
            </div>
          </FadeUp>

          {/* Metrics row */}
          <FadeUp delay={0.45}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
              {heroMetrics.map((m) => (
                <div
                  key={m.label}
                  className={`${glass} px-6 py-5 text-center`}
                >
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#4F9EFF] to-[#8B5CF6] bg-clip-text text-transparent">
                    {m.value}
                  </p>
                  <p className="mt-1 text-xs text-[#94A3B8] uppercase tracking-wider">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ━━━ SERVICES ━━━ */}
      <section id="services" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <p className="text-center text-xs font-medium tracking-widest uppercase text-[#4F9EFF] mb-3">
              What I Do
            </p>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">
              Services
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-[#94A3B8]">
              End-to-end performance marketing infrastructure — from the first
              click to the final conversion.
            </p>
          </FadeUp>

          <StaggerContainer className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div
                  className={`${glass} ${glassHover} group p-7 h-full flex flex-col`}
                >
                  <span className="text-3xl mb-4 block">{s.icon}</span>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#4F9EFF] transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ━━━ RESULTS ━━━ */}
      <section id="results" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <p className="text-center text-xs font-medium tracking-widest uppercase text-[#8B5CF6] mb-3">
              The Numbers
            </p>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">
              Results That Speak
            </h2>
          </FadeUp>

          <StaggerContainer className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r) => (
              <StaggerItem key={r.label}>
                <div
                  className={`${glass} ${glassHover} relative overflow-hidden p-7 text-center`}
                >
                  {/* Ambient glow */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-[#4F9EFF]/20 to-[#8B5CF6]/20 blur-[60px] pointer-events-none" />
                  <p className="relative text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#4F9EFF] to-[#8B5CF6] bg-clip-text text-transparent">
                    {r.value}
                  </p>
                  <p className="relative mt-2 text-sm font-semibold text-white">
                    {r.label}
                  </p>
                  <p className="relative mt-1 text-xs text-[#94A3B8]">
                    {r.sub}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ━━━ CASE STUDIES ━━━ */}
      <section id="case-studies" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <p className="text-center text-xs font-medium tracking-widest uppercase text-[#4F9EFF] mb-3">
              Proof of Work
            </p>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">
              Case Studies
            </h2>
          </FadeUp>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <FadeUp key={cs.title} delay={i * 0.15}>
                <div className={`${glass} ${glassHover} p-8`}>
                  <h3 className="text-xl font-bold text-white">{cs.title}</h3>
                  <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                    {cs.desc}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {/* Before */}
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                      <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-3">
                        Before
                      </p>
                      {cs.before.map((b) => (
                        <div key={b.label} className="mb-2 last:mb-0">
                          <p className="text-xs text-[#94A3B8]">{b.label}</p>
                          <p className="text-lg font-bold text-red-300">
                            {b.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* After */}
                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                      <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                        After
                      </p>
                      {cs.after.map((a) => (
                        <div key={a.label} className="mb-2 last:mb-0">
                          <p className="text-xs text-[#94A3B8]">{a.label}</p>
                          <p className="text-lg font-bold text-emerald-300">
                            {a.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ PROCESS ━━━ */}
      <section id="process" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <p className="text-center text-xs font-medium tracking-widest uppercase text-[#8B5CF6] mb-3">
              How It Works
            </p>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">
              The Process
            </h2>
          </FadeUp>

          <StaggerContainer className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => (
              <StaggerItem key={s.step}>
                <div
                  className={`${glass} ${glassHover} relative p-7 h-full flex flex-col`}
                >
                  <span className="text-5xl font-extrabold bg-gradient-to-b from-white/20 to-transparent bg-clip-text text-transparent leading-none">
                    {s.step}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section id="book" className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <div
              className={`${glass} relative overflow-hidden px-8 py-16 sm:px-16 text-center`}
            >
              {/* Big glow */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-br from-[#4F9EFF]/15 to-[#8B5CF6]/15 blur-[100px]" />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-[#4F9EFF] to-[#8B5CF6] bg-clip-text text-transparent">
                    Scale?
                  </span>
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-[#94A3B8]">
                  Book a free audit and I&apos;ll break down exactly where
                  you&apos;re leaking revenue — and how to fix it.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center rounded-full bg-gradient-to-r from-[#4F9EFF] to-[#8B5CF6] px-10 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(79,158,255,0.3)] hover:shadow-[0_0_60px_rgba(79,158,255,0.5)] hover:scale-105 transition-all"
                >
                  Book a Free Audit
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
      <footer className="border-t border-white/[0.06] py-12 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <a
            href="#"
            className="font-[var(--font-heading)] text-lg font-bold tracking-tight bg-gradient-to-r from-[#4F9EFF] to-[#8B5CF6] bg-clip-text text-transparent"
          >
            Vyzantmedia
          </a>
          <div className="flex items-center gap-6 text-sm text-[#94A3B8]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-[#64748B]">
            &copy; {new Date().getFullYear()} Vyzantmedia. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

/* footer nav links (duplicated here for the server component) */
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#process" },
];
