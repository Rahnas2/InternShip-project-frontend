
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react';
import { heroData } from '../../utils/heroData';

const Hero = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollContainerRef = useRef(null);

   const scrollToSection = (index) => {
    if (scrollContainerRef.current) {
      const sectionWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: index * sectionWidth,
        behavior: 'smooth'
      });
    }
  };

  const nextSection = () => {
    const next = (currentSection + 1) % heroData.length;
    setCurrentSection(next);
    scrollToSection(next);
  };

  const prevSection = () => {
    const prev = currentSection === 0 ? heroData.length - 1 : currentSection - 1;
    setCurrentSection(prev);
    scrollToSection(prev);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const sectionWidth = scrollContainerRef.current.clientWidth;
      const newSection = Math.round(scrollLeft / sectionWidth);
      
      if (newSection !== currentSection && newSection >= 0 && newSection < heroData.length) {
        setCurrentSection(newSection);
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [currentSection]);

  // Auto-scroll functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSection();
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [currentSection]);

  // Handle wheel scroll for horizontal scrolling
  const handleWheel = (e) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="relative top-0 w-full h-screen overflow-hidden">
      {/* Horizontal scrolling container */}
      <div
        ref={scrollContainerRef}
        className="flex w-full h-screen overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide"
        style={{ 
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
        onWheel={handleWheel}
      >
        {heroData.map((section, index) => (
          <section
            key={section.id}
            className="flex-shrink-0 w-full h-screen relative"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Background Image */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${section.image})` }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-opacity-30"></div>
            </div>

            {/* Message Box */}
            <div className="absolute top-1/4 right-8 md:right-16 lg:right-20 w-80 md:w-96 p-8 backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl shadow-2xl transform transition-all duration-700 ease-out hover:bg-white/25 hover:scale-105">
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>

              {/* Content */}
              <div className="relative z-10">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  {section.title}
                </h1>
                <p className="text-white/90 text-sm md:text-base leading-relaxed drop-shadow-md">
                  {section.message}
                </p>

                {/* Decorative element */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-white/60 to-transparent rounded-full"></div>
              </div>
            </div>

            {/* Section number indicator */}
            <div className="absolute bottom-8 right-8 text-white/60 font-mono text-sm backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full">
              {String(index + 1).padStart(2, '0')} / {String(heroData.length).padStart(2, '0')}
            </div>
          </section>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSection}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSection}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index
                ? 'bg-white shadow-lg scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => {
              setCurrentSection(index);
              scrollToSection(index);
            }}
          />
        ))}
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default Hero