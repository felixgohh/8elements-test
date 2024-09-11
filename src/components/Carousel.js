import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/400x200.png?text=Image+1',
  'https://via.placeholder.com/400x200.png?text=Image+2',
  'https://via.placeholder.com/400x200.png?text=Image+3',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-[40vh] md:h-[60vh]">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-blue-600 text-white px-2 py-1 rounded-full hover:bg-blue-700"
      >
        &lt;
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-blue-600 text-white px-2 py-1 rounded-full hover:bg-blue-700"
      >
        &gt;
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            } hover:bg-blue-400`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
