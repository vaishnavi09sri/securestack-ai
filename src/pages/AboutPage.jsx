import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Building2, CheckCircle2, Heart, Globe, ExternalLink, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { SectionReveal } from '../components/common/SectionReveal';
import { useAuth } from '../context/AuthContext';

const stats = [
  { value: '500+', label: 'Enterprise Clients', icon: Building2 },
  { value: '$2.4B', label: 'Assets Protected', icon: Shield },
  { value: '99.97%', label: 'Platform Uptime', icon: Award },
  { value: '40+', label: 'Countries Served', icon: Globe },
];

const leaders = [
  {
    name: 'Dr. Aris Thorne',
    role: 'Co-Founder & CEO',
    bio: 'Former CISO at Series-C FinTech, 15+ years in offensive security research. Led breach response at 3 Fortune 100 firms.',
    initials: 'AT',
    gradient: 'from-pink-500 to-fuchsia-600',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Marcus Vance',
    role: 'Co-Founder & CTO',
    bio: 'Ex-Google Cloud Principal Security Engineer, author of 4 cryptography patents. Built zero-trust architecture for 50M+ user systems.',
    initials: 'MV',
    gradient: 'from-fuchsia-500 to-violet-600',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Elena Rostova',
    role: 'VP of Cybersecurity Intelligence',
    bio: 'Former Lead Threat Researcher at CrowdStrike & NSA Cyber Specialist. Uncovered 12 zero-day exploits in the wild.',
    initials: 'ER',
    gradient: 'from-rose-500 to-pink-600',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Yusuf Al-Rashid',
    role: 'Head of Compliance Engineering',
    bio: 'Certified ISO 27001 Lead Auditor, PCIP, and HIPAA Specialist. Helped 200+ organizations achieve continuous audit readiness.',
    initials: 'YA',
    gradient: 'from-violet-500 to-purple-600',
    linkedin: '#',
    twitter: '#',
  },
];

const values = [
  { icon: Shield, title: 'Security First', desc: 'Every product decision passes through a security lens before shipping.' },
  { icon: Users, title: 'Client Obsession', desc: 'We embed with your team, not just advise from afar.' },
  { icon: Heart, title: 'Radical Transparency', desc: 'We publish CVE advisories, never hide breach impacts or charge for honesty.' },
  { icon: Globe, title: 'Global Compliance', desc: 'SOC 2, ISO 27001, HIPAA, GDPR, PCI DSS — we speak every compliance dialect.' },
];

const timeline = [
  { year: '2024', event: 'SecureStack AI founded in Singapore by Dr. Thorne & Vance' },
  { year: 'Q1 2025', event: 'Seed funding of $3.2M from Sequoia & Y Combinator' },
  { year: 'Q3 2025', event: 'Launched AI Security Assessment platform — 200 beta users' },
  { year: 'Q1 2026', event: 'Series A: $18M. Expanded to USA, UK, UAE markets' },
  { year: 'Now', event: '500+ enterprise clients, SOC 2 Type II certified, 40+ countries' },
];

