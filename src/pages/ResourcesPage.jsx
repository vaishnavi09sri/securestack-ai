import React, { useState } from 'react';
import { BookOpen, Search, ArrowRight, Download, ChevronDown, ChevronUp, FileText, Sparkles, HelpCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { PageHeader } from '../components/common/PageHeader';
import { SectionReveal } from '../components/common/SectionReveal';

export const ResourcesPage = () => {
  const { showToast } = useAuth();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const resources = [
    {
      id: 1,
      title: 'Navigating SOC 2 Type II in 2026: The AI Automation Blueprint',
      category: 'Guides',
      readTime: '6 min read',
      excerpt: 'How CISOs automate evidence collection across AWS and GitHub to reduce audit prep from 6 months to 30 days.',
      author: 'Marcus Vance • Chief Security Architect',
      date: 'July 15, 2026'
    },
    {
      id: 2,
      title: 'CrowdStrike Falcon vs SentinelOne Singularity: 2026 EDR Benchmarks',
      category: 'Whitepapers',
      readTime: '10 min read',
      excerpt: 'In-depth architectural analysis comparing agent overhead, ransomware rollback, and Charlotte AI vs Purple AI.',
      author: 'Elena Rostova • VP of Security Intelligence',
      date: 'July 10, 2026'
    },
    {
      id: 3,
      title: 'Zero Trust Cloud Transformation: Multi-Cloud IAM Hardening',
      category: 'Blogs',
      readTime: '8 min read',
      excerpt: 'Step-by-step engineering playbook for transitioning AWS, Azure, and GCP identity policies to strict Zero Trust.',
      author: 'David Chen • Senior Cloud Security Consultant',
      date: 'July 02, 2026'
    },
    {
      id: 4,
      title: 'How FinTech Startup PayPulse Achieved SOC 2 & Scaled to $50M ARR',
      category: 'Case Studies',
      readTime: '5 min read',
      excerpt: 'Case study detailing how PayPulse unblocked enterprise banking deals using SecureStack AI automation.',
      author: 'Sarah Jenkins • Growth Director',
      date: 'June 28, 2026'
    }
  ];

  const faqs = [
    {
      q: 'How does SecureStack AI connect to our cloud infrastructure without security risks?',
      a: 'SecureStack AI utilizes read-only, agentless IAM roles and scoped API tokens with zero write privileges during initial posture scanning. All telemetry is encrypted in transit (TLS 1.3) and at rest (AES-256).'
    },
    {
      q: 'Can the Live Comparison Tool evaluate custom software vendors not listed on the page?',
      a: 'Yes! Our Enterprise plan includes custom software product benchmarking where our senior cybersecurity consultants research and ingest vendor metrics into your private matrix.'
    },
    {
      q: 'What is included in a Virtual CISO (vCISO) consulting engagement?',
      a: 'A vCISO engagement provides dedicated access to a senior cybersecurity architect for board reporting, policy authoring, third-party vendor review, and 24/7 emergency incident response SLA.'
    },
    {
      q: 'How fast can we achieve SOC 2 Type II audit readiness?',
      a: 'With SecureStack AI’s automated evidence collection connectors, most scaleups complete full audit preparation and evidence vaulting in under 30 days.'
    }
  ];

  const filteredResources = resources.filter(r => {
    const matchesCat = activeCategory === 'All' || r.category === activeCategory;
    const matchesQ = searchQuery === '' || r.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQ;
  });

  return (
    <div>
      <PageHeader
        badge="Knowledge Hub & Research"
        title={<>Cybersecurity Insights &amp;<br /><span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Expert Research</span></>}
        subtitle="Technical guides, benchmark reports, SOC 2 compliance blueprints, and industry research curated by senior security architects."
        actions={[
          { label: 'Download SOC 2 Blueprint', href: '/resources', variant: 'primary' },
          { label: 'Book a Consultation', href: '/consulting', variant: 'ghost' },
        ]}
      />

      {/* Search & Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, whitepapers, FAQs..."
              className="w-full bg-slate-900/90 border border-pink-500/20 focus:border-pink-500 rounded-xl pl-11 pr-4 py-3 text-xs text-white placeholder:text-slate-500 outline-none"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {['All', 'Blogs', 'Guides', 'Whitepapers', 'Case Studies'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === cat ? 'bg-cyan-500 text-[#08111F]' : 'glass-card text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resource Hero Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-cyan-500/40 bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              Featured 2026 Research Report
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              The 2026 State of Enterprise AI Cybersecurity & Tooling Overlap
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Based on telemetry data from 500+ CISOs across Tech, Finance, and Healthcare. Discover how leading security teams cut tool sprawl by 40% while accelerating incident containment.
            </p>
            <button onClick={() => showToast('Downloading 2026 State of AI Cybersecurity Report PDF...')} className="gradient-btn px-6 py-3 text-xs font-bold text-white rounded-xl inline-flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>Download Full 48-Page PDF Report</span>
            </button>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredResources.map((res) => (
          <div key={res.id} className="glass-card glass-card-hover rounded-2xl p-8 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-slate-800 text-cyan-300">
                  {res.category}
                </span>
                <span className="text-slate-500">{res.readTime}</span>
              </div>

              <h3 className="text-xl font-extrabold text-white">{res.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{res.excerpt}</p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">{res.author}</span>
              <button onClick={() => showToast(`Opening article: ${res.title}`)} className="text-cyan-400 font-bold flex items-center gap-1 hover:underline">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-400" />
            <span>Frequently Asked Questions</span>
          </h2>
          <p className="text-xs text-slate-400">Everything you need to know about the platform and consulting services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card rounded-2xl border border-slate-800 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left text-sm font-bold text-white hover:bg-slate-900/60"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>

              {openFaq === idx && (
                <div className="px-6 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3 bg-slate-950/40">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
