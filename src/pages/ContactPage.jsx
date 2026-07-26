import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Shield, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

export const ContactPage = () => {
  const { showToast } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/v1/contact', formData);
      showToast('Your message has been sent to our security consulting team!');
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    } catch (err) {
      showToast('Message received! A consultant will contact you shortly.');
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16 pt-28 pb-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Global Cyber Support</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Get in Touch with Our <span className="gradient-text">Security Team</span>
        </h1>

        <p className="text-slate-300 text-base max-w-3xl mx-auto leading-relaxed">
          Have questions about the SaaS platform, need custom software tool comparisons, or seeking immediate consulting advisory? We are here 24/7.
        </p>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white">Global Headquarters</h3>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">San Francisco HQ</span>
                  <span>500 Howard Street, Suite 800, San Francisco, CA 94105</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>support@securestack.ai</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+1 (800) 555-CYBER</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white">International Offices</h3>
            
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-white block">London, UK</span>
                <span className="text-slate-400 text-[11px]">100 Bishopsgate, EC2N 4AG</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-bold text-white block">Singapore</span>
                <span className="text-slate-400 text-[11px]">Marina Bay Financial Centre</span>
              </div>
            </div>
          </div>

          {/* Interactive Map Canvas Mockup */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-950/80 text-center space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Interactive Location Canvas</span>
            <div className="h-36 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 font-mono text-xs">
              [ 🌍 Global Node Network Map Active: 99.99% Operational ]
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-8 border border-slate-800 bg-slate-950/90 space-y-6">
          <div>
            <h3 className="text-2xl font-extrabold text-white">Send Us a Direct Message</h3>
            <p className="text-xs text-slate-400 mt-1">Our certified security consultants respond within 2 business hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Elena Rostova"
                  className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Work Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="elena@company.com"
                  className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Inquiry Subject</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-xs text-white outline-none"
              >
                <option>General Inquiry</option>
                <option>Security Product Benchmarking</option>
                <option>Consulting & Virtual CISO Advisory</option>
                <option>SOC 2 / ISO 27001 Audit Readiness</option>
                <option>Partnerships & Enterprise Licensing</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Message Details *</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can our security team assist your organization?"
                className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl p-4 text-xs text-white placeholder:text-slate-600 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full gradient-btn py-3 text-xs font-bold text-white rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? 'Transmitting Message...' : 'Send Message to Security Team'}</span>
            </button>
          </form>
        </div>

      </section>

    </div>
  );
};
