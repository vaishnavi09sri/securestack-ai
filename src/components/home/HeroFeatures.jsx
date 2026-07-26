import React, { useState } from 'react';
import { ShieldAlert, Cpu, ArrowRight, CheckCircle2, Sliders, ExternalLink, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScoreMeter } from '../common/ScoreMeter';

export const HeroFeatures = () => {
  const [activeTab, setActiveTab] = useState('assessment');
  const [patchApplied, setPatchApplied] = useState(false);
  const [activeFramework, setActiveFramework] = useState('SOC 2');

  const frameworks = [
    { name: 'SOC 2 Type II', score: 94, controls: '112/118 Passed', status: 'Ready for Audit', color: 'text-pink-400' },
    { name: 'ISO 27001:2022', score: 88, controls: '91/93 Passed', status: 'Continuous Monitor', color: 'text-fuchsia-400' },
    { name: 'HIPAA Security', score: 100, controls: '45/45 Passed', status: 'Fully Compliant', color: 'text-pink-400' },
    { name: 'GDPR Compliance', score: 90, controls: '32/34 Passed', status: 'Minor Remediation', color: 'text-amber-400' },
    { name: 'PCI DSS 4.0', score: 86, controls: '64/70 Passed', status: 'Gap Detected', color: 'text-amber-400' }
  ];

  return (
    <section className="py-24 bg-[#05050A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-950/60 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Autonomous Intelligence Platform</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Three Hero Features Built for <span className="gradient-text">Enterprise Cyber Control</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Eliminate security stack blindspots, benchmark enterprise vendors in real-time, and automate audit readiness with continuous AI guardrails.
          </p>
        </div>

        {/* Feature Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('assessment')}
            className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'assessment'
                ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-lg shadow-pink-500/25'
                : 'glass-card text-slate-400 hover:text-white'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>1. AI Security Assessment</span>
          </button>

          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'comparison'
                ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-lg shadow-pink-500/25'
                : 'glass-card text-slate-400 hover:text-white'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>2. Live Product Comparison</span>
          </button>

          <button
            onClick={() => setActiveTab('compliance')}
            className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'compliance'
                ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-lg shadow-pink-500/25'
                : 'glass-card text-slate-400 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>3. Compliance Intelligence</span>
          </button>
        </div>

        {/* FEATURE 1: AI SECURITY ASSESSMENT */}
        {activeTab === 'assessment' && (
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-in fade-in">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-pink-400 uppercase tracking-wider">
                <Zap className="w-4 h-4" /> Feature 01 • Autonomous Posture Engine
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Continuous Vulnerability Inspection & Generative Code Fixes
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                SecureStack AI continuously scans your cloud infrastructure (AWS, Azure, GCP), code repositories (GitHub, GitLab), and identity stores (Okta). When a security drift occurs, our AI engine doesn’t just issue an alert—it generates validated, production-ready remediation code.
              </p>

              {/* Workflow Breakdown */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="w-6 h-6 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Ingest & Map Infrastructure</h4>
                    <p className="text-[11px] text-slate-400">Agentless discovery across IAM roles, Kubernetes clusters, and API keys.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="w-6 h-6 rounded-lg bg-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
                  <div>
                    <h4 className="text-xs font-bold text-white">AI Prioritization & CVE Correlation</h4>
                    <p className="text-[11px] text-slate-400">Correlates posture drift against OWASP Top 10, MITRE ATT&CK, and active exploit databases.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Auto-Generate PR Patch</h4>
                    <p className="text-[11px] text-slate-400">Generates pull requests directly into developer workflows without breaking build pipelines.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/product" className="gradient-btn px-6 py-3 text-xs font-bold text-white rounded-xl inline-flex items-center gap-2 shadow-lg shadow-pink-500/20">
                  <span>Explore AI Posture Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Interactive Code Remediation Widget */}
            <div className="lg:col-span-6 glass-card rounded-2xl p-6 bg-[#0a0510] border border-pink-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-pink-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">aws_iam_policy_drift.tf</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-rose-400 bg-rose-950/60 px-2 py-1 rounded border border-rose-500/30">
                  Critical Finding
                </span>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs space-y-1 bg-slate-950 p-4 rounded-xl text-slate-300 overflow-x-auto border border-slate-900">
                <div className="text-slate-500"># Detected: Overly permissive Wildcard IAM Action</div>
                <div className="text-rose-400">{`- resource "aws_iam_policy" "admin_access" {`}</div>
                <div className="text-rose-400 pl-4">{`-   Action = "*"`}</div>
                <div className="text-rose-400 pl-4">{`-   Resource = "*"`}</div>
                {patchApplied ? (
                  <>
                    <div className="text-pink-400 animate-in fade-in">{`+ resource "aws_iam_policy" "restricted_read" {`}</div>
                    <div className="text-pink-400 animate-in fade-in pl-4">{`+   Action = ["s3:GetObject", "s3:ListBucket"]`}</div>
                    <div className="text-pink-400 animate-in fade-in pl-4">{`+   Resource = "arn:aws:s3:::secure-audit-logs/*"`}</div>
                  </>
                ) : (
                  <div className="text-slate-500 italic pl-4">// Click below to apply AI security patch</div>
                )}
                <div>{`}`}</div>
              </div>

              {/* Interactive Patch Button */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-400">
                  {patchApplied ? '✅ Patch Applied • Risk Index Reduced by 14 pts' : 'AI Action Available'}
                </span>
                <button
                  onClick={() => setPatchApplied(!patchApplied)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    patchApplied
                      ? 'bg-pink-950 text-pink-400 border border-pink-500/40'
                      : 'gradient-btn text-white shadow-lg shadow-pink-500/20'
                  }`}
                >
                  {patchApplied ? 'Revert Patch' : 'Apply AI Remediation Patch'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FEATURE 2: LIVE SECURITY PRODUCT COMPARISON */}
        {activeTab === 'comparison' && (
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-8 animate-in fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-pink-400 uppercase tracking-wider">
                  <Sliders className="w-4 h-4" /> Feature 02 • Core Product Benchmarking Engine
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Side-by-Side Enterprise Tool Comparison
                </h3>
              </div>
              <Link to="/compare" className="gradient-btn px-5 py-2.5 text-xs font-bold text-white rounded-xl inline-flex items-center gap-2 shadow-lg shadow-pink-500/20">
                <span>Open Full Comparison Tool</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            {/* Tool Comparison Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: CrowdStrike */}
              <div className="glass-card rounded-2xl p-6 border border-pink-500/40 bg-slate-950/80 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-600/20 text-rose-400 font-extrabold flex items-center justify-center border border-rose-500/40 text-sm">
                      CS
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">CrowdStrike Falcon</h4>
                      <p className="text-xs text-slate-400">Endpoint & XDR Security</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    ★ 4.9 Index
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Starting Cost</span>
                    <span className="font-bold text-white">$59.99 / endpoint / yr</span>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">AI Assistant</span>
                    <span className="font-bold text-pink-400">Charlotte AI</span>
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-pink-400" /> Lightweight 100% cloud-native sensor</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-pink-400" /> Real-time threat hunting speed</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-pink-400" /> Full SOC 2 & ISO 27001 compliance</li>
                </ul>
              </div>

              {/* Card 2: SentinelOne */}
              <div className="glass-card rounded-2xl p-6 border border-pink-500/40 bg-slate-950/80 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-fuchsia-600/20 text-fuchsia-400 font-extrabold flex items-center justify-center border border-fuchsia-500/40 text-sm">
                      S1
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">SentinelOne Singularity</h4>
                      <p className="text-xs text-slate-400">Endpoint & XDR Security</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    ★ 4.8 Index
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Starting Cost</span>
                    <span className="font-bold text-white">$45.00 / endpoint / yr</span>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">AI Assistant</span>
                    <span className="font-bold text-fuchsia-400">Purple AI</span>
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-pink-400" /> 1-Click ransomware rollback</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-pink-400" /> Works fully offline without cloud</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-pink-400" /> HIPAA & FedRAMP Ready</li>
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* FEATURE 3: COMPLIANCE INTELLIGENCE */}
        {activeTab === 'compliance' && (
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-in fade-in">
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 glass-card rounded-2xl bg-slate-950 border border-pink-500/30 text-center space-y-4">
              <ScoreMeter score={94} size={180} strokeWidth={14} />
              <div>
                <h4 className="text-lg font-bold text-white">SOC 2 Type II Audit Readiness</h4>
                <p className="text-xs text-slate-400 mt-1">112 of 118 Security Controls Passing</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-bold uppercase">
                Auditor Export Ready
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-pink-400 uppercase tracking-wider">
                <Award className="w-4 h-4" /> Feature 03 • Continuous Audit Engine
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Supported Compliance Frameworks & Real-Time Tracking
              </h3>

              {/* Framework Pills */}
              <div className="space-y-3">
                {frameworks.map((fw) => (
                  <div
                    key={fw.name}
                    onClick={() => setActiveFramework(fw.name)}
                    className={`p-4 rounded-xl glass-card border transition-all cursor-pointer flex items-center justify-between ${
                      activeFramework === fw.name ? 'border-pink-500 bg-slate-950' : 'border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center font-bold text-xs">
                        ✓
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{fw.name}</h4>
                        <span className="text-xs text-slate-400">{fw.controls}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-bold ${fw.color}`}>{fw.status}</span>
                      <span className="text-sm font-extrabold text-white bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                        {fw.score}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
