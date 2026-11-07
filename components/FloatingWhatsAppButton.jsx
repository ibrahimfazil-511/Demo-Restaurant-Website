'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsAppButton() {
  const handleQuickChat = () => {
    const text = encodeURIComponent(
      "Salam Royal Foods! 🍔 I'd like to ask about today's menu specials and delivery time."
    );
    window.open(`https://wa.me/923342850819?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30">
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleQuickChat}
        className="flex items-center space-x-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-glow-emerald border border-emerald-400/30 group"
        aria-label="Direct Kitchen WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white/20" />
        <span className="text-xs sm:text-sm">WhatsApp Order</span>
      </motion.button>
    </div>
  );
}
