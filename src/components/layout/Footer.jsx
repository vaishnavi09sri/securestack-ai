import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, CheckCircle2, Lock, Terminal, Globe, Share2, Code, Mail } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Footer = () => {
  const { showToast } = useAuth();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast('Subscribed to SecureStack AI Cybersecurity Intelligence Brief!');
    setEmail('');
  };

  return (
    <footer className="bg-[#030307] border-t border-slate-800/80 text-slate-400 text-sm relative overflow-hidden">
      {/* Subtle Background Glow in Pink */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-pink-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-rose-600 p-0.5 shadow-lg shadow-pink-500/20">
                <div className="w-full h-full bg-[#05050A] rounded-[10px] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-pink-400" />
                </div>
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                SecureStack <span className="text-pink-400 font-extrabold">AI</span>
              </span>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The AI-powered security intelligence platform combining automated posture assessment, live security tool benchmarking, continuous compliance tracking, and elite cybersecurity consulting.
            </p>

            {/* Newsletter Input */}
            <form onSubmit={handleSubscribe} className="space-y-2 pt-2 max-w-sm">
              <label className="text-xs font-semibold text-slate-300 block">
                Subscribe to Cybersecurity & AI Briefing
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter.ciso@company.com"
                  className="bg-slate-900/80 border border-slate-800 focus:border-pink-500/80 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-600 w-full outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="gradient-btn px-4 py-2 text-xs font-semibold text-white rounded-lg flex items-center gap-1.5 shrink-0 shadow-lg shadow-pink-500/20"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Live System Operational Badge */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="font-mono text-[11px] text-pink-400">All Systems Operational (99.99% SLA)</span>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Platform & Tools</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/product" className="hover:text-pink-400 transition-colors">AI Posture Scanner</Link></li>
              <li><Link to="/compare" className="hover:text-pink-400 transition-colors font-medium text-pink-400">Live Comparison Tool</Link></li>
              <li><Link to="/product" className="hover:text-pink-400 transition-colors">Compliance Matrix</Link></li>
              <li><Link to="/product" className="hover:text-pink-400 transition-colors">Risk Timeline</Link></li>
              <li><Link to="/pricing" className="hover:text-pink-400 transition-colors">Pricing & Plans</Link></li>
            </ul>
          </div>

          {/* Column 3: Consulting & Verticals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Services & Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/consulting" className="hover:text-pink-400 transition-colors">Security Audit</Link></li>
              <li><Link to="/consulting" className="hover:text-pink-400 transition-colors">Cloud Security Hardening</Link></li>
              <li><Link to="/consulting" className="hover:text-pink-400 transition-colors">Zero Trust Architecture</Link></li>
              <li><Link to="/industries" className="hover:text-pink-400 transition-colors">Healthcare Security</Link></li>
              <li><Link to="/industries" className="hover:text-pink-400 transition-colors">Financial Cyber Compliance</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources & Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Resources & Company</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/resources" className="hover:text-pink-400 transition-colors">Security Blog & News</Link></li>
              <li><Link to="/resources" className="hover:text-pink-400 transition-colors">Whitepapers & Guides</Link></li>
              <li><Link to="/about" className="hover:text-pink-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-pink-400 transition-colors">Contact Support</Link></li>
              <li><Link to="/book-demo" className="hover:text-pink-400 transition-colors font-medium text-pink-400">Book Enterprise Demo</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Certifications */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4 text-slate-500">
            <span>© 2026 SecureStack AI Inc. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-pink-400" /> SOC 2 Type II Certified</span>
            <span>•</span>
            <span>ISO 27001</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="#github" className="hover:text-pink-400 transition-colors" title="Developer Ecosystem"><Code className="w-4 h-4" /></a>
            <a href="#twitter" className="hover:text-pink-400 transition-colors" title="Social Intelligence"><Share2 className="w-4 h-4" /></a>
            <a href="#linkedin" className="hover:text-pink-400 transition-colors" title="Global Network"><Globe className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
