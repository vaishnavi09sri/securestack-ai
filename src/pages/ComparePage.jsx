import React from 'react';
import { Sliders, Sparkles, Shield, Lock } from 'lucide-react';
import { ComparisonMatrix } from '../components/compare/ComparisonMatrix';
import { useAuth } from '../context/AuthContext';

export const ComparePage = () => {
  const { openDemoModal } = useAuth();

  return (
    <div className="space-y-12 pt-28 pb-16">
      
      {/* Compare Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Sliders className="w-3.5 h-3.5" />
          <span>Flagship SaaS Feature • Un-gated Tool Intelligence</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Live Security Product <span className="gradient-text">Comparison Engine</span>
        </h1>

        <p className="text-slate-300 text-base max-w-3xl mx-auto leading-relaxed">
          Benchmark AWS, Azure, GCP, CrowdStrike, SentinelOne, Microsoft Defender, GitHub, GitLab, Okta, and Auth0 side-by-side across pricing, security features, compliance standards, and AI capabilities.
        </p>

        <div className="pt-2 flex justify-center">
          <button onClick={openDemoModal} className="gradient-btn px-6 py-3 text-xs font-bold text-white rounded-xl inline-flex items-center gap-2 shadow-xl">
            <Lock className="w-4 h-4" />
            <span>Request Custom Stack Benchmarking Audit</span>
          </button>
        </div>
      </section>

      {/* Main Comparison Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComparisonMatrix />
      </section>

    </div>
  );
};
