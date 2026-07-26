import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, Lock, CheckCircle2, Sliders, Activity, ChevronRight } from 'lucide-react';
import { HeroFeatures } from '../components/home/HeroFeatures';
import { ScoreMeter } from '../components/common/ScoreMeter';
import { useAuth } from '../context/AuthContext';

export const HomePage = () => {
  const { openDemoModal } = useAuth();

  return (
    <div className="space-y-24 pt-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        {/* Background Gradients & Glows in Pink */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-pink-600/20 via-fuchsia-500/20 to-rose-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          {/* Pill Announcement */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-pink-500/40 text-xs font-semibold text-pink-300 shadow-xl animate-bounce">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
            <span>SecureStack AI 2.0 Released • Autonomous Posture Scanning</span>
            <ChevronRight className="w-3.5 h-3.5 text-pink-400" />
          </div>

          {/* Large Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
            Know Your Gaps. <br />
            <span className="gradient-text">Secure Your Stack.</span> Maintain Compliance.
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            The Series-A cybersecurity intelligence platform combining automated AI posture assessment, live vendor tool benchmarking, continuous compliance tracking, and elite cybersecurity consulting.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/compare"
              className="w-full sm:w-auto gradient-btn px-8 py-4 text-sm font-bold text-white rounded-xl flex items-center justify-center gap-3 shadow-xl shadow-pink-500/25 group"
            >
              <Sliders className="w-4 h-4 text-pink-200" />
              <span>Try Live Comparison Tool</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={openDemoModal}
              className="w-full sm:w-auto glass-card hover:bg-slate-900/80 border border-slate-700/80 px-8 py-4 text-sm font-bold text-white rounded-xl flex items-center justify-center gap-3 transition-colors"
            >
              <Lock className="w-4 h-4 text-pink-400" />
              <span>Book Enterprise Demo</span>
            </button>
          </div>

          {/* Hero Cyber Dashboard Mockup */}
          <div className="pt-10 max-w-5xl mx-auto">
            <div className="glass-card rounded-3xl p-4 sm:p-8 border border-pink-500/30 shadow-2xl relative overflow-hidden bg-[#0a0510]">
              
              {/* Dashboard Top Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-pink-500" />
                  <span className="font-mono text-white font-bold ml-2">securestack-ai://console/live-posture</span>
                </div>

                <div className="flex items-center gap-3 font-mono text-[11px]">
                  <span className="flex items-center gap-1 text-pink-400"><Activity className="w-3.5 h-3.5" /> Live Scan Active</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-pink-400">3 Cloud Environments Connected</span>
                </div>
              </div>

              {/* Dashboard Grid Content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
                
                {/* Score Circle Widget */}
                <div className="md:col-span-4 glass-card rounded-2xl p-6 border border-slate-800 flex flex-col items-center justify-center bg-slate-950/80">
                  <ScoreMeter score={88} size={150} strokeWidth={12} />
                  <div className="mt-4 text-center">
                    <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">Status: Healthy</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">Top 5% of SaaS Security Benchmarks</p>
                  </div>
                </div>

                {/* Live Threat Feed */}
                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Live Posture & Remediation Log</h4>
                    <span className="text-[10px] text-pink-400 font-mono">Updated 3s ago</span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-pink-400" />
                        <span className="text-white">AWS IAM Policy Drift Auto-Patched</span>
                      </div>
                      <span className="text-pink-400 font-bold">+12 Pts</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                        <span className="text-slate-200">CrowdStrike EDR Sensor Telemetry Synced</span>
                      </div>
                      <span className="text-pink-400 font-bold">Compliant</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-fuchsia-400" />
                        <span className="text-slate-300">SOC 2 Type II Control #112 Evidence Auto-Captured</span>
                      </div>
                      <span className="text-fuchsia-400 font-bold">112/118</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Modern Cybersecurity is Broken by <span className="text-pink-400">Tool Sprawl & Audit Friction</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Organizations spend millions buying fragmented security software while remaining blind to their actual risk posture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card glass-card-hover rounded-2xl p-8 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center font-bold text-xl border border-pink-500/20">
              01
            </div>
            <h3 className="text-lg font-bold text-white">Vendor Tool Fragmentation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Using CrowdStrike for endpoints, AWS for cloud, and Okta for identity leads to overlapping costs and zero unified visibility into total risk exposure.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-2xl p-8 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 flex items-center justify-center font-bold text-xl border border-fuchsia-500/20">
              02
            </div>
            <h3 className="text-lg font-bold text-white">Manual Audit Fatigue</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Engineers waste hundreds of hours manually gathering evidence screenshots for SOC 2, ISO 27001, and HIPAA instead of shipping product code.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-2xl p-8 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold text-xl border border-rose-500/20">
              03
            </div>
            <h3 className="text-lg font-bold text-white">Static Consulting Reports</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Traditional cyber audits deliver a static PDF report that becomes obsolete 24 hours after presentation. Modern infrastructure demands live, continuous inspection.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 bg-gradient-to-br from-slate-950 via-[#0a0510] to-pink-950/30 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold uppercase">
              The SecureStack AI Solution
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Software Intelligence Meets Hands-On Cybersecurity Consulting
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We bridge the gap between automated software scanning and expert human advisory. Our AI platform continuously benchmarks tools and calculates posture score while our certified security consultants execute hands-on architecture reviews and Zero Trust rollouts.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="font-bold text-white block text-sm">SaaS AI Platform</span>
                <span className="text-slate-400">Automated scanning, tool comparison engine, continuous compliance.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="font-bold text-pink-400 block text-sm">Expert Consulting</span>
                <span className="text-slate-400">Penetration testing, cloud audits, Virtual CISO advisory.</span>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/consulting" className="gradient-btn px-6 py-3 text-xs font-bold text-white rounded-xl inline-flex items-center gap-2 shadow-lg shadow-pink-500/20">
                <span>View Consulting Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-400" /> Automated Evidence Collection</span>
                <span className="text-pink-400 font-bold">100% Streamlined</span>
              </div>
              <p className="text-xs text-slate-400">Integrates with AWS, Azure, GitHub, Okta, and Jira to gather audit evidence continuously.</p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-fuchsia-400" /> Vendor Benchmarking Matrix</span>
                <span className="text-fuchsia-400 font-bold">10+ Top Cyber Vendors</span>
              </div>
              <p className="text-xs text-slate-400">Objective side-by-side feature comparisons eliminate guesswork during software procurement.</p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-400" /> Virtual CISO Engagement</span>
                <span className="text-rose-400 font-bold">24/7 Advisory SLA</span>
              </div>
              <p className="text-xs text-slate-400">Direct access to certified security architects for board reviews and incident response.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 HERO FEATURES COMPONENT */}
      <HeroFeatures />

      {/* HOW IT WORKS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Four Steps to Total Security Command
          </h2>
          <p className="text-slate-400 text-sm">
            From initial stack connection to continuous audit-readiness in under 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card rounded-2xl p-6 border border-slate-800 text-left space-y-3 relative">
            <span className="text-3xl font-extrabold text-pink-500/30">01</span>
            <h3 className="text-base font-bold text-white">Connect Infrastructure</h3>
            <p className="text-xs text-slate-400">Agentless API connection to AWS, Azure, GCP, GitHub, and Okta in 5 minutes.</p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-800 text-left space-y-3 relative">
            <span className="text-3xl font-extrabold text-pink-500/30">02</span>
            <h3 className="text-base font-bold text-white">AI Posture Scan</h3>
            <p className="text-xs text-slate-400">Autonomous engine calculates risk index and correlates CVEs across code and cloud.</p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-800 text-left space-y-3 relative">
            <span className="text-3xl font-extrabold text-pink-500/30">03</span>
            <h3 className="text-base font-bold text-white">Benchmark Tool Stack</h3>
            <p className="text-xs text-slate-400">Identify redundant software seats and evaluate alternatives using our comparison engine.</p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-800 text-left space-y-3 relative">
            <span className="text-3xl font-extrabold text-pink-500/30">04</span>
            <h3 className="text-base font-bold text-white">Achieve Compliance</h3>
            <p className="text-xs text-slate-400">Pass SOC 2 & ISO 27001 audits with automated evidence collection and expert consulting.</p>
          </div>
        </div>
      </section>

      {/* QUANTIFIED BENEFITS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <span className="text-4xl sm:text-5xl font-extrabold text-pink-400">70%</span>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Faster Audit Preparation</h4>
            <p className="text-xs text-slate-400">Reduce SOC 2 & ISO 27001 readiness timeline from 6 months to 30 days.</p>
          </div>

          <div className="space-y-2">
            <span className="text-4xl sm:text-5xl font-extrabold text-fuchsia-400">40%</span>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Cyber Tool Spend Optimization</h4>
            <p className="text-xs text-slate-400">Eliminate overlapping software licenses using the Comparison Engine.</p>
          </div>

          <div className="space-y-2">
            <span className="text-4xl sm:text-5xl font-extrabold text-rose-400">100%</span>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Continuous Risk Visibility</h4>
            <p className="text-xs text-slate-400">24/7 AI monitoring across cloud, identity, code, and endpoints.</p>
          </div>
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-10 sm:p-16 border border-pink-500/40 bg-gradient-to-r from-pink-950/60 via-[#0a0510] to-fuchsia-950/80 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Upgrade Your Security Posture?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Join leading startups and enterprises using SecureStack AI to benchmark tools, automate compliance, and partner with elite security consultants.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={openDemoModal}
                className="w-full sm:w-auto gradient-btn px-8 py-4 text-sm font-bold text-white rounded-xl shadow-xl shadow-pink-500/25 flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>Book Enterprise Demo</span>
              </button>

              <Link
                to="/compare"
                className="w-full sm:w-auto glass-card hover:bg-slate-900/80 px-8 py-4 text-sm font-bold text-white rounded-xl flex items-center justify-center gap-2 border border-slate-700"
              >
                <span>Try Comparison Tool</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
