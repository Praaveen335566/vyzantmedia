"use client";

import { motion, type Variants } from "framer-motion";
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
} from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 section-padding py-5"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3">
          <Link href="/" className="font-heading text-xl font-bold tracking-tight">
            Vyzant<span className="text-[#ff6b35]">media</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Automation", "Case Studies", "Blog"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="rounded-full bg-[#ff6b35] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#ff6b35]/90 transition-all hover:scale-105"
          >
            Book Free Audit
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative section-padding pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div variants={fadeUp} custom={0} className="mb-6 flex gap-3">
                <span className="pill-orange">Performance Marketing</span>
                <span className="pill-blue">Agentic AI</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
              >
                Replace Your{" "}
                <span className="text-gradient-orange">Marketing Team</span>
                <br />
                With <span className="text-gradient-blue">AI Agents</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-8 text-lg md:text-xl text-white/50 max-w-lg leading-relaxed"
              >
                5 years of performance marketing expertise meets Agentic AI and n8n automation. We build autonomous systems that run Google Ads, Meta Ads, and UGC creative — while you sleep.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#ff6b35] px-8 py-4 text-base font-semibold hover:bg-[#ff6b35]/90 transition-all hover:scale-105"
                >
                  Book Free Audit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#automation"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold hover:bg-white/10 transition-all"
                >
                  See Automation Stack
                </Link>
              </motion.div>
            </div>

            {/* Hero Visual - Automation Stack Preview */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/10 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-white/40">vyzant_automation.n8n</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Client Intake", status: "Active", color: "bg-green-500" },
                    { label: "AI Research Agent", status: "Running", color: "bg-blue-500" },
                    { label: "Creative Generation", status: "Queued", color: "bg-yellow-500" },
                    { label: "Campaign Builder", status: "Standby", color: "bg-white/20" },
                    { label: "Performance Monitor", status: "Active", color: "bg-green-500" },
                  ].map((item, i) => (
                    <div key={item.label} className="flex items-center justify-between rounded-xl bg-white/5 p-3 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className={`h-2 w-2 rounded-full ${item.color}`} />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      <span className="text-xs text-white/40">{item.status}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl bg-[#ff6b35]/10 border border-[#ff6b35]/20 p-3">
                  <div className="flex items-center gap-2">
                    <Bot className="h-4 w-4 text-[#ff6b35]" />
                    <span className="text-sm font-medium text-[#ff6b35]">Agent Status: 15 hrs saved this week</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="section-padding py-12 border-y border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "35%", label: "CPL Reduction", sub: "Within 60 days" },
            { value: "30%+", label: "ROI Improvement", sub: "Across campaigns" },
            { value: "15hrs", label: "Weekly Saved", sub: "Via automation" },
            { value: "₹4.2Cr+", label: "Ad Spend Managed", sub: "Last 12 months" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i}
              className="text-center"
            >
              <div className="font-heading text-4xl md:text-5xl font-bold text-gradient-orange">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-white/80">{stat.label}</div>
              <div className="text-xs text-white/40">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-16">
            <span className="pill-orange mb-4 inline-block">What We Deliver</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold max-w-xl">
              Services Built for Scale
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Google Ads Automation",
                desc: "Autonomous campaign management with AI-driven bidding, keyword expansion, and real-time budget reallocation.",
                color: "text-[#ff6b35]",
                bg: "bg-[#ff6b35]/10",
              },
              {
                icon: Zap,
                title: "Meta Ads Automation",
                desc: "AI agents for audience research, creative testing, and automated scaling — from intake to launch.",
                color: "text-[#4a90ff]",
                bg: "bg-[#4a90ff]/10",
              },
              {
                icon: Layers,
                title: "UGC Creative Automation",
                desc: "Persona-centric content generation with sentiment analysis. AI drafts, you approve, we scale.",
                color: "text-[#22c55e]",
                bg: "bg-[#22c55e]/10",
              },
              {
                icon: BarChart3,
                title: "Funnel Architecture",
                desc: "High-converting landing pages, upsell flows, and checkout optimization for maximum AOV.",
                color: "text-[#a855f7]",
                bg: "bg-[#a855f7]/10",
              },
              {
                icon: TrendingUp,
                title: "Tracking & Attribution",
                desc: "Server-side GTM, GA4, Consent Mode v2, and multi-touch attribution that actually works.",
                color: "text-[#f59e0b]",
                bg: "bg-[#f59e0b]/10",
              },
              {
                icon: Workflow,
                title: "Analytics & Dashboards",
                desc: "Custom Looker Studio dashboards and real-time reporting so you always know your numbers.",
                color: "text-[#ec4899]",
                bg: "bg-[#ec4899]/10",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i + 1}
                whileHover={{ y: -4 }}
                className="card-dark p-8 hover:border-white/20 transition-all group"
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.bg} ${service.color} mb-6`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-[#ff6b35] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Automation Stack Section */}
      <section id="automation" className="section-padding py-24 bg-[#080808]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-16 text-center">
            <span className="pill-blue mb-4 inline-block">The Stack</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              How The Automation Works
            </h2>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto">
              From client intake to campaign launch to performance monitoring — fully autonomous.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Client Intake",
                desc: "Tally form → n8n webhook → Notion page created automatically",
                tools: "Tally, n8n, Notion",
              },
              {
                step: "02",
                title: "AI Research",
                desc: "CrewAI agents analyze competitors, audience, and craft strategy docs",
                tools: "CrewAI, Claude API, Python",
              },
              {
                step: "03",
                title: "Creative Generation",
                desc: "AI generates copy variants + visual concepts. Human approval gate.",
                tools: "Claude, Midjourney, Canva",
              },
              {
                step: "04",
                title: "Campaign Launch",
                desc: "Auto-build campaigns via Meta/Google APIs with pre-set audiences",
                tools: "Meta API, Google Ads API",
              },
              {
                step: "05",
                title: "Performance Monitor",
                desc: "Anomaly detection, creative fatigue alerts, auto-scaling winners",
                tools: "n8n, Slack, Looker Studio",
              },
              {
                step: "06",
                title: "Auto-Reporting",
                desc: "Weekly PDF reports + live client dashboard via Claude + n8n",
                tools: "Claude, n8n, Gmail",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                custom={i + 1}
                className="card-dark p-6 relative overflow-hidden group hover:border-[#ff6b35]/30 transition-all"
              >
                <span className="absolute top-4 right-4 font-heading text-5xl font-bold text-white/5 group-hover:text-[#ff6b35]/10 transition-colors">
                  {item.step}
                </span>
                <div className="pill-green text-xs mb-4 inline-block">{item.tools}</div>
                <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="section-padding py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-16">
            <span className="pill-orange mb-4 inline-block">Selected Works</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Results That Speak
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                client: "D2C Skincare Brand",
                industry: "Beauty & Personal Care",
                result: "6.2x ROAS",
                metric: "From 1.8x to 6.2x in 90 days",
                tags: ["Meta Ads", "Funnel Rebuild", "Tracking"],
                color: "from-[#ff6b35] to-[#f7931e]",
              },
              {
                client: "Real Estate Developer",
                industry: "Real Estate",
                result: "35% CPL ↓",
                metric: "CPL reduced from ₹420 to ₹145",
                tags: ["Google Ads", "Automation", "CRM"],
                color: "from-[#4a90ff] to-[#6b8cff]",
              },
            ].map((study, i) => (
              <motion.div
                key={study.client}
                variants={fadeUp}
                custom={i + 1}
                className="card-dark p-8 relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${study.color}`} />
                <div className="flex items-center gap-3 mb-4">
                  {study.tags.map((tag) => (
                    <span key={tag} className="pill-blue text-xs">{tag}</span>
                  ))}
                </div>
                <h3 className="font-heading text-2xl font-bold mb-1">{study.client}</h3>
                <p className="text-white/40 text-sm mb-6">{study.industry}</p>
                
                <div className="flex items-end gap-4">
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Result</p>
                    <p className={`font-heading text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${study.color}`}>
                      {study.result}
                    </p>
                  </div>
                  <p className="text-white/60 text-sm pb-2">{study.metric}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-12 md:p-16 text-center border border-white/10"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4a90ff]/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
                Ready to <span className="text-gradient-orange">Automate</span>?
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
                Book a free 30-minute audit. We'll map your current setup and show you exactly where AI agents can replace manual work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="mailto:vyzantmarketing@gmail.com?subject=Free%20Audit%20Request"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#ff6b35] px-10 py-4 text-base font-semibold hover:bg-[#ff6b35]/90 transition-all hover:scale-105"
                >
                  Book Free Audit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#automation"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-10 py-4 text-base font-semibold hover:bg-white/10 transition-all"
                >
                  Explore Stack
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="section-padding py-16 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <Link href="/" className="font-heading text-2xl font-bold">
                Vyzant<span className="text-[#ff6b35]">media</span>
              </Link>
              <p className="mt-4 text-white/50 max-w-sm leading-relaxed">
                Performance marketing agency powered by Agentic AI and n8n automation. Based in New Delhi, working with clients worldwide.
              </p>
              <div className="mt-6 flex flex-col gap-2 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  vyzantmarketing@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +91-9942157338
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  New Delhi, India
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-3">
                {["Google Ads Automation", "Meta Ads Automation", "UGC Creative", "Funnel Architecture", "Tracking & Attribution"].map((item) => (
                  <li key={item}>
                    <span className="text-sm text-white/50 hover:text-[#ff6b35] transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3">
                {[
                  { label: "About", href: "#" },
                  { label: "Case Studies", href: "#case-studies" },
                  { label: "Blog", href: "#" },
                  { label: "Prompt Library", href: "#" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-white/50 hover:text-[#ff6b35] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Vyzantmedia. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}