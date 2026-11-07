import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import Toast from '@/components/Toast';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import Footer from '@/components/Footer';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#070C18',
};

export const metadata = {
  title: 'Royal Foods & Grill | Direct Fast Food, BBQ & Stuffed Pizza Karachi',
  description:
    'Order direct from Royal Foods & Grill in Hussainabad, Karachi. Zero delivery markup, instant WhatsApp ordering, and 30-min express delivery in FB Area.',
  keywords: [
    'Royal Foods',
    'Hussainabad Food Street',
    'Karachi Fast Food',
    'Charcoal BBQ Karachi',
    'Stuffed Crust Pizza Karachi',
    'Direct WhatsApp Food Order',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-darkSlate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-crimson-500 selection:text-white overflow-x-hidden w-full">
        <CartProvider>
          <Navbar />
          <main className="flex-1 w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <Toast />
          <FloatingWhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
