import React, { useState } from 'react';
import { Shield, ArrowRight, CheckCircle2, Lock, Cpu, FileText, Layers, Users, Zap, Award } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { PageHeader } from '../components/common/PageHeader';
import { SectionReveal } from '../components/common/SectionReveal';

export const ConsultingPage = () => {
  const { openDemoModal } = useAuth();

  const services = [
    {
      id: 'audit',
      title: 'Security Audit & Penetration Testing',
      category: 'Offensive Security',
      icon: Shield,
      overview: 'Comprehensive threat simulation, cloud infrastructure penetration testing, and web application vulnerability assessment.',
      process: ['Discovery & Scope Mapping', 'Automated & Manual Exploitation', 'Root Cause Risk Analysis', 'Executive Remediation Roadmap'],
      deliverables: ['Executive Board Report', 'Developer Vulnerability Log', 'Verified Re-test Certificate']
    },
    {
      id: 'cloud',
      title: 'Cloud Security Architecture & Hardening',
      category: 'Infrastructure',
      icon: Cpu,
      overview: 'Multi-cloud posture hardening across AWS, Azure, and GCP to eliminate IAM drift, unencrypted buckets, and open ports.',
      process: ['Cloud Configuration Audit', 'IAM Least-Privilege Design', 'Infrastructure-as-Code Policy Engine', 'Continuous Guardrail Setup'],
      deliverables: ['Terraform Hardening Modules', 'Cloud Security Matrix PDF', 'CIS Benchmark Scorecard']
    },
    {
      id: 'zerotrust',
      title: 'Zero Trust Transformation',
      category: 'Identity & Access',
      icon: Lock,
      overview: 'Transition your organization from legacy perimeter defenses to identity-first continuous verification using Okta, Auth0, and FIDO2.',
      process: ['Identity Provider Audit', 'Conditional Access Policy Design', 'Phishing-Resistant MFA Rollout', 'Micro-segmentation Setup'],
      deliverables: ['Zero Trust Blueprint', 'Okta/Auth0 Policy Templates', 'Passwordless Deployment Guide']
    },
    {
      id: 'compliance',
      title: 'Regulatory Compliance Readiness',
      category: 'GRC & Audit',
      icon: Award,
      overview: 'Turnkey audit prep for SOC 2 Type II, ISO 27001:2022, HIPAA, GDPR, and PCI DSS 4.0 with guaranteed auditor acceptance.',
      process: ['Gap Identification', 'Evidence Automation Setup', 'Policy & Procedure Authoring', 'Mock Auditor Review'],
      deliverables: ['Complete Auditor Evidence Vault', '100% Policy Manual', 'SOC 2 / ISO Readiness Certificate']
    },
    {
      id: 'risk',
      title: 'Cyber Risk Assessment & Threat Modeling',
      category: 'Strategic Advisory',
      icon: Zap,
      overview: 'Quantitative financial risk modeling estimating potential breach exposure and prioritizing security tool budget ROI.',
      process: ['Asset Valuation', 'Threat Vector Identification', 'FAIR Methodology Risk Calculation', 'Executive Action Plan'],
      deliverables: ['FAIR Risk Exposure Model', 'Board-Level Threat Brief', 'Budget Prioritization Matrix']
    },
    {
      id: 'arch',
      title: 'Enterprise Architecture Review',
      category: 'Architecture',
      icon: Layers,
      overview: 'In-depth blueprint evaluation of SaaS platforms, microservice topologies, and data pipelines against modern cyber standards.',
      process: ['Threat Model Analysis', 'Data Flow Diagramming', 'Cryptography Inspection', 'Resilience Validation'],
      deliverables: ['Target State Architecture Map', 'Threat Model Diagram', 'Security Design Patterns']
    },
    {
      id: 'implementation',
      title: 'Implementation & SIEM Support',
      category: 'Operations',
      icon: FileText,
      overview: 'Hands-on deployment of EDR sensors (CrowdStrike, SentinelOne), SIEM ingestion (Splunk, Datadog), and SOAR playbooks.',
      process: ['Sensor Deployment Planning', 'Log Source Ingestion', 'SOAR Alert Playbook Setup', 'SOC Team Handover'],
      deliverables: ['Configured SIEM/EDR Instance', 'Custom SOAR Automation Scripts', 'SOC Operational Playbooks']
    },
    {
      id: 'training',
      title: 'Developer Security Awareness & Drills',
      category: 'Human Risk',
      icon: Users,
      overview: 'Tailored secure coding workshops for engineering teams combined with sophisticated phishing simulations.',
      process: ['Baseline Phishing Test', 'Interactive Secure Code Workshop', 'Targeted Remediation Modules', 'Quarterly Progress Drill'],
      deliverables: ['Secure Coding Certification', 'Phishing Resilience Scorecard', 'Developer Cheat Sheets']
    }
  ];

  return (
    <div>
      <PageHeader
        badge="Cybersecurity Advisory & Operations"
        title={<>Expert Cybersecurity<br /><span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Consulting Services</span></>}
        subtitle="From hands-on penetration testing and cloud hardening to Virtual CISO advisory and SOC 2 audit readiness — delivered by senior security architects."
        actions={[
          { label: 'Book Discovery Call', href: '/book-demo', variant: 'primary' },
          { label: 'See Pricing', href: '/pricing', variant: 'ghost' },
        ]}
      />

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => {
          const IconComp = service.icon;
          return (
            <div key={service.id} className="glass-card glass-card-hover rounded-2xl p-8 border border-slate-800 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-slate-800 text-cyan-300 border border-slate-700">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white">{service.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{service.overview}</p>

                {/* 4-Step Process */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">4-Step Engagement Process:</span>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded bg-cyan-500/20 text-cyan-400 font-bold text-[10px] flex items-center justify-center shrink-0">{idx + 1}</span>
                        <span className="truncate">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Key Deliverables:</span>
                  {service.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={openDemoModal}
                  className="w-full gradient-btn py-2.5 text-xs font-bold text-white rounded-xl flex items-center justify-center gap-2"
                >
                  <span>Request {service.title} Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
};
