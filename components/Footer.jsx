'use client';

import React from 'react';
import { 
  Flame, 
  MapPin, 
  PhoneCall, 
  Clock, 
  ExternalLink, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  ShieldCheck, 
  Heart,
  Navigation
} from 'lucide-react';

export default function Footer() {
  const googleMapsUrl =
    'https://maps.google.com/?q=Hussainabad+Food+Street+Block+3+Federal+B+Area+Karachi';

  return (
    <footer id="location" className="relative bg-darkSlate-950 pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Background glow flares */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-crimson-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Location, Map, Contacts, Timings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-crimson-600 to-gold-500 flex items-center justify-center shadow-glow-crimson">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <span className="font-black text-xl text-white tracking-tight">
                Royal <span className="text-gold-400 font-medium">Foods & Grill</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Serving the authentic taste of Karachi since 2012. Specializing in melt-in-mouth chicken malai boti, smokey smash burgers, and stuffed-crust pizzas right in the heart of Hussainabad Food Street.
            </p>

            {/* Address box */}
            <div className="glass-card p-4 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-start space-x-3 text-slate-300 text-xs sm:text-sm">
                <MapPin className="w-5 h-5 text-crimson-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Kitchen & Dining Location:</strong>
                  <span>Main Food Street, Block 3, Hussainabad, Federal B Area, Karachi, Pakistan.</span>
                </div>
              </div>
            </div>

            {/* Direct Phone CTA */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
              <a
                href="tel:+923342850819"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-bold text-xs shadow-glow-crimson transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Kitchen (0334 2850819)</span>
              </a>

              <a
                href="https://wa.me/923342850819"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/40 border border-emerald-500/30 text-emerald-300 font-bold text-xs transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Operating Hours & Fast Links */}
          <div className="lg:col-span-3 space-y-5" id="contact">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Operating Schedule
            </h3>
            
            <div className="glass-card p-4 rounded-2xl border border-white/10 space-y-3 text-xs">
              <div className="flex items-center space-x-2 text-gold-400 font-semibold">
                <Clock className="w-4 h-4" />
                <span>Kitchen Service Hours</span>
              </div>
              <div className="space-y-1.5 text-slate-300">
                <div className="flex justify-between">
                  <span>Monday – Thursday:</span>
                  <span className="font-semibold text-white">4:00 PM – 2:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday – Sunday:</span>
                  <span className="font-semibold text-white">4:00 PM – 3:00 AM</span>
                </div>
              </div>
              <div className="pt-2 border-t border-white/5 text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Active deliveries dispatched until 2:00 AM daily</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Connect With Us</h4>
              <div className="flex items-center space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-crimson-600/30 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-blue-600/30 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923342850819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-600/30 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Embedded Map Preview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Find Us on Map
              </h3>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-gold-400 hover:text-gold-300 font-semibold"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded interactive styled map container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 h-64 glass-card group">
              <iframe
                title="Royal Foods Hussainabad Karachi Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14474.359286814663!2d67.06015525!3d24.91202865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f1122a2c7e1%3A0xe543fa0f6b4a5301!2sHussainabad%20Food%20Street%2C%20Karachi!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-75 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Direction Pill */}
              <div className="absolute bottom-3 left-3 right-3 bg-darkSlate-950/90 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-crimson-500 animate-ping" />
                  <span className="text-xs font-semibold text-white">Hussainabad Food Street Block 3</span>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Royal Foods & Grill. All rights reserved.</p>
          
          <div className="flex items-center space-x-1.5 text-slate-400">
            <span>Powered by</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-crimson-400 to-gold-400">
              Custom Web Solutions
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
