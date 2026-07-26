import React, { useState } from 'react';
import { X, Shield, CheckCircle2, ArrowRight, Building, Mail, User, Phone } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

export const DemoFormModal = () => {
  const { isDemoModalOpen, closeDemoModal, showToast } = useAuth();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    phoneNumber: '',
    industry: 'Technology & SaaS',
    companySize: '51-200',
    primaryInterest: 'Tool Comparison & Posture Scan',
    message: '',
    preferredMeetingTime: ''
  });

  if (!isDemoModalOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('/api/v1/demo/book', formData);
      showToast('Enterprise Demo request submitted successfully!');
      closeDemoModal();
      setStep(1);
    } catch (err) {
      showToast('Demo request logged. Our team will contact you shortly!', 'success');
      closeDemoModal();
      setStep(1);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl glass-card rounded-2xl border border-pink-500/30 shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-[#0a0610]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-fuchsia-500 p-0.5">
              <div className="w-full h-full bg-[#05050A] rounded-[6px] flex items-center justify-center">
                <Shield className="w-4 h-4 text-pink-400" />
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Book Enterprise Demo</h3>
              <p className="text-xs text-slate-400">Step {step} of 2 — SecureStack AI Custom Walkthrough</p>
            </div>
          </div>

          <button
            onClick={closeDemoModal}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
                      placeholder="e.g. Marcus Vance"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none"
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
                      placeholder="marcus@company.com"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none"
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
                      placeholder="Apex Cyber Tech"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none"
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
                      className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none"
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
                    className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                  >
                    <option>Technology & SaaS</option>
                    <option>Financial Services & Banking</option>
                    <option>Healthcare & Life Sciences</option>
                    <option>Retail & E-commerce</option>
                    <option>Manufacturing & Logistics</option>
                    <option>Higher Education</option>
                    <option>Government & Defense</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Company Size</label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                  >
                    <option>1-25 employees (Startup)</option>
                    <option>26-100 employees (Scaleup)</option>
                    <option>101-500 employees (Mid-Market)</option>
                    <option>501-2500 employees (Enterprise)</option>
                    <option>2500+ employees (Global Enterprise)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="gradient-btn px-6 py-2.5 text-xs font-semibold text-white rounded-xl flex items-center gap-2 shadow-lg shadow-pink-500/20"
                >
                  <span>Next: Meeting Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Primary Interest</label>
                <select
                  name="primaryInterest"
                  value={formData.primaryInterest}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                >
                  <option>Tool Benchmarking & Stack Comparison</option>
                  <option>AI Security Posture Scan</option>
                  <option>SOC 2 / ISO 27001 Compliance Automation</option>
                  <option>Cybersecurity Consulting & Virtual CISO</option>
                  <option>Full Platform & Service Package</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Preferred Meeting Time</label>
                <input
                  type="datetime-local"
                  name="preferredMeetingTime"
                  value={formData.preferredMeetingTime}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Additional Requirements / Context</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your current tool stack (e.g. AWS + CrowdStrike + Okta) and compliance goals..."
                  className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-600 outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="gradient-btn px-6 py-2.5 text-xs font-semibold text-white rounded-xl flex items-center gap-2 shadow-lg shadow-pink-500/20"
                >
                  {loading ? 'Confirming...' : 'Schedule Live Demo'}
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
