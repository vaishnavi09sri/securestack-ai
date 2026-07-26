import React, { useState } from 'react';
import { CheckCircle2, Lock, Shield, ArrowRight, Zap, HelpCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { PageHeader } from '../components/common/PageHeader';
import { SectionReveal } from '../components/common/SectionReveal';

export const PricingPage = () => {
  const { openDemoModal, showToast } = useAuth();
  const [annualBilling, setAnnualBilling] = useState(true);

  // Interactive ROI Calculator State
  const [employeeCount, setEmployeeCount] = useState(100);

  // Estimated savings
  const estimatedSavings = Math.round(employeeCount * 140);
  const hoursSaved = Math.round(employeeCount * 3.5);

  return (
    <div>
      <PageHeader
        badge="Transparent Series-A Pricing"
        title={<>Flexible Pricing for<br /><span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Platform & Consulting</span></>}
        subtitle="Choose a self-serve SaaS plan or combine platform intelligence with high-touch cybersecurity consulting packages. No hidden fees, no lock-in."
        actions={[
          { label: 'Start Free Trial', href: '/book-demo', variant: 'primary' },
          { label: 'Compare Plans', href: '/compare', variant: 'ghost' },
        ]}
      />

      {/* Billing Toggle */}
      <div className="flex items-center justify-center gap-4 py-8">
        <span className={`text-xs font-bold ${!annualBilling ? 'text-white' : 'text-slate-400'}`}>Monthly Billing</span>
        <button
          onClick={() => setAnnualBilling(!annualBilling)}
          className="w-14 h-8 rounded-full bg-slate-800 p-1 border border-pink-500/30 transition-colors relative"
        >
          <div className={`w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 shadow transition-transform ${annualBilling ? 'translate-x-6' : 'translate-x-0'}`} />
        </button>
        <span className={`text-xs font-bold flex items-center gap-1.5 ${annualBilling ? 'text-pink-400' : 'text-slate-400'}`}>
          <span>Annual Billing</span>
          <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 text-[10px] uppercase border border-pink-500/30">Save 20%</span>
        </span>
      </div>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Tier 1: Starter */}
        <div className="glass-card glass-card-hover rounded-3xl p-8 border border-slate-800 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Starter SaaS</span>
            <h3 className="text-2xl font-extrabold text-white">Starter</h3>
            <p className="text-xs text-slate-400">Essential posture scanning and tool comparison for early-stage startups.</p>

            <div className="pt-2">
              <span className="text-4xl font-extrabold text-white">{annualBilling ? '$399' : '$499'}</span>
              <span className="text-xs text-slate-400"> / month</span>
            </div>

            <ul className="space-y-2 text-xs text-slate-200 pt-4 border-t border-slate-800">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Up to 25 Team Seats</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Live Product Comparison Engine</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Automated SOC 2 Readiness Scan</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Community Email Support</li>
            </ul>
          </div>

          <button onClick={openDemoModal} className="w-full glass-card hover:bg-slate-800 py-3 text-xs font-bold text-white rounded-xl border border-slate-700">
            Start Free Trial
          </button>
        </div>

        {/* Tier 2: Pro */}
        <div className="glass-card glass-card-hover rounded-3xl p-8 border border-cyan-500/50 bg-slate-900/80 space-y-6 flex flex-col justify-between relative shadow-2xl">
          <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-extrabold text-[10px] uppercase shadow">
            Recommended
          </span>

          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Pro Platform</span>
            <h3 className="text-2xl font-extrabold text-white">Pro</h3>
            <p className="text-xs text-slate-300">Continuous AI risk scanning and automated remediation for scaling tech teams.</p>

            <div className="pt-2">
              <span className="text-4xl font-extrabold text-white">{annualBilling ? '$1,199' : '$1,499'}</span>
              <span className="text-xs text-slate-400"> / month</span>
            </div>

            <ul className="space-y-2 text-xs text-slate-200 pt-4 border-t border-slate-800">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Up to 150 Team Seats</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Generative AI Remediation Code</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 5 Compliance Framework Monitors</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> GitHub & GitLab PR Integration</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Priority Support SLA</li>
            </ul>
          </div>

          <button onClick={openDemoModal} className="w-full gradient-btn py-3 text-xs font-bold text-white rounded-xl shadow-lg">
            Choose Pro Plan
          </button>
        </div>

        {/* Tier 3: Enterprise */}
        <div className="glass-card glass-card-hover rounded-3xl p-8 border border-slate-800 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Enterprise + Consulting</span>
            <h3 className="text-2xl font-extrabold text-white">Enterprise</h3>
            <p className="text-xs text-slate-400">Unlimited scale, dedicated Virtual CISO advisory, and air-gapped support.</p>

            <div className="pt-2">
              <span className="text-4xl font-extrabold text-white">Custom</span>
              <span className="text-xs text-slate-400"> / tailored quote</span>
            </div>

            <ul className="space-y-2 text-xs text-slate-200 pt-4 border-t border-slate-800">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Unlimited Infrastructure Seats</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Dedicated Virtual CISO Advisory</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Custom SIEM/SOAR Playbooks</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 24/7 Phone & Incident Response SLA</li>
            </ul>
          </div>

          <button onClick={openDemoModal} className="w-full glass-card hover:bg-slate-800 py-3 text-xs font-bold text-white rounded-xl border border-slate-700">
            Contact Enterprise Sales
          </button>
        </div>

      </section>

      {/* ROI CALCULATOR SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-6 bg-slate-950/90 text-center">
          <div className="space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Interactive ROI Calculator</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Estimate Your Security Stack ROI</h2>
          </div>

          <div className="max-w-md mx-auto space-y-3">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">Company Size (Employees):</span>
              <span className="text-cyan-400">{employeeCount} Employees</span>
            </div>
            <input
              type="range"
              min="10"
              max="1000"
              step="10"
              value={employeeCount}
              onChange={(e) => setEmployeeCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4 max-w-lg mx-auto">
            <div className="p-4 rounded-xl glass-card border border-slate-800 text-center">
              <span className="text-2xl font-extrabold text-emerald-400">${estimatedSavings.toLocaleString()}</span>
              <span className="text-xs text-slate-400 block mt-1">Est. Tool Redundancy Savings / yr</span>
            </div>

            <div className="p-4 rounded-xl glass-card border border-slate-800 text-center">
              <span className="text-2xl font-extrabold text-cyan-400">{hoursSaved} Hours</span>
              <span className="text-xs text-slate-400 block mt-1">Est. Engineering Audit Hours Saved / yr</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
