'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsAppButton() {
  const handleQuickChat = () => {
    const text = encodeURIComponent(
      "Salam Royal Foods! 🍔 I'd like to ask about today's menu specials and delivery time."
    );
    window.open(`https://wa.me/923009202325?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleQuickChat}
        className="flex items-center space-x-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-glow-emerald border border-emerald-400/30 group"
        aria-label="Direct Kitchen WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white/20" />
        <span className="hidden sm:inline">WhatsApp Order</span>
      </motion.button>
    </div>
  );
}
