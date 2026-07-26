import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [user, setUser] = useState(null);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <AuthContext.Provider value={{
      isDemoModalOpen,
      openDemoModal,
      closeDemoModal,
      toastMessage,
      showToast,
      user,
      setUser
    }}>
      {children}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 glass-card bg-slate-900/90 border border-cyan-500/40 text-white px-5 py-4 rounded-xl shadow-2xl animate-bounce">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-sm font-medium">{toastMessage.message}</span>
        </div>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
