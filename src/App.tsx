/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Pizza,
  Flame,
  Coffee,
  IceCream,
  Beer,
  Beef,
  UtensilsCrossed,
  TrendingUp,
  ChevronRight,
  Search,
  ShoppingCart,
  Menu,
  X,
  Star,
  MessageCircle
} from 'lucide-react';
import { menuData, MenuItem, Price } from './menuData';

import logoImage from './assets/logo.png';
import barBgImage from './assets/bar-background.png';



const FOOD_IMAGES = {
  hero: barBgImage,
  pizza: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1000",
  karahi: "https://images.unsplash.com/photo-1545231027-63b6f0a67ad5?auto=format&fit=crop&q=80&w=1000",
  drink: "https://images.unsplash.com/photo-1513558161293-cdaf7659a97a?auto=format&fit=crop&q=80&w=1000",
  dessert: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=1000",
};

const categories = [
  { id: 'Hot Deals', icon: Flame, label: 'Hot Deals (1-12)' },
  { id: 'Platters', icon: UtensilsCrossed, label: 'Combo Platters' },
  { id: 'Pizza', icon: Pizza, label: 'Stone-Baked Pizza' },
  { id: 'BBQ Platters', icon: Beef, label: 'B.B.Q Platters' },
  { id: 'Pakistani Food', icon: UtensilsCrossed, label: 'Pakistani Food' },
  { id: 'Burgers', icon: UtensilsCrossed, label: 'Burgers & Wraps' },
  { id: 'Rolls', icon: UtensilsCrossed, label: 'Signature Rolls' },
  { id: 'Shawarma', icon: UtensilsCrossed, label: 'Shawarma' },
  { id: 'Chinese Corner', icon: UtensilsCrossed, label: 'Chinese Corner' },
  { id: 'Pasta', icon: UtensilsCrossed, label: 'Pasta & Panini' },
  { id: 'Appetizers', icon: Flame, label: 'Sides & Wings' },
  { id: 'Bar Menu', icon: Beer, label: 'Drinks & Mocktails' },
  { id: 'Coffee', icon: Coffee, label: 'Coffee & Tea' },
  { id: 'Deserts', icon: IceCream, label: 'Desserts & Ice Cream' },
  { id: 'Beverages', icon: Coffee, label: 'Cold Beverages' },
  { id: 'Arabian Broast', icon: Beef, label: 'Arabian Broast' },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('Hot Deals');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [trendingIndex, setTrendingIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredItems = useMemo(() => {
    return menuData.filter(item => {
      if (searchQuery.trim() !== '') {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      }
      return item.category === selectedCategory;
    });
  }, [selectedCategory, searchQuery]);

  const featuredItems = useMemo(() => {
    return menuData.filter(item => item.isPopular).slice(0, 6);
  }, []);

  // Auto-advance trending slideshow
  useEffect(() => {
    if (featuredItems.length === 0) return;
    const timer = setInterval(() => {
      setTrendingIndex(prev => (prev + 1) % featuredItems.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [featuredItems.length]);

  // Format price logic replaced by PriceDisplay component

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-yellow-500/30 scroll-smooth">

      {/* ═══ TOP ANNOUNCEMENT BAR ═══ */}
      <div className="fixed top-0 left-0 right-0 z-[110] bg-yellow-500 text-black py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[11px] font-black uppercase tracking-widest">
          <span className="flex items-center gap-1.5">🛵 Free Home Delivery</span>
          <span className="hidden sm:block w-px h-3 bg-black/30" />
          <span className="flex items-center gap-1.5">⏰ Open Daily: 11 AM – 2 AM</span>
          <span className="hidden sm:block w-px h-3 bg-black/30" />
          <a href="tel:03001514920" className="flex items-center gap-1.5 hover:underline">📞 03001514920</a>
        </div>
      </div>

      {/* Fixed Navigation Header */}
      <nav className="fixed top-[36px] left-0 right-0 z-[100] bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setSelectedCategory('Hot Deals'); setSearchQuery(''); scrollToTop(); }}>
          <img src={logoImage} alt="Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]" />
          <span className="font-bold font-sans tracking-tight text-3xl font-black tracking-tighter hidden sm:block">
            <span className="text-white">Mr. </span><span className="text-yellow-400">Pizza</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-slate-400 mr-4">
            <button onClick={() => { setSelectedCategory('Hot Deals'); }} className="hover:text-yellow-500 transition-colors">Hot Deals</button>
            <button onClick={() => { setSelectedCategory('Pizza'); }} className="hover:text-yellow-500 transition-colors">Pizzas</button>
            <button onClick={() => { setSelectedCategory('Pakistani Food'); }} className="hover:text-yellow-500 transition-colors">Pakistani</button>
            <a
              href="#reviews-section"
              onClick={e => { e.preventDefault(); document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hover:text-yellow-500 transition-colors cursor-pointer flex items-center gap-1"
            >
              <Star size={13} className="fill-yellow-500 text-yellow-500" />
              Reviews
            </a>
          </div>
          <button onClick={() => document.getElementById('search-input')?.focus()} className="bg-[#111] p-3 rounded-full border border-slate-800 text-slate-300 hover:text-yellow-500 hover:border-yellow-500 transition-colors relative active:scale-95">
            <Search size={20} />
          </button>
          <a href="https://wa.me/923001514920?text=Hi%20Mr.%20Pizza,%20I'd%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer" className="bg-yellow-500 p-3 rounded-full text-black hover:bg-yellow-400 transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] active:scale-95 relative group flex items-center justify-center">
            <ShoppingCart size={20} />
          </a>
        </div>
      </nav>

      {/* Search Overlay Hero */}
      <header className="relative h-[70vh] min-h-[550px] flex items-center justify-center pt-20">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <img
            src={FOOD_IMAGES.hero}
            alt="Mr. Pizza Restaurant"
            className="w-full h-full object-cover"
          />
          {/* Very minimal overlay only at bottom for search bar readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Logo with mix-blend-mode to remove black background */}
            <img
              src={logoImage}
              alt="Mr. Pizza Logo"
              className="w-52 h-52 object-contain mx-auto mb-4 drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]"
              style={{ mixBlendMode: 'screen' }}
            />
            <p className="text-white font-semibold tracking-[0.05em] text-lg mb-10 max-w-xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Experience the symphony of flavors from authentic BBQ to gourmet Italian stone-baked pizzas.
            </p>

            <div className="relative group max-w-xl mx-auto w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" size={20} />
              <input
                id="search-input"
                type="text"
                placeholder="Craving something specific? Search here..."
                className="w-full bg-white text-slate-900 rounded-2xl py-6 pl-14 pr-8 shadow-2xl focus:ring-4 focus:ring-orange-500/20 transition-all font-medium text-lg outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* ═══ TRENDING ITEMS — Big Slideshow (scrolls with page) ═══ */}
      <section className="w-full bg-[#0a0a0a] border-b border-white/5 z-[10] shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {featuredItems.length > 0 && (
              <motion.div
                key={trendingIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-[260px] md:h-[300px] overflow-hidden flex"
              >
                {/* Background image */}
                {featuredItems[trendingIndex].image && (
                  <>
                    <img
                      src={featuredItems[trendingIndex].image}
                      alt={featuredItems[trendingIndex].name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                  </>
                )}

                {/* Content overlay */}
                <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 max-w-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="text-yellow-500" size={18} />
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-yellow-500">Trending Now</span>
                    <span className="bg-yellow-500 text-black text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ml-2">🔥 Popular</span>
                  </div>
                  <h2 className="font-black text-3xl md:text-4xl text-white leading-tight mb-3">
                    {featuredItems[trendingIndex].name}
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5 max-w-sm">
                    {featuredItems[trendingIndex].description?.slice(0, 90)}...
                  </p>
                  <button
                    onClick={() => { setSelectedCategory(featuredItems[trendingIndex].category); window.scrollTo({ top: 600, behavior: 'smooth' }); }}
                    className="self-start bg-yellow-500 text-black font-black uppercase text-xs tracking-widest px-6 py-3 rounded-full hover:bg-yellow-400 active:scale-95 transition-all"
                  >
                    View in Menu →
                  </button>
                </div>

                {/* Dots + arrows */}
                <div className="absolute bottom-4 right-6 flex items-center gap-3">
                  <button
                    onClick={() => setTrendingIndex(prev => (prev - 1 + featuredItems.length) % featuredItems.length)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-yellow-500 hover:text-black text-white flex items-center justify-center transition-all font-bold text-sm"
                  >‹</button>
                  <div className="flex items-center gap-1.5">
                    {featuredItems.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setTrendingIndex(i)}
                        className={`rounded-full transition-all duration-300 ${i === trendingIndex ? 'w-6 h-2 bg-yellow-500' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                          }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setTrendingIndex(prev => (prev + 1) % featuredItems.length)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-yellow-500 hover:text-black text-white flex items-center justify-center transition-all font-bold text-sm"
                  >›</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        {/* Mobile Category Toggle */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden flex items-center justify-between bg-[#111] px-6 py-5 rounded-2xl shadow-sm font-bold text-yellow-500 border border-slate-800 active:scale-95 transition-transform"
        >
          <div className="flex items-center gap-3">
            <Menu size={24} />
            <span>Explore Menu Categories</span>
          </div>
          <ChevronRight size={20} />
        </button>

        {/* Sidebar Navigation */}
        <aside className={`
          fixed inset-0 z-50 bg-[#111]/98 backdrop-blur-md lg:static lg:bg-transparent lg:backdrop-blur-none
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isSidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0'}
          w-full lg:w-80 flex-shrink-0 lg:sticky lg:top-8 overflow-y-auto max-h-screen lg:max-h-[calc(100vh-100px)] lg:pr-4 custom-scrollbar
        `}>
          <div className="flex items-center justify-between p-8 lg:hidden">
            <div>
              <h2 className="font-bold font-sans tracking-tight text-3xl ">The Menu</h2>
              <p className="text-slate-400 text-xs uppercase tracking-widest mt-1">Select your category</p>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="p-3 bg-[#222] text-white rounded-full active:scale-90 transition-transform">
              <X size={24} />
            </button>
          </div>

          <div className="px-6 lg:px-0 space-y-2">
            <h3 className="hidden lg:block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 px-4">Menu Selection</h3>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setIsSidebarOpen(false);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className={`
                  w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 group
                  ${selectedCategory === cat.id
                    ? 'bg-yellow-500 text-black shadow-2xl shadow-yellow-500/20 translate-x-2'
                    : 'hover:bg-[#111] hover:shadow-xl text-slate-500 hover:text-white hover:translate-x-1'}
                `}
              >
                <div className={`
                  p-2 rounded-xl transition-colors
                  ${selectedCategory === cat.id ? 'bg-black text-yellow-500' : 'bg-[#1a1a1a] text-slate-400 group-hover:bg-yellow-900/30 group-hover:text-yellow-500'}
                `}>
                  <cat.icon size={20} />
                </div>
                <span className="font-bold tracking-tight text-lg">{cat.label}</span>
                {selectedCategory === cat.id && (
                  <motion.div layoutId="activeIndicator" className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />
                )}
              </button>
            ))}

            <div className="mt-12 p-8 bg-red-600 rounded-[2rem] text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="font-bold font-sans tracking-tight text-2xl mb-2">Member Ship</h4>
                <p className="text-red-100 text-xs mb-4">Get 10% discount on every order with our VIP card.</p>
                <div className="bg-white text-red-600 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider inline-block mt-2 border-2 border-transparent hover:border-red-600 transition-colors">
                  Apply: 0300-1188459
                </div>
              </div>
              <Star className="absolute -bottom-4 -right-4 text-red-400/20" size={120} />
            </div>
          </div>
        </aside>

        {/* Main Menu Grid */}
        <main className="flex-1 lg:max-w-[calc(100%-320px)]">

          {/* Menu Sections Headers */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Category</span>
              </div>
              <h2 className="font-bold font-sans tracking-tight text-5xl  leading-tight">{selectedCategory}</h2>
            </div>
            <div className="bg-[#111] px-4 py-2 rounded-full border border-slate-800 shadow-sm text-slate-400 text-[10px] font-bold uppercase tracking-widest h-fit">
              {filteredItems.length} Handpicked items
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <MenuCard key={`${item.category}-${item.name}`} item={item} index={index} />
              ))}
            </AnimatePresence>
          </div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-32 bg-[#111] rounded-[3rem] border border-dashed border-slate-800 shadow-inner"
            >
              <div className="w-24 h-24 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-slate-300" size={40} />
              </div>
              <h3 className="text-2xl font-bold font-sans tracking-tight mb-2">Nothing found matching "{searchQuery}"</h3>
              <p className="text-slate-400 max-w-xs mx-auto">Try a different keyword or browse our categories.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-8 text-orange-500 font-bold uppercase text-xs tracking-widest hover:underline px-6 py-3"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </main>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923001514920"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-2xl shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group"
      >
        <MessageCircle size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold text-sm whitespace-nowrap px-0 group-hover:px-2">WhatsApp Now</span>
      </a>

      {/* Back to top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[60] bg-slate-900 text-white p-4 rounded-2xl shadow-2xl hover:bg-orange-500 transition-colors"
          >
            <TrendingUp className="-rotate-90" size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ═══ REVIEWS SECTION ═══ */}
      <section id="reviews-section" className="bg-[#080808] py-20 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-[2px] bg-yellow-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-yellow-500">Customer Love</span>
              </div>
              <h2 className="font-black text-4xl md:text-5xl text-white">What Our Guests Say</h2>
              <div className="flex items-center gap-2 mt-3">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={18} className="text-yellow-400 fill-yellow-400" />)}
                <span className="text-slate-400 text-sm ml-2">4.9 / 5 · 200+ happy customers</span>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/Mr.+Pizza+Daska"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-slate-900 font-black uppercase text-xs tracking-widest px-6 py-4 rounded-2xl hover:bg-yellow-400 transition-all active:scale-95 shadow-xl flex-shrink-0"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              ⭐ Rate Us on Google
            </a>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Hamza Raza", rating: 5, time: "2 days ago", review: "Best pizza in Daska without a doubt! The Fajita Sicillion is absolutely fire 🔥. The crust is perfectly crispy and the cheese pull is insane. Will definitely order again!" },
              { name: "Ayesha Malik", rating: 5, time: "1 week ago", review: "Ordered the Chicken Karahi and Malai Boti for a family dinner. Both were absolutely delicious — so authentic and fresh. The packaging was great too. Mr. Pizza never disappoints!" },
              { name: "Usman Ali", rating: 5, time: "3 days ago", review: "The Hot Deal 10 is such a value for money! 2 large pizzas, fries and patty burgers for the whole group. Great food, hot delivery, and super fast. Highly recommended! 👌" },
              { name: "Sana Tariq", rating: 5, time: "5 days ago", review: "Tried the Mr. Special Milk Shake and the Brownie — absolutely heavenly! The desserts are top tier. The restaurant feels premium but the prices are so reasonable. Love it! ❤️" },
              { name: "Ahmed Butt", rating: 5, time: "2 weeks ago", review: "The BBQ Platter for 2 was a beast! Chicken tikka, seekh kabab, malai boti — everything was tender and perfectly spiced. Best desi BBQ in town. Coming back for sure!" },
              { name: "Zainab Shah", rating: 4, time: "1 week ago", review: "Ordered the Midnight Craving Deal late at night and it came hot and fresh! The peri peri wings with the Nutella shake is an unbelievable combo. Super impressed with the service." },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-[#111] rounded-[2rem] p-7 border border-slate-800 hover:border-yellow-500/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-black text-black text-lg">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{review.name}</p>
                      <p className="text-slate-500 text-xs">{review.time}</p>
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#4285F4] flex-shrink-0" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  </svg>
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{review.review}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-slate-400 text-sm mb-5">Loved your experience? Share it with the world!</p>
            <a
              href="https://www.google.com/maps/search/Mr.+Pizza+Daska"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-yellow-500 text-black font-black uppercase text-sm tracking-widest px-10 py-5 rounded-2xl hover:bg-yellow-400 transition-all active:scale-95 shadow-2xl shadow-yellow-500/20"
            >
              <Star size={18} className="fill-black" />
              Write a Google Review
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-24 mt-0 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10 font-sans">
          <div className="lg:col-span-2">
            <h3 className="font-bold font-sans tracking-tight text-5xl mb-8 ">Mr. Pizza</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-10">
              Not just a restaurant, but a destination for family bonding over flavors that tell a story.
              Join us for an unforgettable culinary journey.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram'].map(social => (
                <a key={social} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-all group">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-white">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500 mb-8">Contact Us</h4>
            <div className="space-y-6">
              <div>
                <p className="text-slate-400 text-xs mb-1">Our Location</p>
                <a
                  href="https://maps.google.com/?q=Mr+Pizza+Daska,+College+Rd,+Jalalpur+Ghumman+Daska,+51010,+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-orange-400 transition-colors leading-relaxed"
                >
                  College Rd, Jalalpur Ghumman<br />Daska, 51010, Pakistan
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-xs mb-1">Call to Order</p>
                <a href="tel:0300-1514920" className="text-2xl font-bold font-sans tracking-tight text-orange-400 block hover:underline">0300-1514920 </a>
                <a href="tel:0343-7655078 " className="text-lg text-slate-300 mt-1 block hover:underline">03437655078</a>
              </div>
              <a
                href="https://wa.me/923001514920?text=Hi%20Mr.%20Pizza,%20I'd%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 rounded-xl text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.374 0 0 5.373 0 12c0 2.122.552 4.112 1.516 5.842L.024 23.617a.5.5 0 0 0 .609.61l5.83-1.529A11.944 11.944 0 0 0 12 24c6.626 0 12-5.373 12-12S18.626 0 12 0zm0 21.793a9.78 9.78 0 0 1-4.998-1.371l-.358-.213-3.712.974.993-3.62-.234-.374A9.763 9.763 0 0 1 2.207 12C2.207 6.57 6.57 2.207 12 2.207c5.43 0 9.793 4.363 9.793 9.793 0 5.43-4.363 9.793-9.793 9.793z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500 mb-8">Opening Hours</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <span className="text-slate-400 text-sm">Mon — Sun</span>
                <span className="text-right text-white font-black leading-none uppercase text-lg">11 AM – 2 AM</span>
              </div>
              <p className="text-green-400 text-[10px] font-black uppercase tracking-widest mt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse"></span>
                Open 7 Days a Week
              </p>
              <div className="mt-4 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-4">
                <p className="text-yellow-400 font-black text-xs uppercase tracking-widest">🛵 Free Home Delivery</p>
                <p className="text-slate-400 text-xs mt-1">Available on all orders across Daska</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] relative z-10">
          <p>&copy; {new Date().getFullYear()} Mr. Pizza Family Restaurant. Crafted with Love.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Background Decorative Text */}
        <div className="absolute -bottom-20 -left-20 text-[20vw] font-bold font-sans tracking-tight font-black text-white/5 select-none pointer-events-none ">
          Taste
        </div>
      </footer>
    </div>
  );
}

function FeaturedCard({ item, idx }: { item: MenuItem; idx: number; key?: string | number }) {
  const bgGradients = [
    'from-slate-800 to-black border border-slate-800',
    'from-red-950 to-black border border-red-900/30',
    'from-yellow-950 to-black border border-yellow-900/30'
  ];
  const bgClass = bgGradients[idx % bgGradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      className={`group relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl transition-all hover:shadow-orange-500/10 bg-gradient-to-br ${bgClass}`}
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
      )}
      <div className={`absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 ${!item.image ? bgClass : ''}`} />

      <div className="absolute top-8 left-8 right-8">
        <div className="inline-flex items-center gap-2 bg-orange-500 px-3 py-1 rounded-full shadow-lg">
          <Star size={10} className="fill-white text-white" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white">Recommended</span>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 right-10">
        <h3 className="text-white font-bold font-sans tracking-tight text-3xl mb-3 leading-tight  group-hover:translate-x-2 transition-transform duration-500">{item.name}</h3>
        <p className="text-slate-300 text-sm mb-6 hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
          {item.description}
        </p>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/20" />
          <span className="text-orange-400 font-bold text-xl uppercase tracking-tighter">View Menu</span>
        </div>
      </div>
    </motion.div>
  );
}

function PriceDisplay({ price }: { price: number | string | Price }) {
  if (typeof price === 'number' || typeof price === 'string') {
    return (
      <span className="text-2xl font-bold font-sans tracking-tight font-black text-white tracking-tighter">
        Rs. {price}
      </span>
    );
  }

  const sizes = [
    { key: 'small', label: 'S' },
    { key: 'medium', label: 'M' },
    { key: 'large', label: 'L' },
    { key: 'xl', label: 'XL' },
    { key: 'half', label: 'Half' },
    { key: 'full', label: 'Full' },
    { key: 'single', label: 'Sngl' },
    { key: 'double', label: 'Dbl' },
    { key: 'oneScoop', label: '1 Scoop' },
    { key: 'twoScoops', label: '2 Scoops' },
    { key: 'threeScoops', label: '3 Scoops' },
  ];

  const available = sizes.filter(s => (price as any)[s.key] !== undefined);

  if (available.length === 0) return <span className="text-xl">Price N/A</span>;

  return (
    <div className="flex flex-wrap gap-1.5 mt-1">
      {available.map(s => (
        <div key={s.key} className="flex flex-col bg-[#1a1a1a] px-2.5 py-1.5 rounded-xl border border-slate-800 flex-1 min-w-[60px] max-w-fit items-center justify-center text-center">
          <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest leading-none mb-1">{s.label}</span>
          <span className="text-sm font-bold text-white leading-none">Rs.{(price as any)[s.key]}</span>
        </div>
      ))}
    </div>
  );
}

function MenuCard({ item, index }: { item: MenuItem; index: number; key?: string | number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: (index % 12) * 0.05 }}
      whileHover={{ y: -8 }}
      className="bg-[#111] rounded-[2.5rem] p-0 border border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full"
    >
      {item.image && (
        <div className="h-48 overflow-hidden relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className={`
            p-3 rounded-2xl transition-all duration-500 group-hover:rotate-12
            ${item.category === 'Hot Deals' ? 'bg-red-600 text-white shadow-xl shadow-red-600/30' : 'bg-[#1a1a1a] text-slate-400 group-hover:bg-yellow-500 group-hover:text-black'}
          `}>
            {item.category === 'Pizza' ? <Pizza size={24} /> : <UtensilsCrossed size={24} />}
          </div>
          {item.isPopular && (
            <div className="flex items-center gap-1 bg-orange-100 text-orange-600 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-orange-200">
              Popular Choice
            </div>
          )}
        </div>

        <div className="mb-6">
          <h3 className="font-bold font-sans tracking-tight text-2xl text-white mb-3 leading-tight group-hover:text-yellow-500 transition-colors uppercase  font-bold">
            {item.name}
          </h3>

          {item.description ? (
            <p className="text-slate-400 text-sm  leading-relaxed">
              {item.description}
            </p>
          ) : (
            <div className="h-[40px] flex items-center">
              <div className="w-12 h-px bg-slate-800" />
            </div>
          )}
        </div>

        <div className="flex flex-col mt-auto pt-6 border-t border-slate-800">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Pricing</span>
          <PriceDisplay price={item.price} />
        </div>
      </div>
    </motion.div>
  );
}