export const AboutPage = () => {
  const { openDemoModal } = useAuth();

  return (
    <div>
      <PageHeader
        badge="Our Vision & Mission"
        title={<>Building the Future of<br /><span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Autonomous Security</span></>}
        subtitle="Founded in 2024 to empower organizations to understand, benchmark, and maintain their cybersecurity posture using AI intelligence and human advisory."
        actions={[
          { label: 'View Open Roles', href: '/contact', variant: 'primary' },
          { label: 'Our Consulting Team', href: '/consulting', variant: 'ghost' },
        ]}
      />

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-6 border border-pink-500/15 text-center hover:border-pink-500/40 transition-all group">
                <stat.icon className="w-6 h-6 text-pink-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Mission pillars */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <SectionReveal>
          <h2 className="text-3xl font-black text-white text-center mb-12">
            The Three Pillars of <span className="text-pink-400">SecureStack AI</span>
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { num: '01', title: 'Know', sub: 'Total Visibility', desc: 'Eliminate dark infrastructure and unmonitored cloud sprawl across modern multi-cloud networks. Real-time asset inventory with zero agents.' },
            { num: '02', title: 'Secure', sub: 'Objective Benchmarks', desc: 'Provide unbiased side-by-side technical evaluation of software vendors without marketing bias, conflict of interest, or pay-to-play rankings.' },
            { num: '03', title: 'Comply', sub: 'Continuous Readiness', desc: 'Transform annual audit panics into 24/7 continuous audit readiness. Automated evidence collection for SOC 2, ISO 27001, HIPAA, GDPR, PCI DSS.' },
          ].map((p, i) => (
            <SectionReveal key={p.num} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 border border-pink-500/15 hover:border-pink-500/40 transition-all h-full group">
                <span className="text-5xl font-black text-pink-500/20 group-hover:text-pink-500/40 transition-colors">{p.num}</span>
                <div className="text-pink-400 font-extrabold text-xl mt-2">{p.title}</div>
                <h3 className="text-lg font-bold text-white mt-1 mb-3">{p.sub}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Company Timeline */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <SectionReveal>
          <h2 className="text-3xl font-black text-white text-center mb-12">Our Journey</h2>
        </SectionReveal>
        <div className="relative border-l-2 border-pink-500/20 ml-4 space-y-8">
          {timeline.map((t, i) => (
            <SectionReveal key={t.year} delay={i * 0.1} dir="left">
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-pink-500 ring-4 ring-pink-500/20" />
                <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">{t.year}</span>
                <p className="text-white mt-1 font-medium">{t.event}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <SectionReveal>
          <h2 className="text-3xl font-black text-white text-center mb-12">Our Core Values</h2>
        </SectionReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <SectionReveal key={v.title} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-6 border border-pink-500/15 hover:border-pink-500/40 transition-all text-center group">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mx-auto mb-4 border border-pink-500/20 group-hover:bg-pink-500/20 transition-all">
                  <v.icon className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{v.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">Backed by Veteran Security Engineers</h2>
            <p className="text-gray-500 mt-2 text-sm">Led by security researchers and former enterprise CISOs</p>
          </div>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, i) => (
            <SectionReveal key={leader.name} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-6 border border-pink-500/15 hover:border-pink-500/40 transition-all text-center group">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${leader.gradient} mx-auto p-0.5 mb-4`}>
                  <div className="w-full h-full bg-[#100A16] rounded-full flex items-center justify-center font-black text-white text-lg">
                    {leader.initials}
                  </div>
                </div>
                <h3 className="font-bold text-white">{leader.name}</h3>
                <span className="text-xs text-pink-400 font-semibold block mt-1 mb-3">{leader.role}</span>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{leader.bio}</p>
                <div className="flex items-center justify-center gap-3">
                  <a href={leader.linkedin} className="w-7 h-7 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center hover:bg-pink-500/20 transition-all">
                    <ExternalLink size={12} className="text-pink-400" />
                  </a>
                  <a href={leader.twitter} className="w-7 h-7 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center hover:bg-pink-500/20 transition-all">
                    <MessageCircle size={12} className="text-pink-400" />
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <SectionReveal>
          <div className="glass-card rounded-3xl p-12 border border-pink-500/20 text-center bg-gradient-to-br from-pink-500/5 to-fuchsia-500/5">
            <h2 className="text-3xl font-black text-white mb-4">Join 500+ Organizations<br />That Trust SecureStack AI</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">See how we protect enterprise infrastructure with AI-native security intelligence and expert human advisory.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button onClick={openDemoModal} className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:scale-105 transition-all">
                Book a Live Demo
              </button>
              <Link to="/consulting" className="px-8 py-3 rounded-xl border border-pink-500/30 text-pink-400 font-medium hover:bg-pink-500/10 transition-all">
                Meet Our Consultants
              </Link>
            </div>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
};
