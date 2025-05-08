import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { motion } from 'framer-motion';
import Card from './Card';
import img1 from '../../assets/p1.jpg';
import img2 from '../../assets/p2.jpg';
import img3 from '../../assets/p3.jpg';
import img4 from '../../assets/p4.jpg';
import img5 from '../../assets/p5.jpg';
import img6 from '../../assets/p6.jpg';

const cardData = [
  { image: img1, title: 'Monstera deliciosa' },
  { image: img2, title: 'Dieffenbachia' },
  { image: img3, title: 'Scindapsus pictus' },
  { image: img4, title: 'Santalum album' },
  { image: img5, title: 'Epipremnum' },
  { image: img6, title: 'Philodendron' },
];

function Carousel() {
  const [curr, setCurr] = useState(0);
  const total = cardData.length;

  const next = () => {
    setCurr((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurr((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [curr]);

  const getVisibleCards = () => {
    const left = (curr - 1 + total) % total;
    const right = (curr + 1) % total;
    return [cardData[left], cardData[curr], cardData[right]];
  };

  const visibleCards = getVisibleCards();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="relative w-full max-w-6xl mx-auto h-[400px] mt-5 px-2 overflow-hidden"
    >
      {/* Cards */}
      <div className="relative flex justify-center items-center h-[300px]">
        {visibleCards.map((card, index) => {
          const position = index - 1; // -1: left, 0: center, 1: right
          const xOffset = position * 300;
          const scale = position === 0 ? 1 : 0.9;
          const opacity = position === 0 ? 1 : 0.5;
          const zIndex = position === 0 ? 10 : 0;

          return (
            <motion.div
              key={index}
              animate={{ x: xOffset, scale, opacity, zIndex }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute rounded-xl cursor-pointer"
              style={{ width: '250px', height: '250px' }}
            >
              <Card image={card.image}>
                <h2 className="text-xl font-semibold text-center">{card.title}</h2>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button onClick={prev} className="p-1 rounded-full shadow hover:bg-white/50 z-20">
          <ChevronLeft size={32} />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow hover:bg-white/50 z-20">
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4">
        {cardData.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 mx-1 rounded-full transition-all duration-300 ${
              i === curr ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Carousel;
