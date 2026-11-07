'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Flame, 
  Star, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function HeroSection() {
  const { addToCart, setIsCartOpen } = useCart();

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      "Salam Royal Foods! 🍔 I'd like to place an order from your direct menu. Could you please share today's kitchen specials?"
    );
    window.open(`https://wa.me/923342850819?text=${text}`, '_blank');
  };

  const heroFeaturedDish = {
    id: 'b1',
    name: 'Royal Monster Crunch Burger',
    category: 'burgers',
    price: 680,
    rating: 4.9,
    reviews: 320,
    tag: 'Bestseller',
    prepTime: '15-20 min',
    spicyLevel: 2,
    description: 'Double crispy fried chicken fillet dunked in spicy honey-chipotle glaze, melted cheddar, garlic mayo.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
  };

  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-crimson-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gold-500/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Top Micro-pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-3.5 rounded-full bg-crimson-950/60 border border-crimson-500/30 text-crimson-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-inner max-w-full text-left"
            >
              <Sparkles className="w-4 h-4 text-gold-400 shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
              <span className="truncate">Hussainabad Food Street Karachi • Direct Kitchen Portal</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.16] sm:leading-[1.12]"
            >
              Direct Gourmet Fast Food —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-500 via-gold-400 to-amber-300">
                Zero Delivery Markup.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Order sizzling smash burgers, charcoal chicken malai boti, and stuffed-crust pizzas directly via WhatsApp. 
              <strong className="text-gold-400 font-semibold"> Skip the 25-30% aggregator commission</strong> and enjoy fresher, hotter food straight from our grill to your doorstep.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2"
            >
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-crimson-600 via-crimson-500 to-crimson-600 hover:from-crimson-500 hover:to-crimson-600 text-white font-bold text-sm sm:text-base shadow-glow-crimson transition-all duration-200 border border-crimson-400/40 group cursor-pointer"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleDirectWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-glow-emerald transition-all duration-200 border border-emerald-400/30 group"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-white fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Direct WhatsApp Order</span>
              </button>
            </motion.div>

            {/* Value Highlights Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10"
            >
              <div className="glass-card p-3 rounded-xl flex items-center space-x-3 text-left">
                <div className="w-9 h-9 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/30">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">30-Min Delivery</h4>
                  <p className="text-[11px] text-slate-400">FB Area & Hussainabad</p>
                </div>
              </div>

              <div className="glass-card p-3 rounded-xl flex items-center space-x-3 text-left">
                <div className="w-9 h-9 rounded-lg bg-crimson-500/20 text-crimson-400 flex items-center justify-center shrink-0 border border-crimson-500/30">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">100% Direct Profit</h4>
                  <p className="text-[11px] text-slate-400">Zero App Surcharge</p>
                </div>
              </div>

              <div className="glass-card p-3 rounded-xl flex items-center space-x-3 text-left">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Star className="w-5 h-5 fill-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">4.9/5 Rating</h4>
                  <p className="text-[11px] text-slate-400">1,200+ Foodies</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-crimson-600 via-gold-500 to-crimson-600 opacity-30 blur-xl group-hover:opacity-60 transition duration-1000"></div>

              <div className="relative glass-card rounded-3xl p-5 border border-white/15 overflow-hidden shadow-2xl">
                
                {/* Floating Tag */}
                <div className="absolute top-8 left-8 z-20">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-crimson-600 text-white shadow-lg flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5" />
                    Kitchen Signature #1
                  </span>
                </div>

                {/* Dish Image Container */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group">
                  <img
                    src={heroFeaturedDish.image}
                    alt={heroFeaturedDish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkSlate-950 via-darkSlate-950/20 to-transparent"></div>
                  
                  {/* Rating sticker */}
                  <div className="absolute bottom-3 left-3 bg-darkSlate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center space-x-1.5">
                    <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                    <span className="text-xs font-bold text-white">4.9</span>
                    <span className="text-[11px] text-slate-400">(320+ reviews)</span>
                  </div>

                  {/* Delivery time sticker */}
                  <div className="absolute bottom-3 right-3 bg-darkSlate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center space-x-1.5">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold text-emerald-400">15-20 Min</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="pt-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {heroFeaturedDish.name}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {heroFeaturedDish.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div>
                      <span className="text-xs text-slate-400 block">Direct Order Price</span>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-black text-gold-400">
                          Rs. {heroFeaturedDish.price}
                        </span>
                        <span className="text-xs text-slate-500 line-through">
                          Rs. 890 (App)
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => addToCart(heroFeaturedDish, 1)}
                      className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-sm shadow-glow-gold transition-all duration-200"
                    >
                      <ShoppingBag className="w-4 h-4 text-slate-950" />
                      <span>Add to Order</span>
                    </button>
                  </div>
                </div>

                {/* Trust guarantee micro-footer */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Hygienic HACCP Prep
                  </span>
                  <span className="text-gold-400 font-medium">Hussainabad Karachi</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
