'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  MessageCircle, 
  MapPin, 
  User, 
  Phone, 
  FileText, 
  CreditCard, 
  Check, 
  AlertCircle,
  Truck
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    deliveryFee,
    grandTotal,
    freeDeliveryThreshold,
    totalItemsCount,
    showToast,
  } = useCart();

  // Form states
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery (COD)');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Free delivery calculation
  const amountNeededForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);
  const freeDeliveryProgress = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  // Validate user form
  const validateForm = () => {
    const errors = {};
    if (!customerName.trim()) {
      errors.name = 'Full name is required';
    }
    if (!phoneNumber.trim()) {
      errors.phone = 'Contact phone number is required';
    } else if (phoneNumber.replace(/[^0-9]/g, '').length < 10) {
      errors.phone = 'Please enter a valid phone number (e.g. 0300 1234567)';
    }
    if (!deliveryAddress.trim()) {
      errors.address = 'Delivery address & landmark are required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // WhatsApp Link Generator Engine
  const handleWhatsAppCheckout = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add items from the menu first!');
      return;
    }

    if (!validateForm()) {
      showToast('⚠️ Please fill all required fields');
      return;
    }

    setIsSubmitting(true);

    const orderId = `GF-${Math.floor(1000 + Math.random() * 9000)}`;
    const dateStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Itemized lines
    const itemsListText = cartItems
      .map(
        (item) =>
          `• ${item.quantity}x ${item.name} — Rs. ${(item.price * item.quantity).toLocaleString()}`
      )
      .join('\n');

    // Build the clean WhatsApp formatted receipt
    const message = `🍔 *NEW ORDER — ROYAL FOODS & GRILL*
Order ID: *#${orderId}* (${dateStr})
──────────────────────
*📋 ORDERED ITEMS:*
${itemsListText}
──────────────────────
*💵 BILLING SUMMARY:*
• Subtotal: Rs. ${subtotal.toLocaleString()}
• Delivery Fee: ${deliveryFee === 0 ? 'FREE (Special Promo)' : `Rs. ${deliveryFee}`}
• *TOTAL PAYABLE: Rs. ${grandTotal.toLocaleString()}*
• Payment Mode: ${paymentMethod}
──────────────────────
*📍 CUSTOMER & DELIVERY INFO:*
• *Name:* ${customerName.trim()}
• *Phone:* ${phoneNumber.trim()}
• *Address:* ${deliveryAddress.trim()}
${specialInstructions.trim() ? `• *Special Notes:* ${specialInstructions.trim()}` : ''}
──────────────────────
⚡ *Sent via Royal Foods Direct Web App*
_Please confirm kitchen prep and estimated delivery time._`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923009202325?text=${encodedText}`;

    // Trigger WhatsApp
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      showToast('Order dispatched to WhatsApp! 🛵');
    }, 600);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-darkSlate-950/80 backdrop-blur-md transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="w-screen max-w-md sm:max-w-lg bg-darkSlate-900 border-l border-white/10 shadow-2xl flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-darkSlate-900/90 backdrop-blur-md">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-crimson-600/20 text-crimson-400 flex items-center justify-center border border-crimson-500/30">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-white flex items-center gap-2">
                      Your Order Tray
                      {totalItemsCount > 0 && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-crimson-600/40 text-crimson-300 border border-crimson-500/30">
                          {totalItemsCount} items
                        </span>
                      )}
                    </h2>
                    <p className="text-xs text-slate-400">Direct Kitchen WhatsApp Dispatch</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {cartItems.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="p-2 text-slate-400 hover:text-rose-400 hover:bg-white/5 rounded-lg transition-colors text-xs font-semibold flex items-center gap-1"
                      title="Clear Cart"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Clear</span>
                    </button>
                  )}
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Close cart"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Free Delivery Target Indicator */}
              <div className="px-6 py-2.5 bg-darkSlate-950/70 border-b border-white/5">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-slate-300 flex items-center gap-1 font-medium">
                    <Truck className="w-3.5 h-3.5 text-gold-400" />
                    {subtotal >= freeDeliveryThreshold
                      ? '🎉 You unlocked FREE Delivery!'
                      : `Add Rs. ${amountNeededForFreeDelivery.toLocaleString()} more for FREE Delivery`}
                  </span>
                  <span className="font-bold text-gold-400">{Math.round(freeDeliveryProgress)}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-crimson-500 to-gold-400 transition-all duration-300"
                    style={{ width: `${freeDeliveryProgress}%` }}
                  />
                </div>
              </div>

              {/* Scrollable Content: Items List + Checkout Form */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-slate-500 mb-4 border border-white/10">
                      <ShoppingBag className="w-10 h-10" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Your tray is empty</h3>
                    <p className="text-xs text-slate-400 max-w-xs mt-1">
                      Explore our menu to add sizzling burgers, charcoal malai boti, or stuffed pizzas!
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 px-6 py-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-bold text-xs shadow-glow-crimson transition-all"
                    >
                      Browse Hot Menu
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Itemized Order List */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Selected Items</h3>
                      <div className="divide-y divide-white/5 border border-white/10 rounded-2xl p-2 bg-darkSlate-950/40">
                        {cartItems.map((item) => (
                          <div key={item.id} className="py-3 px-2 flex items-center justify-between gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-14 h-14 rounded-xl object-cover border border-white/10 shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                              <p className="text-xs text-gold-400 font-semibold">
                                Rs. {item.price.toLocaleString()}
                              </p>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-1.5 bg-darkSlate-900 border border-white/10 rounded-lg p-1">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-6 h-6 rounded bg-white/5 hover:bg-white/10 text-slate-300 flex items-center justify-center"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-5 text-center text-xs font-bold text-white">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-6 h-6 rounded bg-white/5 hover:bg-white/10 text-slate-300 flex items-center justify-center"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            {/* Remove button */}
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-slate-500 hover:text-rose-400 p-1"
                              title="Delete Item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Customer Information Form */}
                    <form id="checkout-form" onSubmit={handleWhatsAppCheckout} className="space-y-4 pt-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-gold-400" />
                          Delivery Information
                        </h3>
                        <span className="text-[11px] text-emerald-400 font-semibold">Direct Dispatch</span>
                      </div>

                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Full Name <span className="text-crimson-400">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="e.g. Daniyal Khan"
                            value={customerName}
                            onChange={(e) => {
                              setCustomerName(e.target.value);
                              if (formErrors.name) setFormErrors((p) => ({ ...p, name: null }));
                            }}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white placeholder-slate-500 ${
                              formErrors.name ? 'border-crimson-500' : ''
                            }`}
                          />
                        </div>
                        {formErrors.name && (
                          <p className="text-[11px] text-crimson-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.name}
                          </p>
                        )}
                      </div>

                      {/* Phone input */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          WhatsApp / Contact Number <span className="text-crimson-400">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            placeholder="e.g. 0300 9202325"
                            value={phoneNumber}
                            onChange={(e) => {
                              setPhoneNumber(e.target.value);
                              if (formErrors.phone) setFormErrors((p) => ({ ...p, phone: null }));
                            }}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white placeholder-slate-500 ${
                              formErrors.phone ? 'border-crimson-500' : ''
                            }`}
                          />
                        </div>
                        {formErrors.phone && (
                          <p className="text-[11px] text-crimson-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.phone}
                          </p>
                        )}
                      </div>

                      {/* Delivery Address */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Delivery Address & Nearby Landmark <span className="text-crimson-400">*</span>
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                          <textarea
                            rows={2}
                            placeholder="House / Flat #, Street, Block, Hussainabad / FB Area"
                            value={deliveryAddress}
                            onChange={(e) => {
                              setDeliveryAddress(e.target.value);
                              if (formErrors.address) setFormErrors((p) => ({ ...p, address: null }));
                            }}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white placeholder-slate-500 resize-none ${
                              formErrors.address ? 'border-crimson-500' : ''
                            }`}
                          />
                        </div>
                        {formErrors.address && (
                          <p className="text-[11px] text-crimson-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.address}
                          </p>
                        )}
                      </div>

                      {/* Special Cooking Instructions */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Special Cooking Instructions (Optional)
                        </label>
                        <div className="relative">
                          <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="e.g. Extra spicy, separate raita, send cutlery"
                            value={specialInstructions}
                            onChange={(e) => setSpecialInstructions(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white placeholder-slate-500"
                          />
                        </div>
                      </div>

                      {/* Payment Method Selector */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1">
                          <CreditCard className="w-3.5 h-3.5 text-gold-400" />
                          Select Payment Mode
                        </label>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {['Cash on Delivery (COD)', 'JazzCash / EasyPaisa', 'Bank Transfer / Raast'].map(
                            (method) => {
                              const isSelected = paymentMethod === method;
                              return (
                                <button
                                  type="button"
                                  key={method}
                                  onClick={() => setPaymentMethod(method)}
                                  className={`p-2.5 rounded-xl text-left border transition-all ${
                                    isSelected
                                      ? 'border-gold-500 bg-gold-500/10 text-white font-bold'
                                      : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                                  }`}
                                >
                                  {method}
                                </button>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>

              {/* Drawer Sticky Footer: Totals & WhatsApp CTA */}
              {cartItems.length > 0 && (
                <div className="p-4 sm:p-6 border-t border-white/10 bg-darkSlate-950/90 backdrop-blur-md space-y-3">
                  {/* Bill Breakdown */}
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Subtotal</span>
                      <span className="font-semibold text-white">Rs. {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Delivery Fee</span>
                      <span className="font-semibold text-white">
                        {deliveryFee === 0 ? (
                          <span className="text-emerald-400 font-bold">FREE</span>
                        ) : (
                          `Rs. ${deliveryFee}`
                        )}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm sm:text-base font-black text-white pt-2 border-t border-white/10">
                      <span>Grand Total</span>
                      <span className="text-gold-400 text-lg">
                        Rs. {grandTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Primary WhatsApp Checkout Action */}
                  <button
                    type="submit"
                    form="checkout-form"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center justify-center space-x-2 shadow-glow-emerald transition-all duration-200 border border-emerald-400/40 group cursor-pointer disabled:opacity-50"
                  >
                    <MessageCircle className="w-5 h-5 text-white fill-white/20 group-hover:scale-110 transition-transform" />
                    <span>Complete Order on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    🔒 Orders go straight to Royal Foods Hussainabad kitchen on <span className="text-gold-400 font-semibold">+92 300 9202325</span>.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
