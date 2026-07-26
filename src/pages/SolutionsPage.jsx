import React from 'react';
import { Rocket, TrendingUp, Building2, CheckCircle2, ArrowRight, Shield, Lock, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SectionReveal } from '../components/common/SectionReveal';
import { useAuth } from '../context/AuthContext';

const solutions = [
  {
    icon: Rocket,
    tier: '1–50 Employees',
    title: 'Early-Stage Startups',
    desc: 'Achieve SOC 2 Type II readiness in 30 days and pass vendor security questionnaires effortlessly.',
    color: 'pink',
    featured: false,
    features: [
      'Automated SOC 2 evidence collection',
      'Free tool comparison matrix',
      'Turnkey security policy templates',
      'AI-assisted vendor questionnaires',
      'Self-service compliance dashboard',
    ],
    cta: 'Get Startup Security Blueprint',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: TrendingUp,
    tier: '51–500 Employees',
    title: 'Scaleups & Growth SMEs',
    desc: 'Eliminate vendor tool redundancy, enforce Zero Trust identity, and automate continuous posture scoring.',
    color: 'fuchsia',
    featured: true,
    features: [
      'Continuous AI risk scanning & scoring',
      'Multi-cloud IAM drift detection',
      'Fixed-fee penetration testing',
      'Quarterly vCISO advisory sessions',
      'MITRE ATT&CK threat mapping',
    ],
    cta: 'Explore Scaleup Package',
    gradient: 'from-fuchsia-500 to-pink-500',
  },
  {
    icon: Building2,
    tier: '500+ Employees',
    title: 'Global Enterprises',
    desc: 'Multi-region compliance, dedicated Virtual CISO team, custom SIEM connectors, and 24/7 SLA.',
    color: 'violet',
    featured: false,
    features: [
      'Dedicated Virtual CISO advisory',
      'Custom SIEM & SOAR playbooks',
      'Air-gapped deployment option',
      'Multi-framework compliance mapping',
      '24/7 incident response retainer',
    ],
    cta: 'Contact Enterprise Sales',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
];

const industries = [
  { name: 'FinTech & Banking', icon: Shield },
  { name: 'Healthcare & HIPAA', icon: Lock },
  { name: 'SaaS Companies', icon: Zap },
  { name: 'Global Enterprises', icon: Globe },
];

export const SolutionsPage = () => {
  const { openDemoModal } = useAuth();

  return (
    <div>
      <PageHeader
        badge="Scaled Security Architecture"
        title={<>Cybersecurity Built for Your<br /><span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Stage of Growth</span></>}
        subtitle="Whether you need your first SOC 2 certification to unblock enterprise sales or continuous multi-cloud posture guardrails for 5,000 employees — SecureStack AI scales with you."
        actions={[
          { label: 'Get a Free Assessment', href: '/book-demo', variant: 'primary' },
          { label: 'See Pricing', href: '/pricing', variant: 'ghost' },
        ]}
      />

      {/* Solutions Cards */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <SectionReveal key={sol.title} delay={i * 0.1}>
              <div className={`relative glass-card rounded-3xl p-8 border flex flex-col h-full transition-all hover:scale-[1.02] ${
                sol.featured
                  ? 'border-pink-500/50 shadow-[0_0_40px_rgba(236,72,153,0.12)]'
                  : 'border-pink-500/15 hover:border-pink-500/30'
              }`}>
                {sol.featured && (
                  <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-extrabold text-[10px] uppercase tracking-widest">
                    Most Popular
                  </span>
                )}

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sol.gradient} bg-opacity-10 flex items-center justify-center mb-5 p-0.5`}>
                  <div className="w-full h-full bg-[#100A16] rounded-[10px] flex items-center justify-center">
                    <sol.icon className="w-5 h-5 text-pink-400" />
                  </div>
                </div>

                <span className="text-xs font-bold text-pink-400 uppercase tracking-wider mb-2 block">{sol.tier}</span>
                <h3 className="text-2xl font-extrabold text-white mb-3">{sol.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{sol.desc}</p>

                <ul className="space-y-2.5 mb-8 flex-grow">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-pink-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={openDemoModal}
                  className={`w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    sol.featured
                      ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white hover:shadow-[0_0_24px_rgba(236,72,153,0.4)]'
                      : 'border border-pink-500/30 text-pink-400 hover:bg-pink-500/10'
                  }`}
                >
                  {sol.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <SectionReveal>
          <h2 className="text-3xl font-black text-white text-center mb-4">Built for Every Industry</h2>
          <p className="text-gray-500 text-center mb-10 text-sm">Specialized compliance mappings for regulated industries</p>
        </SectionReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <SectionReveal key={ind.name} delay={i * 0.08}>
              <Link to="/industries" className="glass-card rounded-xl p-5 border border-pink-500/15 hover:border-pink-500/40 transition-all flex flex-col items-center gap-3 text-center group">
                <ind.icon className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-white">{ind.name}</span>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <SectionReveal>
          <div className="glass-card rounded-3xl p-12 border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-fuchsia-500/5 text-center">
            <h2 className="text-3xl font-black text-white mb-4">Not Sure Which Solution Fits?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Our security consultants will map your needs to the right coverage model in a 30-minute discovery call.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={openDemoModal} className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:scale-105 transition-all">
                Book Free Discovery Call
              </button>
              <Link to="/pricing" className="px-8 py-3 rounded-xl border border-pink-500/30 text-pink-400 font-medium hover:bg-pink-500/10 transition-all">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};
