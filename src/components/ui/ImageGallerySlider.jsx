import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useDarkMode } from '../../DarkModeContext';

const ImageGallerySlider = ({ images, autoSlideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const { darkMode } = useDarkMode();
  const timerRef = useRef(null);
  
  // Return null if no images are provided
  if (!images || images.length === 0) return null;
  
  // Auto slide functionality
  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    // Set up auto slide if playing is enabled and we have more than one image
    if (isPlaying && images.length > 1) {
      timerRef.current = setInterval(() => {
        goToNext();
      }, autoSlideInterval);
    }
    
    // Clean up timer on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, currentIndex, images.length]);
  
  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Pause slideshow on hover
  const handleMouseEnter = () => {
    if (isPlaying) {
      clearInterval(timerRef.current);
    }
  };
  
  // Resume slideshow on mouse leave if playing is enabled
  const handleMouseLeave = () => {
    if (isPlaying && images.length > 1) {
      timerRef.current = setInterval(() => {
        goToNext();
      }, autoSlideInterval);
    }
  };

  return (
    <div 
      className={`mb-6 p-5 rounded-xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-lg relative h-[350px] md:h-[400px] group`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="h-full relative overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="w-full h-full object-contain"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        
        {images.length > 1 && (
          <>
            {/* Navigation arrows */}
            <motion.div 
              className={`absolute top-1/2 left-2 -translate-y-1/2 ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } rounded-full p-2 cursor-pointer shadow-lg opacity-70 hover:opacity-100`}
              onClick={goToPrevious}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} className={darkMode ? 'text-pink-400' : 'text-pink-600'} />
            </motion.div>
            
            <motion.div 
              className={`absolute top-1/2 right-2 -translate-y-1/2 ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } rounded-full p-2 cursor-pointer shadow-lg opacity-70 hover:opacity-100`}
              onClick={goToNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} className={darkMode ? 'text-pink-400' : 'text-pink-600'} />
            </motion.div>
            
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, slideIndex) => (
                <motion.div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`cursor-pointer w-3 h-3 rounded-full ${
                    slideIndex === currentIndex 
                      ? darkMode 
                        ? 'bg-pink-400' 
                        : 'bg-pink-500'
                      : darkMode 
                        ? 'bg-gray-600' 
                        : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            {/* Play/Pause button */}
            <motion.div 
              className={`absolute bottom-4 right-4 ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } rounded-full p-2 cursor-pointer shadow-lg opacity-70 hover:opacity-100`}
              onClick={togglePlayPause}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? (
                <Pause size={20} className={darkMode ? 'text-pink-400' : 'text-pink-600'} />
              ) : (
                <Play size={20} className={darkMode ? 'text-pink-400' : 'text-pink-600'} />
              )}
            </motion.div>
          </>
        )}
      </div>
      
      {/* Image counter */}
      <div className={`absolute top-4 right-4 ${
        darkMode ? 'bg-gray-700' : 'bg-white/80'
      } px-3 py-1 rounded-full text-sm font-medium shadow-md ${
        darkMode ? 'text-gray-200' : 'text-gray-700'
      }`}>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageGallerySlider;