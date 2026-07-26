import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Sliders, Home, Search } from 'lucide-react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Platform', href: '/product' },
  { label: 'Compare Tools', href: '/compare' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const NotFoundPage = () => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-lg w-full text-center space-y-8">

        {/* Glowing 404 */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative inline-block">
            <span className="text-[10rem] font-black text-pink-500/10 select-none leading-none">404</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center">
                <ShieldAlert className="w-10 h-10 text-pink-400 animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-widest block">
            Error 404 • Signal Lost
          </span>
          <h1 className="text-3xl font-extrabold text-white">Node Not Found in Secure Sector</h1>
          <p className="text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
            The requested path or resource node does not exist or has been relocated to an encrypted subnet. Check the URL or navigate using the links below.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link to="/" className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_24px_rgba(236,72,153,0.4)] hover:scale-105 transition-all">
            <Home size={16} /> Return to Command Center
          </Link>
          <Link to="/compare" className="px-6 py-3 rounded-xl border border-pink-500/30 text-pink-400 font-medium flex items-center justify-center gap-2 hover:bg-pink-500/10 transition-all">
            <Sliders size={16} /> Open Comparison Tool
          </Link>
        </motion.div>

        {/* Quick nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-2xl p-6 border border-pink-500/15"
        >
          <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest">Quick Navigation</p>
          <div className="flex flex-wrap justify-center gap-2">
            {links.map(l => (
              <Link key={l.href} to={l.href} className="px-3 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-medium hover:bg-pink-500/20 transition-all">
                {l.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
