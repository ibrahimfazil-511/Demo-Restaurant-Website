'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  MessageSquareCode, 
  Zap, 
  MapPin, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  Percent,
  Clock3,
  BadgePercent
} from 'lucide-react';

export default function ValuePitch() {
  const valueCards = [
    {
      icon: <BadgePercent className="w-6 h-6 text-emerald-400" />,
      title: '0% App Commission',
      subtitle: 'Save 20-30% on Every Order',
      description:
        'Third-party delivery apps inflate menu prices by up to 30% to take hefty cuts. Direct ordering means you pay the genuine restaurant kitchen price.',
      highlight: 'Saves Rs. 350 - 650 on family orders',
      glowColor: 'hover:border-emerald-500/40',
    },
    {
      icon: <MessageSquareCode className="w-6 h-6 text-green-400" />,
      title: 'Instant WhatsApp Formatting',
      subtitle: 'Zero App Installs Required',
      description:
        'No clunky app downloads, account logins, or password resets. One tap generates a clean, itemized WhatsApp order receipt sent directly to the kitchen.',
      highlight: 'Direct chat with the chef & rider',
      glowColor: 'hover:border-green-500/40',
    },
    {
      icon: <Zap className="w-6 h-6 text-gold-400" />,
      title: 'Lightning-Fast SSR Loading',
      subtitle: 'Sub-Second Response Time',
      description:
        'Built with Next.js 14 and edge performance architecture. Pages load under 0.8 seconds even on 3G mobile networks with zero stutter.',
      highlight: '10x faster than heavy aggregator apps',
      glowColor: 'hover:border-gold-500/40',
    },
    {
      icon: <MapPin className="w-6 h-6 text-crimson-400" />,
      title: 'Hussainabad Local Routing',
      subtitle: 'Accurate Street Navigation',
      description:
        'Custom pinned to Federal B Area & Hussainabad Block 3. Our in-house riders know local streets intimately for hot, fresh 30-min deliveries.',
      highlight: 'Hot out of the pan delivery guarantee',
      glowColor: 'hover:border-crimson-500/40',
    },
  ];

  const comparisonRows = [
    {
      feature: 'Menu Price Markup',
      directApp: '0% (Exact In-Store Price)',
      aggregator: '+20% to +35% Hidden Markup',
      directGood: true,
    },
    {
      feature: 'App Install Needed?',
      directApp: 'None (Instant Browser Load)',
      aggregator: 'Mandatory 150MB App Download',
      directGood: true,
    },
    {
      feature: 'Order Confirmation',
      directApp: 'Direct WhatsApp Confirmation',
      aggregator: 'Automated Bot / Call Center Queue',
      directGood: true,
    },
    {
      feature: 'Delivery Speed (FB Area)',
      directApp: '20-30 Mins Direct Kitchen Dispatch',
      aggregator: '45-65 Mins Multi-stop Batching',
      directGood: true,
    },
    {
      feature: 'Support & Special Requests',
      directApp: '1-on-1 WhatsApp Kitchen Chat',
      aggregator: 'Complex Support Ticket Process',
      directGood: true,
    },
  ];

  return (
    <section id="features" className="py-20 relative bg-darkSlate-900/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-crimson-500/10 border border-crimson-500/20 text-crimson-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Rocket className="w-3.5 h-3.5" />
            <span>Smart Direct Ordering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Order Direct via <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson-400 to-gold-400">Our Next.js Platform?</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Local restaurants lose up to 30% of their revenue to multinational delivery portals. 
            By ordering direct from our bespoke web app, you get lower prices, faster delivery, and direct communication.
          </p>
        </div>

        {/* 4 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {valueCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between transition-all duration-300 ${card.glowColor} group`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                <h4 className="text-xs font-semibold text-gold-400 mb-3">{card.subtitle}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center space-x-2 text-xs font-medium text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{card.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct Web App vs Aggregator Comparison Matrix */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                The Transparency Comparison
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                See exactly how ordering direct puts quality & savings back into your plate.
              </p>
            </div>
            <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-xl text-emerald-400 text-xs font-bold">
              <TrendingUp className="w-4 h-4" />
              <span>Recommended by 98% of Hussainabad Regulars</span>
            </div>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-4 font-semibold">Aspect</th>
                  <th className="py-4 px-4 font-bold text-gold-400 bg-white/5 rounded-t-xl">
                    🌟 Royal Direct Web App
                  </th>
                  <th className="py-4 px-4 font-semibold text-slate-400">
                    Third-Party Aggregator Apps
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {comparisonRows.map((row, index) => (
                  <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-300">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 font-bold text-white bg-white/5">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.directApp}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-400">
                      <div className="flex items-center space-x-2">
                        <XCircle className="w-4 h-4 text-rose-500/80 shrink-0" />
                        <span>{row.aggregator}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Callout in Comparison Box */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-crimson-900/30 to-gold-900/20 border border-crimson-500/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-crimson-600/30 border border-crimson-500/40 flex items-center justify-center shrink-0">
                <Percent className="w-5 h-5 text-crimson-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Direct Order Guarantee</h4>
                <p className="text-xs text-slate-400">Fresh from the kitchen, packed warm, zero platform commissions.</p>
              </div>
            </div>
            <a
              href="#menu"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors text-center shrink-0"
            >
              Order Now & Save
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
