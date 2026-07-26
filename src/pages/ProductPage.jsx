import React, { useState } from 'react';
import { ScoreMeter } from '../components/common/ScoreMeter';
import { Shield, Sparkles, Activity, CheckCircle2, AlertTriangle, FileText, Download, Sliders, ChevronRight, Lock, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const ProductPage = () => {
  const { openDemoModal, showToast } = useAuth();

  // Posture Score Calculator State
  const [cloudCoverage, setCloudCoverage] = useState(85);
  const [mfaAdoption, setMfaAdoption] = useState(90);
  const [patchCadence, setPatchCadence] = useState(80);

  // Dynamic calculated score
  const calculatedScore = Math.round((cloudCoverage * 0.4) + (mfaAdoption * 0.35) + (patchCadence * 0.25));

  const handleExportReport = () => {
    showToast('Executive Security Posture PDF Report generated and downloading...');
  };

  return (
    <div className="space-y-16 pt-28 pb-16">
      
      {/* Product Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Shield className="w-3.5 h-3.5" />
          <span>The SecureStack AI SaaS Platform</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Unified Posture Intelligence & <span className="gradient-text">AI Risk Automation</span>
        </h1>
        <p className="text-slate-300 text-base max-w-3xl mx-auto leading-relaxed">
          Transform fragmented security telemetry into a single, board-ready 0–100 Security Index with continuous automated remediation code.
        </p>

        <div className="flex justify-center gap-4 pt-2">
          <button onClick={openDemoModal} className="gradient-btn px-6 py-3 text-xs font-bold text-white rounded-xl flex items-center gap-2">
            <Lock className="w-4 h-4" />
            <span>Book Live Platform Walkthrough</span>
          </button>

          <button onClick={handleExportReport} className="glass-card hover:bg-slate-800 px-6 py-3 text-xs font-bold text-white rounded-xl flex items-center gap-2 border border-slate-700">
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Export Sample Executive Report</span>
          </button>
        </div>
      </section>

      {/* DYNAMIC POSTURE CALCULATOR & SCORE METER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-950/90">
          
          {/* Left Column: Interactive Sliders */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Interactive Simulator</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Live Posture Score Calculator</h2>
              <p className="text-xs text-slate-400 mt-1">Adjust parameters below to see how infrastructure controls impact your overall security index.</p>
            </div>

            {/* Slider 1: Cloud Coverage */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-white">Cloud Asset Inspection Coverage</span>
                <span className="text-cyan-400 font-bold">{cloudCoverage}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={cloudCoverage}
                onChange={(e) => setCloudCoverage(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <span className="text-[10px] text-slate-500 block">Monitors AWS VPCs, Azure Resource Groups, and GCP Organizations.</span>
            </div>

            {/* Slider 2: MFA Adoption */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-white">Phishing-Resistant MFA Enforcement</span>
                <span className="text-cyan-400 font-bold">{mfaAdoption}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={mfaAdoption}
                onChange={(e) => setMfaAdoption(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <span className="text-[10px] text-slate-500 block">Measures Okta / Auth0 FIDO2 WebAuthn & FastPass adoption.</span>
            </div>

            {/* Slider 3: Patch Cadence */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-white">Automated Vulnerability Patching</span>
                <span className="text-cyan-400 font-bold">{patchCadence}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={patchCadence}
                onChange={(e) => setPatchCadence(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <span className="text-[10px] text-slate-500 block">Evaluates CodeQL, GitHub Copilot Autofix, and EDR containment speed.</span>
            </div>
          </div>

          {/* Right Column: Score Meter Display */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-8 border border-slate-800 bg-slate-900/80 flex flex-col items-center justify-center text-center space-y-4">
            <ScoreMeter score={calculatedScore} size={180} strokeWidth={14} />
            <div>
              <h3 className="text-lg font-bold text-white">Computed Security Index</h3>
              <p className="text-xs text-slate-400 mt-1">
                {calculatedScore >= 80 ? 'Excellent: Audit-ready with low breach probability.' : 'Action Required: Gaps detected in cloud coverage or patching.'}
              </p>
            </div>
            <button onClick={openDemoModal} className="gradient-btn px-6 py-2.5 text-xs font-bold text-white rounded-xl shadow">
              Lock In Posture Benchmark
            </button>
          </div>

        </div>
      </section>

      {/* RISK TIMELINE & AI RECOMMENDATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Risk Timeline Card */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Real-Time Risk Timeline</h3>
              <p className="text-xs text-slate-400">Chronological telemetry feed across integrated tools.</p>
            </div>
            <Activity className="w-5 h-5 text-cyan-400" />
          </div>

          <div className="space-y-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="flex justify-between text-slate-400 text-[10px]">
                <span>TODAY, 14:32 UTC</span>
                <span className="text-emerald-400 font-bold">Auto-Remediated</span>
              </div>
              <p className="text-white font-bold">GitHub Copilot Autofix closed CVE-2026-9812 in PR #412</p>
              <span className="text-slate-400 text-[11px] block">Repository: securestack-api-gateway</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="flex justify-between text-slate-400 text-[10px]">
                <span>TODAY, 09:15 UTC</span>
                <span className="text-cyan-400 font-bold">Telemetry Synced</span>
              </div>
              <p className="text-white font-bold">CrowdStrike Falcon contained suspicious PowerShell execution</p>
              <span className="text-slate-400 text-[11px] block">Endpoint: prod-k8s-node-04</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="flex justify-between text-slate-400 text-[10px]">
                <span>YESTERDAY, 18:44 UTC</span>
                <span className="text-amber-400 font-bold">Evidence Logged</span>
              </div>
              <p className="text-white font-bold">SOC 2 Control CC6.1 MFA verification evidence captured</p>
              <span className="text-slate-400 text-[11px] block">Source: Okta Identity Cloud</span>
            </div>
          </div>
        </div>

        {/* AI Prioritized Recommendation Stream */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Prioritized AI Remediation Queue</h3>
              <p className="text-xs text-slate-400">Order by security impact vs developer effort.</p>
            </div>
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-rose-500/20 text-rose-300">
                  Critical Impact
                </span>
                <span className="text-slate-400 text-[11px]">Effort: 5 Mins</span>
              </div>
              <h4 className="text-sm font-bold text-white">Restrict Wildcard S3 Bucket Access Policy</h4>
              <p className="text-xs text-slate-300">AWS IAM policy allows unauthenticated read on audit log bucket.</p>
              <button onClick={() => showToast('AI Terraform Patch generated for S3 IAM Policy!')} className="gradient-btn px-4 py-1.5 text-xs font-bold text-white rounded-lg">
                Generate Terraform Fix
              </button>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300">
                  High Impact
                </span>
                <span className="text-slate-400 text-[11px]">Effort: 15 Mins</span>
              </div>
              <h4 className="text-sm font-bold text-white">Enable Passwordless FIDO2 for Admin Users</h4>
              <p className="text-xs text-slate-300">3 admin accounts in Okta rely on SMS OTP instead of WebAuthn keys.</p>
              <button onClick={() => showToast('Okta Security Policy update triggered.')} className="glass-card hover:bg-slate-800 px-4 py-1.5 text-xs font-bold text-white rounded-lg border border-slate-700">
                Update Okta Policy
              </button>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};
