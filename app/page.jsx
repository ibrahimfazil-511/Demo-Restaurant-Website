'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import FoodMenu from '@/components/FoodMenu';
import ValuePitch from '@/components/ValuePitch';
import { 
  ShoppingBag, 
  MessageCircle, 
  Bike, 
  UtensilsCrossed, 
  ShieldCheck, 
  Heart,
  Flame,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const orderingSteps = [
    {
      step: '01',
      title: 'Pick Your Favorites',
      desc: 'Browse our fresh smash burgers, creamy malai boti, stuffed crust pizzas, and family deals.',
      icon: <UtensilsCrossed className="w-6 h-6 text-crimson-400" />,
    },
    {
      step: '02',
      title: '1-Click WhatsApp Order',
      desc: 'Tap complete order to automatically generate an itemized bill sent directly to our kitchen WhatsApp.',
      icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
    },
    {
      step: '03',
      title: 'Hot & Fresh 30-Min Delivery',
      desc: 'Our direct rider delivers steaming hot food to your door in FB Area & Hussainabad with Cash on Delivery.',
      icon: <Bike className="w-6 h-6 text-gold-400" />,
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Three Simple Steps Banner */}
      <section className="py-12 border-y border-white/5 bg-darkSlate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {orderingSteps.map((step, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-white/10 flex items-start space-x-4 group hover:border-gold-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-black text-gold-400">STEP {step.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-0.5">{step.title}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dynamic Filterable Food Menu */}
      <FoodMenu />

      {/* 4. Client Value Proposition & Aggregator Comparison */}
      <ValuePitch />

      {/* 5. Hussainabad Heritage & Quality Assurance Banner */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/15 p-6 sm:p-8 md:p-12">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-crimson-600/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>The Hussainabad Legacy</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Taste the Real Karachi Midnight Street Food Vibe
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Located right on Hussainabad Food Street, Royal Foods & Grill has been serving Karachiites with unmatched charcoal grilling, handcrafted burger patties, and decadent dairy malai boti. When you order direct, you support local culinary craftsmen while enjoying the highest quality ingredients.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-4 pt-2">
                  <div className="flex items-center space-x-2 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>100% Halal Certified Meats</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                    <Flame className="w-4 h-4 text-crimson-400" />
                    <span>Real Hardwood Lump Charcoal</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                    <Heart className="w-4 h-4 text-rose-400" />
                    <span>Pure Desi Ghee & Fresh Dairy Cream</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 text-center lg:text-right">
                <a
                  href="#menu"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-crimson-600 via-crimson-500 to-crimson-600 hover:from-crimson-500 hover:to-crimson-600 text-white font-black text-sm sm:text-base shadow-glow-crimson transition-all border border-crimson-400/40 hover:scale-105"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  <span>Order Fresh Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
