import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, ChevronRight, Menu, X, Search, Lock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Navbar = () => {
  const location = useLocation();
  const { openDemoModal } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Comparison Tool', path: '/compare', badge: 'Popular' },
    { name: 'Consulting', path: '/consulting' },
    { name: 'Industries', path: '/industries' },
    { name: 'Resources', path: '/resources' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-rose-600 p-0.5 shadow-lg shadow-pink-500/25 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#05050A] rounded-[10px] flex items-center justify-center">
                <Shield className="w-5 h-5 text-pink-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
                SecureStack <span className="text-pink-400 font-extrabold">AI</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">Know. Secure. Comply.</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                    isActive ? 'text-pink-400 font-semibold bg-pink-950/50 border border-pink-500/40 shadow-sm shadow-pink-500/20' : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/40">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/compare"
              className="p-2 text-slate-300 hover:text-pink-400 hover:bg-slate-900/60 rounded-lg transition-colors"
              title="Search Comparison Database"
            >
              <Search className="w-4 h-4" />
            </Link>

            <button
              onClick={openDemoModal}
              className="gradient-btn px-4 py-2 text-xs font-semibold text-white rounded-lg flex items-center gap-2 shadow-lg shadow-pink-500/25"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Book Demo</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg glass-card"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-slate-800 px-4 py-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 text-sm rounded-lg flex items-center justify-between ${
                  location.pathname === link.path ? 'bg-pink-950/60 text-pink-400 border border-pink-500/40' : 'text-slate-300 hover:bg-slate-900/50'
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase rounded bg-pink-500/20 text-pink-300">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openDemoModal();
              }}
              className="w-full gradient-btn py-3 text-sm font-semibold text-white rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25"
            >
              <Lock className="w-4 h-4" />
              <span>Book Enterprise Demo</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
