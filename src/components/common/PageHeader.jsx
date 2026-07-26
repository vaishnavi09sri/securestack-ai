import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

// Maps pathnames to readable labels
const BREADCRUMB_MAP = {
  '': 'Home',
  'product': 'Platform',
  'solutions': 'Solutions',
  'compare': 'Compare Tools',
  'consulting': 'Consulting',
  'industries': 'Industries',
  'resources': 'Resources',
  'pricing': 'Pricing',
  'about': 'About Us',
  'contact': 'Contact',
  'book-demo': 'Book a Demo',
};

/**
 * PageHeader — Full-width animated hero banner for interior pages.
 * Props:
 *   badge     — small pill label above the heading (optional)
 *   title     — H1 heading (required)
 *   subtitle  — paragraph text below title (optional)
 *   gradient  — CSS gradient for the radial background glow (optional)
 *   actions   — array of { label, href, variant: 'primary'|'ghost' } (optional)
 */
export const PageHeader = ({
  badge,
  title,
  subtitle,
  gradient = 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(236,72,153,0.22) 0%, transparent 70%)',
  actions = [],
}) => {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <section
      className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-pink-500/10"
      style={{ background: `#05050A ${gradient}` }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#ec4899 1px, transparent 1px), linear-gradient(90deg, #ec4899 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-16 right-1/4 w-64 h-64 bg-pink-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-fuchsia-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-8"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-pink-400 transition-colors">
            <Home size={11} /> Home
          </Link>
          {segments.map((seg, i) => (
            <React.Fragment key={seg}>
              <ChevronRight size={11} className="text-gray-700" />
              {i === segments.length - 1 ? (
                <span className="text-pink-400">{BREADCRUMB_MAP[seg] ?? seg}</span>
              ) : (
                <Link to={`/${segments.slice(0, i + 1).join('/')}`} className="hover:text-pink-400 transition-colors">
                  {BREADCRUMB_MAP[seg] ?? seg}
                </Link>
              )}
            </React.Fragment>
          ))}
        </motion.nav>

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-medium uppercase tracking-widest mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            {badge}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl font-black tracking-tight text-white mb-5 leading-[1.1]"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8"
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTA Actions */}
        {actions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {actions.map((action) => (
              <Link
                key={action.label}
                to={action.href}
                className={
                  action.variant === 'ghost'
                    ? 'px-6 py-2.5 rounded-lg border border-pink-500/30 text-pink-400 text-sm font-medium hover:bg-pink-500/10 transition-all'
                    : 'px-6 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white text-sm font-semibold hover:shadow-[0_0_24px_rgba(236,72,153,0.45)] transition-all hover:scale-105'
                }
              >
                {action.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
