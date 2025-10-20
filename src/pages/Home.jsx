import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // use react-router-dom Link

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const slides = [
    { title: 'SIMPLICITY', subtitle: 'IS COMPLEX', image: '/assets/home_1.jpeg', cta: 'VIEW PROJECT' },
    { title: 'DESIGN IS', subtitle: 'A PROCESS', image: '/assets/home_2.jpeg', cta: 'VIEW PROJECT' },
    { title: 'AESTHETIC IS', subtitle: 'A DECISION', image: '/assets/home_3.jpeg', cta: 'VIEW PROJECT' },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentSlide(current => (current + 1) % slides.length);
          return 0;
        }
        return prev + 0.5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  // Navigation links mapped to your route paths
  const navItems = [
    { name: 'HOME', path: '/home' },
    { name: 'ABOUT', path: '/about' },
    { name: 'WORKS', path: '/portfolio' },
    { name: 'NEWS', path: '/news' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Menu Icon */}
      <div className="fixed top-8 right-8 z-50">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative w-16 h-16 group">
          <svg 
            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700"
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100"
          >
            <path 
              d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              className="animate-[spin_8s_linear_infinite]"
              style={{ transformOrigin: 'center' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center gap-1.5 group-hover:opacity-0 transition-opacity duration-700">
            <span className="w-1.5 h-1.5 bg-white rounded-full transition-all duration-700"></span>
            <span className="w-1.5 h-1.5 bg-white rounded-full transition-all duration-700"></span>
            <span className="w-1.5 h-1.5 bg-white rounded-full transition-all duration-700"></span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </div>
        </button>
      </div>

      {/* Fullscreen Navigation Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-700 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={slides[currentSlide].image}
            alt="Menu Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Center Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[600px] h-[600px]">
            <svg 
              className="absolute inset-0 w-full h-full"
              version="1.1" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 100 100"
            >
              <path 
                d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="0.5"
                strokeDasharray="4 4"
                className={`transition-all duration-1000 ${isMenuOpen ? 'animate-[spin_20s_linear_infinite]' : ''}`}
                style={{ transformOrigin: 'center' }}
              />
            </svg>

            {/* Navigation Links */}
            <div className="absolute inset-0 flex items-center justify-center">
              <nav className="text-center">
                <ul className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className="text-white text-4xl font-bold tracking-wider hover:text-gray-400 cursor-pointer transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section + Slides */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Left Content */}
        <div className="absolute left-12 md:left-24 z-30 max-w-xl">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-3 h-3 bg-white rounded-full mb-8 shadow-[0_0_12px_rgba(255,255,255,0.8)]"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <h1 className="text-white font-bold mb-2" style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', lineHeight: 1, fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}>
              {slides[currentSlide].title}
            </h1>
            
            <h2 className="text-white font-bold mb-12" style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', lineHeight: 1, fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}>
              {slides[currentSlide].subtitle}
            </h2>
            
            <button className="text-white text-sm tracking-widest hover:text-gray-300 transition-colors">
              {slides[currentSlide].cta}
            </button>
          </motion.div>
        </div>

        {/* Circular Image Container */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            key={currentSlide}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
            style={{ width: 'clamp(300px, 40vw, 550px)', height: 'clamp(300px, 40vw, 550px)' }}
          >
            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
              <img 
                src={slides[currentSlide].image}
                alt="Portfolio"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-12 right-24 flex gap-6 z-30">
          <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-opacity-20 transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-opacity-20 transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Play/Pause + Progress Bar */}
        <div className="absolute bottom-12 right-60 z-30">
          <button onClick={() => setIsPlaying(!isPlaying)} className="relative w-12 h-12 flex items-center justify-center">
            <svg className="absolute inset-0 w-12 h-12 transform -rotate-90">
              <circle cx="24" cy="24" r="22" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
              <circle
                cx="24"
                cy="24"
                r="22"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 22}`}
                strokeDashoffset={`${2 * Math.PI * 22 * (1 - progress / 100)}`}
                className="transition-all duration-100"
              />
            </svg>
            <div className="text-white text-xs">
              {isPlaying ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </div>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 z-30">
          <div className="h-full bg-white transition-all duration-100" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="absolute bottom-12 left-12 z-30">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-white border-opacity-30 flex items-center justify-center">
            <span className="text-white text-sm">{currentSlide + 1}</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
