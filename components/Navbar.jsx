'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Flame, Menu as MenuIcon, X, PhoneCall, Clock } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { totalItemsCount, subtotal, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Why Order Direct', href: '#features' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-darkSlate-900/85 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-darkSlate-900/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Live Status */}
          <div className="flex items-center space-x-3">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-crimson-600 via-crimson-500 to-gold-500 flex items-center justify-center shadow-glow-crimson group-hover:scale-105 transition-transform duration-200">
                <Flame className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                  Royal <span className="text-gold-400 font-medium">Foods & Grill</span>
                </span>
                
                {/* Live Pulsing Status Badge */}
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-medium text-emerald-400 tracking-wide">
                    Open Now • Closes 2 AM
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Phone & Cart Trigger */}
          <div className="flex items-center space-x-3">
            
            {/* Quick Call Button (Desktop) */}
            <a
              href="tel:+923009202325"
              className="hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition-all text-xs font-medium text-slate-300"
              title="Call Kitchen Directly"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
              <span>0300 9202325</span>
            </a>

            {/* Floating Cart Trigger */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center space-x-2 sm:space-x-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-crimson-600 to-crimson-700 hover:from-crimson-500 hover:to-crimson-600 text-white font-semibold text-xs sm:text-sm shadow-glow-crimson transition-all border border-crimson-400/30"
              aria-label="View Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {totalItemsCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2.5 bg-gold-500 text-slate-950 text-[10px] font-black w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full flex items-center justify-center shadow-md ring-2 ring-darkSlate-900"
                  >
                    {totalItemsCount}
                  </motion.span>
                )}
              </div>
              <span className="hidden xs:inline">
                {totalItemsCount > 0 ? (
                  <span>Rs. {subtotal.toLocaleString()}</span>
                ) : (
                  <span>Cart</span>
                )}
              </span>
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-white/10 mt-3 pt-3 pb-2"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/10 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-2 flex items-center justify-between border-t border-white/5 px-2">
                  <div className="flex items-center space-x-2 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>4:00 PM – 2:00 AM</span>
                  </div>
                  <a
                    href="tel:+923009202325"
                    className="text-xs text-gold-400 font-semibold flex items-center gap-1 hover:underline"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>0300 9202325</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
