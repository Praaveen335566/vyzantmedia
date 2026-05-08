"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Target,
  BarChart3,
  Layers,
  TrendingUp,
  Bot,
  Workflow,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  X,
  Check,
  Sparkles,
  Video,
  Route,
  ChartBar,
  LayoutTemplate,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FAF8F5] text-[#0F1629] overflow-hidden">
      {/* Floating Gradient Orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full opacity-30 blur-[100px]"
          style={{ background: "radial-gradient(circle, #ff9f50 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-[40%] -right-[15%] h-[500px] w-[500px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "radial-gradient(circle, #4a90ff 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-[10%] left-[20%] h-[400px] w-[400px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "radial-gradient(circle, #ffd93d 0%, transparent 70%)" }}
        />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-50 section-padding py-5"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full bg-white/70 backdrop-blur-xl border border-white/60 px-6 py-3 shadow-sm">
          <Link href="/" className="font-heading text-xl font-bold tracking-tight">
            Vyzant<span className="text-[#ff6b35]">media</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Stack", "Case Studies", "Blog"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[#0F1629]/60 hover:text-[#0F1629] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="rounded-full bg-[#0F1629] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#0F1629]/90 transition-all hover:scale-105"
          >
            Book free audit →
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 section-padding pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} custom={0} className="mb-6 flex flex-wrap gap-3">
              <span className="pill-orange">AI-powered</span>
              <span className="pill-blue">n8n + CrewAI</span>
              <span className="pill-green">Google & Meta Ads</span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-sm text-[#0F1629]/40 italic mb-4"
            >
              "Most agencies charge ₹80K/month for work AI does in 4 hours."
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={2}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight max-w-4xl"
            >
              Replace 3 hires
              <br />
              with <span className="text-gradient">one AI stack.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="mt-6 text-lg text-[#0F1629]/50 max-w-xl leading-relaxed"
            >
              Autonomous systems that run Google Ads, Meta Ads, and UGC creative — from intake to launch to scaling. You approve. AI executes.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#ff6b35] px-8 py-4 text-base font-semibold text-white hover:bg-[#ff6b35]/90 transition-all hover:scale-105 shadow-lg shadow-orange-200"
              >
                Book free audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#automation"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F1629]/10 bg-white/80 px-8 py-4 text-base font-semibold hover:bg-white transition-all"
              >
                See automation stack
              </Link>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-0 rounded-2xl border border-[#0F1629]/8 overflow-hidden bg-white/50 backdrop-blur-sm"
            >
              {[
                { value: "4.2Cr", label: "Ad spend managed", sub: "↑ last 12 months", color: "text-[#0F1629]" },
                { value: "6.2x", label: "Best ROAS delivered", sub: "↑ D2C skincare client", color: "text-[#ff6b35]" },
                { value: "35%", label: "Avg CPL reduction", sub: "↓ within 60 days", color: "text-[#22c55e]" },
                { value: "15hrs", label: "Weekly time saved", sub: "↑ via automation", color: "text-[#4A90FF]" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-6 ${i < 3 ? 'border-r border-[#0F1629]/8' : ''} ${i < 2 ? 'border-b md:border-b-0 border-[#0F1629]/8' : ''}`}
                >
                  <div className={`font-heading text-3xl md:text-4xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-[#0F1629]/60">{stat.label}</div>
                  <div className="text-xs text-[#0F1629]/30 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="relative z-10 section-padding py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-12">
            <span className="pill-purple mb-4 inline-block">The real difference</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Without us vs <span className="text-gradient">with Vyzant</span>
            </h2>
            <p className="mt-4 text-[#0F1629]/50 max-w-lg">
              Most brands are paying 3× more and moving 5× slower than they need to.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Before */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="rounded-3xl bg-white/50 border border-[#0F1629]/5 p-8"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-[#0F1629]/20 mb-6">Without Vyzant</div>
              <div className="space-y-4">
                {[
                  "3 separate hires for ads, creative & reporting",
                  "Manual campaign checks every morning",
                  "Creative iterations take 2–3 weeks",
                  "Attribution blind spots across channels",
                  "₹80K+/month retainer with slow results",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <X className="h-3 w-3 text-red-500" />
                    </div>
                    <span className="text-sm text-[#0F1629]/50">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="rounded-3xl bg-[#ff6b35]/5 border border-[#ff6b35]/10 p-8"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-[#ff6b35] mb-6">With Vyzant</div>
              <div className="space-y-4">
                {[
                  "One AI stack handles all three functions",
                  "Anomaly detection + auto-scaling winners",
                  "New creatives drafted and ready in 24hrs",
                  "Server-side GTM + GA4 + multi-touch attribution",
                  "Performance-first pricing, no fluff retainers",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm text-[#0F1629]/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Wall of Wins */}
      <section className="relative z-10 section-padding py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-12">
            <span className="pill-green mb-4 inline-block">Wall of wins</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Results that <span className="text-gradient">speak</span>
            </h2>
            <p className="mt-4 text-[#0F1629]/50 max-w-lg">
              Real campaigns, real numbers — no cherry-picked outliers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                tag: "Meta Ads · D2C Skincare",
                client: "Beauty brand, 90 days",
                metric: "6.2x",
                sub: "ROAS · from 1.8x → 6.2x",
                color: "bg-[#4A90FF]",
              },
              {
                tag: "Google Ads · Real Estate",
                client: "Property developer",
                metric: "−35%",
                sub: "CPL · ₹420 → ₹145 per lead",
                color: "bg-[#ff6b35]",
              },
              {
                tag: "Automation · EdTech",
                client: "SaaS platform",
                metric: "15hrs",
                sub: "Saved weekly via n8n + CrewAI",
                color: "bg-[#22c55e]",
              },
            ].map((win, i) => (
              <motion.div
                key={win.tag}
                variants={fadeUp}
                custom={i + 1}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white p-8 border border-[#0F1629]/5 hover:shadow-xl transition-all"
              >
                <div className="text-xs text-[#0F1629]/30 uppercase tracking-wider mb-3">{win.tag}</div>
                <div className="text-sm text-[#0F1629]/60 font-medium mb-1">{win.client}</div>
                <div className={`font-heading text-5xl font-bold text-[#ff6b35] mt-4`}>
                  {win.metric}
                </div>
                <div className="text-xs text-[#0F1629]/40 mt-2">{win.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Automation Stack */}
      <section id="automation" className="relative z-10 section-padding py-20 bg-[#0F1629] text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 border border-white/10 mb-4">How it works</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              The <span className="text-[#ff6b35]">automation stack</span>
            </h2>
            <p className="mt-4 text-white/50 max-w-lg">
              Five steps. Fully autonomous. Human approval at every creative gate.
            </p>
          </motion.div>

          <div className="space-y-0">
            {[
              {
                step: "01",
                title: "Client intake",
                desc: "Tally form triggers an n8n webhook — a Notion project page is created automatically with all brief details populated.",
                tools: ["Tally", "n8n", "Notion"],
              },
              {
                step: "02",
                title: "AI research agent",
                desc: "CrewAI agents analyse competitors, audience signals, and craft full strategy docs — no human hours required.",
                tools: ["CrewAI", "Claude API", "Python"],
              },
              {
                step: "03",
                title: "Creative generation",
                desc: "AI generates copy variants and visual concepts. You review and approve — one click to move to launch.",
                tools: ["Claude", "Midjourney", "Canva API"],
              },
              {
                step: "04",
                title: "Campaign launch",
                desc: "Campaigns are built and published via Meta and Google Ads APIs with pre-set audiences, budgets, and bid strategies.",
                tools: ["Meta API", "Google Ads API"],
              },
              {
                step: "05",
                title: "Performance monitor",
                desc: "Anomaly detection, creative fatigue alerts, and auto-scaling of winning ad sets — reported live in Looker Studio.",
                tools: ["n8n", "Slack alerts", "Looker Studio"],
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                custom={i + 1}
                className="group flex items-start gap-6 py-6 border-b border-white/10 hover:bg-white/5 transition-all px-4 -mx-4 rounded-xl cursor-pointer"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center font-heading text-sm font-bold text-[#ff6b35]">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {item.tools.map((tool) => (
                      <span key={tool} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/50">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-white/20 group-hover:text-[#ff6b35] group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 section-padding py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-12">
            <span className="pill-orange mb-4 inline-block">Services</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Built for <span className="text-gradient">scale</span>
            </h2>
            <p className="mt-4 text-[#0F1629]/50 max-w-lg">
              Every service is wired into the same autonomous stack.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Target,
                title: "Google Ads automation",
                desc: "AI-driven bidding, keyword expansion, and real-time budget reallocation — fully autonomous.",
                color: "bg-[#ff6b35]",
              },
              {
                icon: Zap,
                title: "Meta Ads automation",
                desc: "Audience research, creative testing, and automated scaling from intake to launch.",
                color: "bg-[#4A90FF]",
              },
              {
                icon: Video,
                title: "UGC creative automation",
                desc: "Persona-centric content generation with sentiment analysis. AI drafts, you approve, we scale.",
                color: "bg-[#22c55e]",
              },
              {
                icon: LayoutTemplate,
                title: "Funnel architecture",
                desc: "High-converting landing pages, upsell flows, and checkout optimisation for maximum AOV.",
                color: "bg-[#a855f7]",
              },
              {
                icon: Route,
                title: "Tracking & attribution",
                desc: "Server-side GTM, GA4, Consent Mode v2, and multi-touch attribution that actually works.",
                color: "bg-[#f59e0b]",
              },
              {
                icon: ChartBar,
                title: "Analytics & dashboards",
                desc: "Custom Looker Studio dashboards and real-time reporting so you always know your numbers.",
                color: "bg-[#ec4899]",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i + 1}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white p-8 border border-[#0F1629]/5 hover:shadow-xl transition-all group"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.color} text-white mb-6`}>
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-[#ff6b35] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#0F1629]/50 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Founder */}
      <section className="relative z-10 section-padding py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-8">
            <span className="pill-purple mb-4 inline-block">Who's behind this</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Meet the <span className="text-gradient">founder</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            className="rounded-3xl bg-[#ff6b35]/5 border border-[#ff6b35]/10 p-8 md:p-10 flex gap-6 items-start"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center font-heading text-xl font-bold text-[#ff6b35]">
              P
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold mb-1">Praveen Kr Pandey</h3>
              <p className="text-sm text-[#ff6b35] mb-4">Performance marketer · AI automation builder · New Delhi</p>
              <p className="text-[#0F1629]/50 text-sm leading-relaxed max-w-xl">
                5 years running paid media for D2C, real estate, and EdTech brands across India. Built this AI stack because agencies were too slow, too expensive, and too manual. Now I run the same systems for clients that I built for myself.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 section-padding py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} custom={0}>
            <span className="pill-orange mb-6 inline-block">Ready to start?</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              Book your free <span className="text-gradient">30-min audit</span>
            </h2>
            <p className="text-[#0F1629]/50 max-w-md mx-auto mb-8">
              We'll map your current setup and show you exactly where AI agents can replace manual work — no pitch, just a teardown.
            </p>
            <Link
              href="mailto:vyzantmarketing@gmail.com?subject=Free%20Audit%20Request"
              className="group inline-flex items-center gap-2 rounded-full bg-[#ff6b35] px-10 py-4 text-base font-semibold text-white hover:bg-[#ff6b35]/90 transition-all hover:scale-105 shadow-lg shadow-orange-200"
            >
              Book free audit →
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-xs text-[#0F1629]/30 mt-4">
              Free · 30 minutes · No commitment · vyzantmarketing@gmail.com
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 section-padding py-16 bg-[#0F1629] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <Link href="/" className="font-heading text-xl font-bold">
                Vyzant<span className="text-[#ff6b35]">media</span>
              </Link>
              <p className="mt-4 text-white/40 text-sm leading-relaxed">
                Performance marketing agency powered by Agentic AI and n8n automation. Based in New Delhi, working with clients worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider mb-4 text-white/40">Services</h4>
              <ul className="space-y-3">
                {["Google Ads automation", "Meta Ads automation", "UGC creative", "Funnel architecture", "Tracking & attribution"].map((item) => (
                  <li key={item}>
                    <span className="text-sm text-white/40 hover:text-[#ff6b35] transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider mb-4 text-white/40">Company</h4>
              <ul className="space-y-3">
                {[
                  { label: "About", href: "#" },
                  { label: "Case studies", href: "#case-studies" },
                  { label: "Blog", href: "#" },
                  { label: "Prompt library", href: "#" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-white/40 hover:text-[#ff6b35] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <p className="text-xs text-white/20">
              © {new Date().getFullYear()} Vyzantmedia. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">Privacy policy</Link>
              <Link href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">Terms of service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}