import React, { useState } from 'react';
import { Search, CheckCircle2, XCircle, ChevronDown, ChevronUp, Shield, Sparkles } from 'lucide-react';
import { useCompare } from '../../context/CompareContext';
import { useAuth } from '../../context/AuthContext';

export const ComparisonMatrix = () => {
  const { products, selectedProducts, selectedIds, toggleProductSelection, searchQuery, setSearchQuery, activeCategory, setActiveCategory } = useCompare();
  const { openDemoModal } = useAuth();

  const [expandedSections, setExpandedSections] = useState({
    pricing: true,
    features: true,
    compliance: true,
    ai: true,
    prosCons: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const categories = ['All', 'Cloud Provider & Security', 'Endpoint & XDR Security', 'DevSecOps & Code Security', 'Identity & Access Management (IAM)'];

  const filteredProducts = products.filter(p => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesQuery = searchQuery === '' || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.vendor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-8">
      
      {/* Search & Category Filter Header */}
      <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products (e.g., CrowdStrike, AWS, Okta)..."
              className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none transition-colors"
            />
          </div>

          {/* Selected Count Indicator */}
          <div className="flex items-center gap-3 text-xs">
            <span className="text-slate-400">Comparing <strong className="text-pink-400 font-bold">{selectedProducts.length}</strong> of 3 products</span>
            {selectedProducts.length > 0 && (
              <span className="px-2.5 py-1 rounded-full bg-pink-950 text-pink-300 border border-pink-500/30 text-[10px] uppercase font-bold">
                Live Diff Active
              </span>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold shadow-lg shadow-pink-500/25'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Available Products Quick Dock */}
        <div className="space-y-2 pt-2">
          <label className="text-xs font-semibold text-slate-300 block">Select Products to Benchmark Side-by-Side (Max 3):</label>
          <div className="flex flex-wrap gap-2">
            {filteredProducts.map((p) => {
              const isSelected = selectedIds.includes(p.id) || selectedIds.includes(p.slug);
              return (
                <button
                  key={p.id}
                  onClick={() => toggleProductSelection(p.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 border transition-all ${
                    isSelected
                      ? 'bg-pink-950/80 border-pink-400 text-pink-300 shadow-md shadow-pink-500/20'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span>{p.name}</span>
                  {isSelected ? <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" /> : <span className="text-[10px] text-slate-600">+</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Comparison Grid Table */}
      {selectedProducts.length === 0 ? (
        <div className="text-center py-16 glass-card rounded-2xl border border-slate-800 space-y-4">
          <Shield className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-white">No Security Products Selected</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">Select at least one security software product from the list above to view the detailed capability matrix.</p>
        </div>
      ) : (
        <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          
          {/* Header Row: Product Titles & Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 bg-[#0a0510] border-b border-slate-800 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-6 flex flex-col justify-center bg-slate-950">
              <span className="text-xs uppercase tracking-wider font-extrabold text-pink-400">SecureStack AI Index</span>
              <h3 className="text-xl font-extrabold text-white mt-1">Side-by-Side Matrix</h3>
              <p className="text-xs text-slate-400 mt-1">Comparing technical capabilities, pricing, and compliance posture.</p>
            </div>

            {selectedProducts.map((p) => (
              <div key={p.id} className="p-6 space-y-3 relative group">
                <button
                  onClick={() => toggleProductSelection(p.id)}
                  className="absolute top-4 right-4 text-slate-500 hover:text-rose-400 text-xs font-bold"
                  title="Remove from comparison"
                >
                  ✕
                </button>

                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-slate-900 text-pink-400 border border-slate-800">
                  {p.category}
                </div>
                
                <h4 className="text-lg font-extrabold text-white">{p.name}</h4>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-amber-400 font-bold flex items-center gap-1">★ {p.rating}</span>
                  <span>({p.reviewCount.toLocaleString()} reviews)</span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={openDemoModal}
                    className="w-full gradient-btn py-2 text-xs font-bold text-white rounded-lg shadow shadow-pink-500/20"
                  >
                    Benchmark vs My Stack
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ACCORDION 1: PRICING & LICENSING */}
          <div className="border-b border-slate-800">
            <button
              onClick={() => toggleSection('pricing')}
              className="w-full px-6 py-4 flex items-center justify-between bg-slate-950/80 hover:bg-slate-950 text-left transition-colors"
            >
              <span className="text-xs font-extrabold uppercase tracking-wider text-pink-400">1. Pricing & Licensing Model</span>
              {expandedSections.pricing ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {expandedSections.pricing && (
              <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-xs bg-slate-950/40">
                <div className="p-4 font-bold text-slate-400 flex items-center">Starting Price</div>
                {selectedProducts.map(p => (
                  <div key={p.id} className="p-4 text-white font-semibold">{p.pricing.startingPrice}</div>
                ))}

                <div className="p-4 font-bold text-slate-400 flex items-center border-t border-slate-800">Billing Model</div>
                {selectedProducts.map(p => (
                  <div key={p.id} className="p-4 text-slate-300 border-t border-slate-800">{p.pricing.billingModel}</div>
                ))}

                <div className="p-4 font-bold text-slate-400 flex items-center border-t border-slate-800">Free Trial</div>
                {selectedProducts.map(p => (
                  <div key={p.id} className="p-4 border-t border-slate-800">
                    {p.pricing.freeTrial ? <span className="text-pink-400 font-bold">Available (14-30 Days)</span> : <span className="text-slate-500">Contact Sales</span>}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ACCORDION 2: SECURITY FEATURES */}
          <div className="border-b border-slate-800">
            <button
              onClick={() => toggleSection('features')}
              className="w-full px-6 py-4 flex items-center justify-between bg-slate-950/80 hover:bg-slate-950 text-left transition-colors"
            >
              <span className="text-xs font-extrabold uppercase tracking-wider text-pink-400">2. Core Security & Threat Capabilities</span>
              {expandedSections.features ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {expandedSections.features && (
              <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-xs bg-slate-950/40">
                <div className="p-4 font-bold text-slate-400 flex items-center">Real-Time Threat Detection</div>
                {selectedProducts.map(p => (
                  <div key={p.id} className="p-4 flex items-center gap-2">
                    {p.features.threatDetection ? <CheckCircle2 className="w-4 h-4 text-pink-400" /> : <XCircle className="w-4 h-4 text-rose-500" />}
                    <span className={p.features.threatDetection ? 'text-white font-medium' : 'text-slate-500'}>
                      {p.features.threatDetection ? 'Supported' : 'N/A'}
                    </span>
                  </div>
                ))}

                <div className="p-4 font-bold text-slate-400 flex items-center border-t border-slate-800">Endpoint Detection & Response (EDR)</div>
                {selectedProducts.map(p => (
                  <div key={p.id} className="p-4 flex items-center gap-2 border-t border-slate-800">
                    {p.features.edr ? <CheckCircle2 className="w-4 h-4 text-pink-400" /> : <XCircle className="w-4 h-4 text-slate-600" />}
                    <span className={p.features.edr ? 'text-white font-medium' : 'text-slate-500'}>
                      {p.features.edr ? 'Native EDR / XDR' : 'Not Primary Focus'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ACCORDION 3: COMPLIANCE FRAMEWORKS */}
          <div className="border-b border-slate-800">
            <button
              onClick={() => toggleSection('compliance')}
              className="w-full px-6 py-4 flex items-center justify-between bg-slate-950/80 hover:bg-slate-950 text-left transition-colors"
            >
              <span className="text-xs font-extrabold uppercase tracking-wider text-pink-400">3. Compliance Framework Support</span>
              {expandedSections.compliance ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {expandedSections.compliance && (
              <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-xs bg-slate-950/40">
                <div className="p-4 font-bold text-slate-400 flex items-center">Supported Standards</div>
                {selectedProducts.map(p => (
                  <div key={p.id} className="p-4 space-y-1.5">
                    {p.compliance.map(fw => (
                      <span key={fw} className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900 text-pink-300 border border-slate-800 mr-1 mb-1">
                        {fw}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ACCORDION 4: AI CAPABILITIES */}
          <div className="border-b border-slate-800">
            <button
              onClick={() => toggleSection('ai')}
              className="w-full px-6 py-4 flex items-center justify-between bg-slate-950/80 hover:bg-slate-950 text-left transition-colors"
            >
              <span className="text-xs font-extrabold uppercase tracking-wider text-pink-400">4. Generative AI Capabilities</span>
              {expandedSections.ai ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {expandedSections.ai && (
              <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-xs bg-slate-950/40">
                <div className="p-4 font-bold text-slate-400 flex items-center">AI Security Assistant</div>
                {selectedProducts.map(p => (
                  <div key={p.id} className="p-4 text-slate-200 leading-relaxed">
                    <Sparkles className="w-4 h-4 text-pink-400 inline mr-1.5" />
                    {p.aiCapabilities}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ACCORDION 5: PROS & CONS */}
          <div>
            <button
              onClick={() => toggleSection('prosCons')}
              className="w-full px-6 py-4 flex items-center justify-between bg-slate-950/80 hover:bg-slate-950 text-left transition-colors"
            >
              <span className="text-xs font-extrabold uppercase tracking-wider text-pink-400">5. Expert Pros & Cons Verdict</span>
              {expandedSections.prosCons ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {expandedSections.prosCons && (
              <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-xs bg-slate-950/40">
                <div className="p-4 font-bold text-slate-400 flex items-center">Strengths & Trade-offs</div>
                {selectedProducts.map(p => (
                  <div key={p.id} className="p-4 space-y-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-pink-400 block mb-1">Key Strengths</span>
                      <ul className="space-y-1 text-slate-300">
                        {p.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-pink-400 font-bold">+</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase text-rose-400 block mb-1">Considerations</span>
                      <ul className="space-y-1 text-slate-400">
                        {p.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-rose-400 font-bold">-</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
};
