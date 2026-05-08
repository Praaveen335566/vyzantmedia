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
  Sparkles,
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
      {/* Floating Gradient Orbs - Niva Style */}
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
            {["Services", "Automation", "Case Studies", "Blog"].map((item) => (
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
            Book Free Audit
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section - Digitaly Style */}
      <section className="relative z-10 section-padding pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Top Badge Row */}
            <motion.div variants={fadeUp} custom={0} className="mb-8 flex flex-wrap gap-3">
              <span className="pill-orange">Performance Marketing</span>
              <span className="pill-blue">Agentic AI</span>
              <span className="pill-green">n8n Automation</span>
            </motion.div>

            {/* Main Headline - Digitaly Bold Style */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight max-w-4xl"
            >
              Replace Your{" "}
              <span className="text-gradient">Marketing</span>
              <br />
              Team With{" "}
              <span className="text-[#4A90FF]">AI Agents</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-8 text-lg md:text-xl text-[#0F1629]/50 max-w-xl leading-relaxed"
            >
              5 years of performance marketing expertise meets Agentic AI and n8n automation. We build autonomous systems that run Google Ads, Meta Ads, and UGC creative.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#ff6b35] px-8 py-4 text-base font-semibold text-white hover:bg-[#ff6b35]/90 transition-all hover:scale-105 shadow-lg shadow-orange-200"
              >
                Book Free Audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#automation"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F1629]/10 bg-white/80 px-8 py-4 text-base font-semibold hover:bg-white transition-all"
              >
                See Automation Stack
              </Link>
            </motion.div>

            {/* Hero Image / Visual - Digitaly Style Banner */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-16 relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] p-8 md:p-12">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b35]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4a90ff]/20 rounded-full blur-3xl" />
                
                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="h-5 w-5 text-[#ff6b35]" />
                      <span className="text-white/60 text-sm font-medium">Live Automation Dashboard</span>
                    </div>
                    <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                      Your Campaigns Run Themselves
                    </h3>
                    <p className="text-white/60 mb-6">
                      From client intake to creative generation to performance monitoring — fully autonomous.
                    </p>
                    <div className="flex gap-3">
                      <span className="pill-orange text-xs">CrewAI</span>
                      <span className="pill-blue text-xs">n8n</span>
                      <span className="pill-green text-xs">Claude API</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Client Intake", status: "Active", color: "bg-green-500" },
                      { label: "AI Research Agent", status: "Running", color: "bg-blue-500" },
                      { label: "Creative Generation", status: "Queued", color: "bg-yellow-500" },
                      { label: "Campaign Builder", status: "Standby", color: "bg-white/30" },
                      { label: "Performance Monitor", status: "Active", color: "bg-green-500" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between rounded-xl bg-white/10 backdrop-blur-sm p-3 border border-white/10">
                        <div className="flex items-center gap-3">
                          <div className={`h-2 w-2 rounded-full ${item.color}`} />
                          <span className="text-sm font-medium text-white">{item.label}</span>
                        </div>
                        <span className="text-xs text-white/50">{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar - Digitaly Large Numbers */}
      <section className="relative z-10 section-padding py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "35%", label: "CPL Reduced", sub: "Within 60 days" },
              { value: "30%+", label: "ROI Improved", sub: "Across campaigns" },
              { value: "15hrs", label: "Weekly Saved", sub: "Via AI automation" },
              { value: "4.2Cr", label: "Ad Spend Managed", sub: "Last 12 months" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <div className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F1629]">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-bold text-[#0F1629]/80 uppercase tracking-wider">{stat.label}</div>
                <div className="text-xs text-[#0F1629]/40 mt-1">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What We Deliver - Services */}
      <section id="services" className="relative z-10 section-padding py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-12 flex items-end justify-between">
            <div>
              <span className="pill-orange mb-4 inline-block">What We Deliver</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                Services Built<br />For Scale
              </h2>
            </div>
            <Link href="#contact" className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#ff6b35] hover:gap-3 transition-all">
              View All Services <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Target,
                title: "Google Ads Automation",
                desc: "Autonomous campaign management with AI-driven bidding, keyword expansion, and real-time budget reallocation.",
                color: "bg-[#ff6b35]",
                textColor: "text-white",
                bg: "bg-[#ff6b35]",
              },
              {
                icon: Zap,
                title: "Meta Ads Automation",
                desc: "AI agents for audience research, creative testing, and automated scaling — from intake to launch.",
                color: "bg-[#4A90FF]",
                textColor: "text-white",
                bg: "bg-[#4A90FF]",
              },
              {
                icon: Layers,
                title: "UGC Creative Automation",
                desc: "Persona-centric content generation with sentiment analysis. AI drafts, you approve, we scale.",
                color: "bg-[#22c55e]",
                textColor: "text-white",
                bg: "bg-[#22c55e]",
              },
              {
                icon: BarChart3,
                title: "Funnel Architecture",
                desc: "High-converting landing pages, upsell flows, and checkout optimization for maximum AOV.",
                color: "bg-[#a855f7]",
                textColor: "text-white",
                bg: "bg-[#a855f7]",
              },
              {
                icon: TrendingUp,
                title: "Tracking & Attribution",
                desc: "Server-side GTM, GA4, Consent Mode v2, and multi-touch attribution that actually works.",
                color: "bg-[#f59e0b]",
                textColor: "text-white",
                bg: "bg-[#f59e0b]",
              },
              {
                icon: Workflow,
                title: "Analytics & Dashboards",
                desc: "Custom Looker Studio dashboards and real-time reporting so you always know your numbers.",
                color: "bg-[#ec4899]",
                textColor: "text-white",
                bg: "bg-[#ec4899]",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i + 1}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group rounded-3xl bg-white p-8 border border-[#0F1629]/5 hover:border-[#0F1629]/10 hover:shadow-xl transition-all"
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.bg} ${service.textColor} mb-6`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-[#ff6b35] transition-colors">
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

      {/* Selected Works - Case Studies (Digitaly Colorful Cards) */}
      <section id="case-studies" className="relative z-10 section-padding py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-12">
            <span className="pill-blue mb-4 inline-block">Selected Works</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Results That<br />Speak
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Card 1 - Blue */}
            <motion.div
              variants={fadeUp}
              custom={1}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-[#4A90FF] p-8 text-white relative overflow-hidden group min-h-[320px] flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-medium mb-4">Meta Ads</span>
                <h3 className="font-heading text-2xl font-bold mb-2">D2C Skincare</h3>
                <p className="text-white/70 text-sm">Beauty & Personal Care</p>
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider mb-1">ROAS Improvement</p>
                <p className="font-heading text-5xl font-bold">6.2x</p>
                <p className="text-sm text-white/70 mt-1">From 1.8x to 6.2x in 90 days</p>
              </div>
            </motion.div>

            {/* Card 2 - Orange */}
            <motion.div
              variants={fadeUp}
              custom={2}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-[#ff6b35] p-8 text-white relative overflow-hidden group min-h-[320px] flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-medium mb-4">Google Ads</span>
                <h3 className="font-heading text-2xl font-bold mb-2">Real Estate</h3>
                <p className="text-white/70 text-sm">Property Developer</p>
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider mb-1">CPL Reduction</p>
                <p className="font-heading text-5xl font-bold">35%</p>
                <p className="text-sm text-white/70 mt-1">From ₹420 to ₹145 per lead</p>
              </div>
            </motion.div>

            {/* Card 3 - Yellow/Gold */}
            <motion.div
              variants={fadeUp}
              custom={3}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-[#D4A017] p-8 text-white relative overflow-hidden group min-h-[320px] flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-medium mb-4">Automation</span>
                <h3 className="font-heading text-2xl font-bold mb-2">EdTech Platform</h3>
                <p className="text-white/70 text-sm">Education & SaaS</p>
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Time Saved</p>
                <p className="font-heading text-5xl font-bold">15hrs</p>
                <p className="text-sm text-white/70 mt-1">Weekly via n8n + CrewAI</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Automation Stack - Dark Section (Digitaly "Awarded Works" style) */}
      <section id="automation" className="relative z-10 section-padding py-20 bg-[#0F1629] text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-12 flex items-end justify-between">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 border border-white/10 mb-4">The Stack</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                How The<br />Automation Works
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-white/50">
              <Bot className="h-4 w-4" />
              <span>Powered by n8n + CrewAI</span>
            </div>
          </motion.div>

          <div className="space-y-4">
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
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                custom={i + 1}
                className="group flex items-center gap-6 rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all cursor-pointer"
              >
                <span className="font-heading text-4xl font-bold text-white/10 group-hover:text-[#ff6b35]/30 transition-colors">
                  {item.step}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-white/10 text-xs text-white/60">
                      {item.tools}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-white/20 group-hover:text-[#ff6b35] group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Happy Clients / Logos */}
      <section className="relative z-10 section-padding py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} custom={0}>
            <span className="pill-green mb-6 inline-block">Trusted By</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
              Industries We Serve
            </h2>
          </motion.div>
          
          <motion.div
            variants={fadeUp}
            custom={1}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40"
          >
            {["Real Estate", "Education", "Automotive", "E-Commerce", "SaaS", "D2C"].map((industry) => (
              <span key={industry} className="font-heading text-xl md:text-2xl font-bold text-[#0F1629]/30">
                {industry}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section - Digitaly Style */}
      <section id="contact" className="relative z-10 section-padding py-20">
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
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#ff6b35] via-[#f7931e] to-[#4A90FF] p-12 md:p-16 text-center"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Start<br />a Project?
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
                Book a free 30-minute audit. We'll map your current setup and show you exactly where AI agents can replace manual work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="mailto:vyzantmarketing@gmail.com?subject=Free%20Audit%20Request"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-semibold text-[#0F1629] hover:bg-white/90 transition-all hover:scale-105 shadow-xl"
                >
                  Book Free Audit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#automation"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-10 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all"
                >
                  Explore Stack
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 section-padding py-16 bg-[#0F1629] text-white">
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
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4 text-white/80">Services</h4>
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
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4 text-white/80">Company</h4>
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

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
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