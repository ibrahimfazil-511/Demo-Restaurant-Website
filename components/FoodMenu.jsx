'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Flame, 
  Beef, 
  Pizza, 
  Coffee, 
  Gift, 
  Plus, 
  Minus, 
  Check, 
  Search, 
  Star, 
  Clock, 
  Info,
  X
} from 'lucide-react';
import { categories, foodItems } from '@/data/menuData';
import { useCart } from '@/context/CartContext';

export default function FoodMenu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [quantities, setQuantities] = useState({});
  const [addedAnimation, setAddedAnimation] = useState({});
  const [selectedProductModal, setSelectedProductModal] = useState(null);

  const { addToCart } = useCart();

  // Category Icon resolver
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Beef': return <Beef className="w-4 h-4" />;
      case 'Flame': return <Flame className="w-4 h-4" />;
      case 'Pizza': return <Pizza className="w-4 h-4" />;
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      case 'Gift': return <Gift className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  // Quantity helpers for cards
  const getQty = (id) => quantities[id] || 1;
  const incrementQty = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };
  const decrementQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  const handleAdd = (item) => {
    const qty = getQty(item.id);
    addToCart(item, qty);
    
    // Trigger visual feedback
    setAddedAnimation((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedAnimation((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);

    // Reset local card quantity back to 1
    setQuantities((prev) => ({ ...prev, [item.id]: 1 }));
  };

  // Filter items based on active category and search
  const filteredItems = useMemo(() => {
    return foodItems.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 relative">
      {/* Decorative gradient flare */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-crimson-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Handcrafted Flavors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-500 to-gold-400">Fresh Kitchen Menu</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Every item is freshly cooked on order using prime meats, pure butter/cream, and authentic Hussainabad spices. Direct kitchen pricing with no app cuts.
          </p>

          {/* Search bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search burgers, boti, pizzas, deals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl glass-input text-sm text-white placeholder-slate-400 transition-all focus:border-gold-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Switcher Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 sm:gap-3 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition-all shrink-0 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-crimson-600 to-crimson-700 shadow-glow-crimson border border-crimson-400/40'
                    : 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5'
                }`}
              >
                <span className={isActive ? 'text-gold-300' : 'text-slate-400'}>
                  {getCategoryIcon(cat.icon)}
                </span>
                <span>{cat.name}</span>
                {cat.id === 'deals' && (
                  <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-gold-500 text-slate-950 font-black">
                    HOT
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Food Items Grid with Framer Motion Layout Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between glass-card-hover group"
              >
                {/* Top Image Preview */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkSlate-900/90 via-transparent to-transparent"></div>

                  {/* Tag badge */}
                  {item.tag && (
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white shadow-md ${
                          item.tag.toLowerCase().includes('bestseller')
                            ? 'bg-crimson-600'
                            : item.tag.toLowerCase().includes('save')
                            ? 'bg-emerald-600'
                            : 'bg-gold-600 text-slate-950'
                        }`}
                      >
                        {item.tag}
                      </span>
                    </div>
                  )}

                  {/* Detail Info button */}
                  <button
                    onClick={() => setSelectedProductModal(item)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-darkSlate-900/80 backdrop-blur-md text-slate-300 hover:text-white flex items-center justify-center border border-white/15 opacity-80 hover:opacity-100 transition-opacity"
                    title="View details & ingredients"
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  {/* Floating rating badge */}
                  <div className="absolute bottom-2.5 left-3 flex items-center space-x-1.5 bg-darkSlate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-xs">
                    <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                    <span className="font-bold text-white">{item.rating}</span>
                    <span className="text-[10px] text-slate-400">({item.reviews})</span>
                  </div>

                  {/* Prep time badge */}
                  <div className="absolute bottom-2.5 right-3 flex items-center space-x-1 bg-darkSlate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-xs text-slate-300">
                    <Clock className="w-3 h-3 text-gold-400" />
                    <span className="text-[11px]">{item.prepTime}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-gold-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Quantity Controls */}
                  <div className="pt-2 border-t border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-slate-400 block uppercase font-medium">Direct Price</span>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-xl font-black text-white">
                            Rs. {item.price.toLocaleString()}
                          </span>
                          {item.originalPrice && (
                            <span className="text-xs text-slate-500 line-through">
                              Rs. {item.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center space-x-1 bg-darkSlate-900 border border-white/10 rounded-xl p-1">
                        <button
                          onClick={() => decrementQty(item.id)}
                          className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-7 text-center font-bold text-sm text-white">
                          {getQty(item.id)}
                        </span>
                        <button
                          onClick={() => incrementQty(item.id)}
                          className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAdd(item)}
                      className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all duration-200 ${
                        addedAnimation[item.id]
                          ? 'bg-emerald-600 text-white shadow-glow-emerald'
                          : 'bg-gradient-to-r from-crimson-600 to-crimson-700 hover:from-crimson-500 hover:to-crimson-600 text-white shadow-glow-crimson border border-crimson-400/30'
                      }`}
                    >
                      {addedAnimation[item.id] ? (
                        <>
                          <Check className="w-4 h-4 text-white" />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to Cart • Rs. {(item.price * getQty(item.id)).toLocaleString()}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result Fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 glass-card rounded-2xl max-w-md mx-auto">
            <p className="text-slate-400 text-base">No dishes found matching &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-crimson-600 hover:bg-crimson-500 rounded-xl text-xs font-bold text-white"
            >
              Reset Search & Filter
            </button>
          </div>
        )}

      </div>

      {/* Dish Quick Detail Modal */}
      <AnimatePresence>
        {selectedProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-darkSlate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card max-w-lg w-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProductModal(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-darkSlate-900/80 text-white flex items-center justify-center hover:bg-crimson-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="h-60 relative">
                <img
                  src={selectedProductModal.image}
                  alt={selectedProductModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkSlate-900 via-transparent to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {selectedProductModal.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-xs text-gold-400 mt-1">
                      <Star className="w-3.5 h-3.5 fill-gold-400" />
                      <span>{selectedProductModal.rating} ({selectedProductModal.reviews} reviews)</span>
                      <span>•</span>
                      <span className="text-slate-300">{selectedProductModal.prepTime}</span>
                    </div>
                  </div>
                  <span className="text-2xl font-black text-white">
                    Rs. {selectedProductModal.price}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProductModal.description}
                </p>

                {selectedProductModal.ingredients && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Ingredients</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProductModal.ingredients.map((ing, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-white/10 text-slate-200">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-white/10 flex items-center justify-end">
                  <button
                    onClick={() => {
                      handleAdd(selectedProductModal);
                      setSelectedProductModal(null);
                    }}
                    className="w-full py-3 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-bold text-sm shadow-glow-crimson transition-all"
                  >
                    Add to Cart • Rs. {selectedProductModal.price}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
