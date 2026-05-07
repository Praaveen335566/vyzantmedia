"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Target,
  Layers,
  ShoppingCart,
  Zap,
  LineChart,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF8F5]">
      {/* Floating Gradient Orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="gradient-orb absolute -top-[20%] -left-[10%] h-[600px] w-[600px]"
          style={{ "--orb-color": "#FF9F50" } as React.CSSProperties}
        />
        <div
          className="gradient-orb absolute top-[40%] -right-[15%] h-[500px] w-[500px]"
          style={{ "--orb-color": "#4A90FF" } as React.CSSProperties}
        />
        <div
          className="gradient-orb absolute -bottom-[10%] left-[20%] h-[400px] w-[400px]"
          style={{ "--orb-color": "#FFD93D" } as React.CSSProperties}
        />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-50 mx-auto max-w-7xl px-6 py-6"
      >
        <div className="flex items-center justify-between rounded-2xl bg-white/70 px-6 py-4 backdrop-blur-xl border border-white/60 soft-shadow">
          <Link href="/" className="font-heading text-xl font-bold text-[#0F1629]">
            Vyzantmedia
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {["Services", "Results", "Case Studies", "Process"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-[#0F1629]/70 transition-colors hover:text-[#0F1629]"
              >
                {item}
              </Link>
            ))}
          </div>
          <button className="rounded-full bg-[#0F1629] px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105">
            Book a Call
          </button>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-6 flex justify-center gap-3">
            <span className="pill pill-coral">Performance Marketing</span>
            <span className="pill pill-blue">Conversion Focused</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-heading text-5xl font-bold leading-[1.1] tracking-tight text-[#0F1629] md:text-7xl lg:text-8xl"
          >
            I Build{" "}
            <span className="gradient-text">Conversion Systems</span>
            <br />
            That Scale
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#0F1629]/60 md:text-xl"
          >
            End-to-end performance marketing for D2C brands and SaaS. Paid ads,
            tracking infrastructure, funnel architecture, and automation that
            turns ad spend into predictable revenue.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button className="group flex items-center gap-2 rounded-full bg-[#FF7F50] px-8 py-4 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-200">
              Book a Free Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="rounded-full border-2 border-[#0F1629]/10 bg-white/80 px-8 py-4 text-base font-semibold text-[#0F1629] backdrop-blur-sm transition-all hover:border-[#0F1629]/20 hover:bg-white">
              View Case Studies
            </button>
          </motion.div>

          {/* Metrics Row */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
          >
            {[
              { label: "Avg. ROAS", value: "8.4x", color: "pill-coral" },
              { label: "Ad Spend Managed", value: "₹4.2Cr", color: "pill-blue" },
              { label: "CPL Reduced", value: "62%", color: "pill-yellow" },
              { label: "Funnels Built", value: "120+", color: "pill-green" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="glass-card rounded-2xl p-5 text-center"
              >
                <div className={`pill ${metric.color} mb-2 mx-auto w-fit text-xs`}>
                  {metric.label}
                </div>
                <div className="font-heading text-2xl font-bold text-[#0F1629] md:text-3xl">
                  {metric.value}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} custom={0} className="mb-16 text-center">
            <span className="pill pill-coral mb-4 inline-block">What We Do</span>
            <h2 className="font-heading text-4xl font-bold text-[#0F1629] md:text-5xl">
              Services Built for Scale
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Paid Advertising",
                desc: "Meta, Google, and LinkedIn campaigns with creative testing frameworks and budget optimization.",
                color: "bg-[#FFF0EB] text-[#E85D3E]",
                pill: "pill-coral",
              },
              {
                icon: BarChart3,
                title: "Tracking & Attribution",
                desc: "Server-side GTM, pixel implementation, and multi-touch attribution models that actually work.",
                color: "bg-[#EBF2FF] text-[#4A90FF]",
                pill: "pill-blue",
              },
              {
                icon: Layers,
                title: "Funnel Architecture",
                desc: "High-converting landing pages, upsell flows, and checkout optimization for maximum AOV.",
                color: "bg-[#F3E8FF] text-[#7C3AED]",
                pill: "pill-purple",
              },
              {
                icon: ShoppingCart,
                title: "Shopify Tracking",
                desc: "Complete ecommerce analytics setup — from pixel firing to custom event tracking and LTV analysis.",
                color: "bg-[#E8F5E9] text-[#2E7D32]",
                pill: "pill-green",
              },
              {
                icon: Zap,
                title: "Automation & Workflows",
                desc: "Email sequences, CRM automations, and lead nurturing systems that convert while you sleep.",
                color: "bg-[#FFF8E6] text-[#D4A017]",
                pill: "pill-yellow",
              },
              {
                icon: LineChart,
                title: "Analytics & Dashboards",
                desc: "Custom Looker Studio dashboards and real-time reporting so you always know your numbers.",
                color: "bg-[#E0F7FA] text-[#00838F]",
                pill: "pill-teal",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i + 1}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group glass-card rounded-3xl p-8 transition-shadow hover:shadow-xl"
              >
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.color}`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <span className={`pill ${service.pill} mb-3 text-xs`}>
                  0{i + 1}
                </span>
                <h3 className="font-heading mt-3 text-xl font-bold text-[#0F1629]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[#0F1629]/60 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Results */}
      <section id="results" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="rounded-[2.5rem] bg-[#0F1629] p-10 md:p-16 relative overflow-hidden"
        >
          <div
            className="gradient-orb absolute top-0 right-0 h-[400px] w-[400px] opacity-30"
            style={{ "--orb-color": "#FF7F50" } as React.CSSProperties}
          />
          <div
            className="gradient-orb absolute bottom-0 left-0 h-[300px] w-[300px] opacity-20"
            style={{ "--orb-color": "#4A90FF" } as React.CSSProperties}
          />

          <div className="relative z-10">
            <motion.div variants={fadeUp} custom={0} className="mb-14 text-center">
              <span className="pill bg-white/10 text-white/80 mb-4 inline-block">
                Track Record
              </span>
              <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">
                Numbers That Speak
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "8.4x", label: "Average ROAS", sub: "Across all client accounts" },
                { value: "62%", label: "CPL Reduction", sub: "Within first 60 days" },
                { value: "3.1x", label: "Conversion Lift", sub: "Post funnel optimization" },
                { value: "₹4.2Cr", label: "Ad Spend Managed", sub: "In the last 12 months" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  custom={i + 1}
                  className="rounded-2xl bg-white/5 p-8 text-center backdrop-blur-sm border border-white/10"
                >
                  <div className="font-heading text-5xl font-bold text-white md:text-6xl">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-lg font-semibold text-white/90">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-sm text-white/50">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} custom={0} className="mb-16 text-center">
            <span className="pill pill-blue mb-4 inline-block">Case Studies</span>
            <h2 className="font-heading text-4xl font-bold text-[#0F1629] md:text-5xl">
              Before &amp; After
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                client: "D2C Skincare Brand",
                industry: "Beauty & Personal Care",
                before: { roas: "1.8x", cpl: "₹420", spend: "₹80K/mo" },
                after: { roas: "6.2x", cpl: "₹145", spend: "₹3.2L/mo" },
                tags: ["Meta Ads", "Server-Side Tracking", "Funnel Rebuild"],
              },
              {
                client: "EdTech Lead Gen",
                industry: "Education & SaaS",
                before: { roas: "2.1x", cpl: "₹680", spend: "₹1.5L/mo" },
                after: { roas: "5.4x", cpl: "₹285", spend: "₹6L/mo" },
                tags: ["Google Ads", "Attribution Setup", "CRM Automation"],
              },
            ].map((study, i) => (
              <motion.div
                key={study.client}
                variants={fadeUp}
                custom={i + 1}
                className="glass-card rounded-3xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="pill pill-purple text-xs">{study.industry}</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#0F1629]">
                  {study.client}
                </h3>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-red-50 border border-red-100 p-5">
                    <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-3">
                      Before
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-[#0F1629]/50">ROAS</p>
                        <p className="text-lg font-bold text-red-600">{study.before.roas}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#0F1629]/50">CPL</p>
                        <p className="text-lg font-bold text-red-600">{study.before.cpl}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#0F1629]/50">Ad Spend</p>
                        <p className="text-lg font-bold text-red-600">{study.before.spend}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5">
                    <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-3">
                      After
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-[#0F1629]/50">ROAS</p>
                        <p className="text-lg font-bold text-emerald-600">{study.after.roas}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#0F1629]/50">CPL</p>
                        <p className="text-lg font-bold text-emerald-600">{study.after.cpl}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#0F1629]/50">Ad Spend</p>
                        <p className="text-lg font-bold text-emerald-600">{study.after.spend}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="pill pill-teal text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process */}
      <section id="process" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} custom={0} className="mb-16 text-center">
            <span className="pill pill-green mb-4 inline-block">How It Works</span>
            <h2 className="font-heading text-4xl font-bold text-[#0F1629] md:text-5xl">
              The Process
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Audit",
                desc: "Deep-dive into your ad accounts, tracking, funnels, and analytics to find leaks and quick wins.",
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
                desc: "Optimize with real data. Scale spend on winners, kill losers, and compound growth week over week.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                custom={i + 1}
                className="glass-card rounded-3xl p-8 relative"
              >
                <span className="font-heading text-6xl font-extrabold text-[#0F1629]/5 absolute top-4 right-6">
                  {step.step}
                </span>
                <div className="relative">
                  <span className="pill pill-coral text-xs mb-4 inline-block">
                    Step {step.step}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#0F1629]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[#0F1629]/60 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section id="book" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="glass-card rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div
              className="gradient-orb absolute -top-[30%] left-1/2 -translate-x-1/2 h-[400px] w-[600px] opacity-40"
              style={{ "--orb-color": "#FF9F50" } as React.CSSProperties}
            />
            <div className="relative z-10">
              <h2 className="font-heading text-4xl font-bold text-[#0F1629] md:text-5xl lg:text-6xl">
                Ready to{" "}
                <span className="gradient-text">Scale?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-[#0F1629]/60">
                Book a free audit and I&apos;ll show you exactly where you&apos;re
                leaking revenue — and how to fix it in 30 days.
              </p>
              <button className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF7F50] px-10 py-4 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-200">
                Book a Free Audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#0F1629]/5 py-12 px-6">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/" className="font-heading text-lg font-bold text-[#0F1629]">
            Vyzantmedia
          </Link>
          <div className="flex items-center gap-6 text-sm text-[#0F1629]/60">
            {["Services", "Results", "Case Studies", "Process"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-[#0F1629] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <p className="text-xs text-[#0F1629]/40">
            &copy; {new Date().getFullYear()} Vyzantmedia. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}