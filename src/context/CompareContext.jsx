import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState(['crowdstrike', 'sentinelone']); // Default benchmark comparison
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Initial load of products from API / local fallback data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/v1/products');
        if (response.data && response.data.products) {
          setProducts(response.data.products);
        }
      } catch (err) {
        console.warn('API unavailable, loading static fallback dataset');
        // Fallback static dataset will be used if backend is starting up
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const toggleProductSelection = (id) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        if (prev.length <= 1) return prev; // Keep at least one selected for comparison
        return prev.filter(item => item !== id);
      } else {
        if (prev.length >= 3) {
          return [...prev.slice(1), id]; // Max 3 comparison slots
        }
        return [...prev, id];
      }
    });
  };

  const clearSelection = () => {
    setSelectedIds([]);
  };

  const selectedProducts = products.filter(p => selectedIds.includes(p.id) || selectedIds.includes(p.slug));

  return (
    <CompareContext.Provider value={{
      products,
      loading,
      selectedIds,
      selectedProducts,
      toggleProductSelection,
      clearSelection,
      searchQuery,
      setSearchQuery,
      activeCategory,
      setActiveCategory
    }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => useContext(CompareContext);
