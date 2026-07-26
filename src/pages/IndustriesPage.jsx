import React, { useState } from 'react';
import { Building2, Shield, HeartPulse, Landmark, GraduationCap, ShoppingBag, Factory, Cpu, Landmark as GovIcon, CheckCircle2, ArrowRight, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { PageHeader } from '../components/common/PageHeader';
import { SectionReveal } from '../components/common/SectionReveal';

export const IndustriesPage = () => {
  const { openDemoModal } = useAuth();
  const [activeTab, setActiveTab] = useState('healthcare');

  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare & Life Sciences',
      icon: HeartPulse,
      problems: ['EHR / ePHI data exposure risks', 'HIPAA HITECH compliance audit failure penalties', 'Ransomware targeting hospital endpoints'],
      solutions: ['Continuous ePHI encryption monitoring', 'Automated HIPAA Security Rule evidence mapping', '1-Click ransomware containment with SentinelOne'],
      benefits: ['100% HIPAA Compliance Pass Rate', '75% Faster Patient Data Audit Prep', 'Zero Unsanctioned Cloud Access']
    },
    {
      id: 'finance',
      name: 'Financial Services & Banking',
      icon: Landmark,
      problems: ['Strict FFIEC, PCI DSS 4.0 & SOC 2 mandates', 'Complex multi-cloud IAM policy drift', 'Sophisticated spear-phishing and credential attacks'],
      solutions: ['PCI DSS continuous control verification', 'Zero Trust IAM least-privilege policy generation', 'Phishing-resistant FIDO2 MFA enforcement'],
      benefits: ['Zero Financial Data Leakage', 'Audit Readiness Mapped to FFIEC Standards', '40% Lower Tool Overlap Spend']
    },
    {
      id: 'tech',
      name: 'Technology & SaaS Companies',
      icon: Cpu,
      problems: ['Enterprise prospects requiring SOC 2 to close deals', 'Vulnerability alerts blocking CI/CD speed', 'Tool sprawl across AWS, GitHub, Okta'],
      solutions: ['Automated SOC 2 Type II evidence vault', 'AI Copilot code fix suggestions in GitHub PRs', 'Live security tool comparison engine'],
      benefits: ['SOC 2 Type II Achieved in 30 Days', 'Unblock High-Value Enterprise Deals', '90% Reduction in False-Positive SAST Alerts']
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      icon: ShoppingBag,
      problems: ['Payment gateway breach threats during peak season', 'PCI DSS 4.0 upgrade deadline pressure', 'Third-party API supply chain risk'],
      solutions: ['Continuous payment pipeline scanning', 'Third-party API vulnerability inspection', 'PCI DSS 4.0 automated compliance dashboard'],
      benefits: ['PCI DSS 4.0 Compliance Guaranteed', 'Zero Customer Card Data Exposure', 'Peak Season SLA Uptime Assurance']
    },
    {
      id: 'education',
      name: 'Higher Education & Research',
      icon: GraduationCap,
      problems: ['FERPA student data protection compliance', 'Open campus network security vulnerabilities', 'Targeting of high-value research IP'],
      solutions: ['Segmented campus network Zero Trust policy', 'Automated FERPA evidence tracking', 'Cloud research environment posture scanning'],
      benefits: ['Protected Academic IP & Grant Data', 'FERPA Audit Readiness', 'Controlled Student & Faculty Identity Access']
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Logistics',
      icon: Factory,
      problems: ['OT / Industrial Control Systems (ICS) exposure', 'Supply chain cyber disruption risks', 'ISO 27001 compliance tracking'],
      solutions: ['IT/OT network micro-segmentation', 'ISO 27001 continuous compliance monitoring', 'Vendor supply chain risk scoring'],
      benefits: ['Zero Supply Chain Interruption', 'ISO 27001 Certification Achieved', 'Protected Industrial IoT Telemetry']
    },
    {
      id: 'government',
      name: 'Government & Defense',
      icon: GovIcon,
      problems: ['FedRAMP High & NIST 800-53 mandates', 'Air-gapped deployment requirements', 'State-sponsored threat actor attacks'],
      solutions: ['Air-gapped & sovereign cloud deployment support', 'NIST 800-53 continuous control validation', 'Mandiant threat intelligence integration'],
      benefits: ['FedRAMP High Readiness Validated', 'Air-Gapped Operational Resilience', 'Zero-Day Vulnerability Shielding']
    }
  ];

  const current = industries.find(i => i.id === activeTab) || industries[0];
  const IconComponent = current.icon;

  return (
    <div>
      <PageHeader
        badge="Tailored Vertical Solutions"
        title={<>Cybersecurity Intelligence for<br /><span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Every Industry</span></>}
        subtitle="Tailored security posture rules, compliance frameworks, and consulting solutions engineered for your specific regulatory landscape."
        actions={[
          { label: 'Get Industry Assessment', href: '/book-demo', variant: 'primary' },
          { label: 'View Solutions', href: '/solutions', variant: 'ghost' },
        ]}
      />

      {/* Industry Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((ind) => {
            const IconC = ind.icon;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                  activeTab === ind.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                    : 'glass-card text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <IconC className="w-4 h-4" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-8 bg-slate-950/90 animate-in fade-in">
          <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 p-0.5">
              <div className="w-full h-full bg-[#08111F] rounded-[14px] flex items-center justify-center">
                <IconComponent className="w-7 h-7 text-cyan-400" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{current.name}</h2>
              <p className="text-xs text-slate-400 mt-0.5">Custom Security Posture Blueprint & Regulatory Shield</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Industry Problems */}
            <div className="glass-card rounded-2xl p-6 border border-rose-500/30 bg-rose-950/20 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
                <span>Core Industry Vulnerabilities</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {current.problems.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SecureStack Solution */}
            <div className="glass-card rounded-2xl p-6 border border-cyan-500/30 bg-cyan-950/20 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <span>SecureStack AI Solutions</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-200">
                {current.solutions.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Measurable Benefits */}
            <div className="glass-card rounded-2xl p-6 border border-emerald-500/30 bg-emerald-950/20 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <span>Measurable Outcomes</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-200">
                {current.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="pt-4 flex justify-center border-t border-slate-800">
            <button onClick={openDemoModal} className="gradient-btn px-8 py-3.5 text-xs font-bold text-white rounded-xl flex items-center gap-2 shadow-xl">
              <Lock className="w-4 h-4" />
              <span>Schedule {current.name} Security Audit</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
