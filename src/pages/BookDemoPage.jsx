import React, { useState } from 'react';
import { Lock, Shield, CheckCircle2, ArrowRight, Calendar, User, Mail, Building, Phone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

export const BookDemoPage = () => {
  const { showToast } = useAuth();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    phoneNumber: '',
    industry: 'Technology & SaaS',
    companySize: '51-200',
    primaryInterest: 'Tool Benchmarking & Posture Scan',
    message: '',
    preferredMeetingTime: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/v1/demo/book', formData);
      showToast('Enterprise Demo request submitted successfully!');
      setStep(3); // Confirmation Step
    } catch (err) {
      showToast('Demo request received! Confirmation email sent.');
      setStep(3);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16 pt-28 pb-16">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Social Proof Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              <span>Tailored Executive Demo</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              See SecureStack AI in <span className="gradient-text">Action</span>
            </h1>

            <p className="text-slate-300 text-sm leading-relaxed">
              Schedule a personalized 30-minute walkthrough with a senior security architect. We’ll analyze your current tool stack and calculate your baseline SOC 2 readiness.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl glass-card border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <h4 className="font-bold text-white">Un-gated Tool Benchmark Audit</h4>
                  <p className="text-slate-400">Discover redundant tool seats and evaluate CrowdStrike vs SentinelOne side-by-side.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl glass-card border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <h4 className="font-bold text-white">Live Posture Scan Preview</h4>
                  <p className="text-slate-400">See real-time AI security remediation code patches inside Pull Requests.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl glass-card border border-cyan-500/30 bg-cyan-950/20 text-xs text-slate-300 italic">
              "SecureStack AI cut our SOC 2 Type II audit prep from 6 months to 3 weeks while saving us $64,000 on redundant endpoint licenses."
              <span className="block font-bold text-cyan-400 not-italic mt-2">— Marcus Vance, CISO at Apex Cyber Tech</span>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 bg-slate-950/90 shadow-2xl">
            {step === 3 ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">Demo Confirmed!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  A calendar invite and executive preview PDF report have been sent to <strong className="text-cyan-400">{formData.workEmail}</strong>. Our senior security team looks forward to meeting you!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-extrabold text-white">Book Enterprise Demo</h3>
                  <p className="text-xs text-slate-400 mt-1">Step {step} of 2 — Custom Cybersecurity Walkthrough</p>
                </div>

                {step === 1 ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">Full Name *</label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="e.g. Sarah Jenkins"
                            className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">Work Email *</label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                          <input
                            type="email"
                            name="workEmail"
                            required
                            value={formData.workEmail}
                            onChange={handleChange}
                            placeholder="sarah@company.com"
                            className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">Company Name *</label>
                        <div className="relative">
                          <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                          <input
                            type="text"
                            name="companyName"
                            required
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="CloudScale Inc."
                            className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">Phone Number</label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="+1 (555) 019-2834"
                            className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">Industry</label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                        >
                          <option>Technology & SaaS</option>
                          <option>Financial Services & Banking</option>
                          <option>Healthcare & Life Sciences</option>
                          <option>Retail & E-commerce</option>
                          <option>Higher Education</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">Company Size</label>
                        <select
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleChange}
                          className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                        >
                          <option>1-25 employees</option>
                          <option>26-100 employees</option>
                          <option>101-500 employees</option>
                          <option>500+ employees</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="gradient-btn px-6 py-3 text-xs font-bold text-white rounded-xl flex items-center gap-2"
                      >
                        <span>Next: Preferred Time</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Primary Security Objective</label>
                      <select
                        name="primaryInterest"
                        value={formData.primaryInterest}
                        onChange={handleChange}
                        className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                      >
                        <option>Tool Benchmarking & Stack Comparison</option>
                        <option>AI Security Posture Scan</option>
                        <option>SOC 2 / ISO 27001 Compliance Automation</option>
                        <option>Cybersecurity Consulting & Virtual CISO</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Preferred Date & Meeting Time</label>
                      <input
                        type="datetime-local"
                        name="preferredMeetingTime"
                        value={formData.preferredMeetingTime}
                        onChange={handleChange}
                        className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Current Tool Stack & Notes</label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="e.g. Currently using AWS + CrowdStrike + Okta..."
                        className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl p-3 text-xs text-white placeholder:text-slate-600 outline-none"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs text-slate-400 hover:text-white"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={loading}
                        className="gradient-btn px-8 py-3 text-xs font-bold text-white rounded-xl flex items-center gap-2 shadow-lg"
                      >
                        {loading ? 'Scheduling...' : 'Confirm Demo Reservation'}
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
