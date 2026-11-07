'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Toast() {
  const { toastMessage } = useCart();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 max-w-[calc(100vw-2rem)] sm:max-w-sm pointer-events-none"
        >
          <div className="glass-panel px-4 py-3 rounded-2xl border border-gold-500/30 shadow-2xl flex items-center space-x-3 text-white">
            <div className="w-8 h-8 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/30">
              <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '4s' }} />
            </div>
            <p className="text-xs sm:text-sm font-semibold">{toastMessage}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
