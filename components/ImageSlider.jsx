"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ImageSlider = ({ images, altText, autoplaySpeed = 2000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayRef = useRef(null);

  const nextImage = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images?.length - 1 ? 0 : prevIndex + 1
    );

    // Reset timer when manually changing images
    resetAutoplay();
  };

  const prevImage = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images?.length - 1 : prevIndex - 1
    );

    // Reset timer when manually changing images
    resetAutoplay();
  };

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(nextImage, autoplaySpeed);
    }
  };

  const goToImage = (index) => {
    if (isTransitioning || index === currentImageIndex) return;

    setIsTransitioning(true);
    setCurrentImageIndex(index);
    resetAutoplay();
  };

  useEffect(() => {
    // Set up autoplay
    autoplayRef.current = setInterval(nextImage, autoplaySpeed);

    // Clear interval on unmount
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplaySpeed]);

  // Reset transition state after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with transition duration

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  // Pause autoplay when user hovers over slider
  const handleMouseEnter = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const handleMouseLeave = () => {
    resetAutoplay();
  };

  return (
    <div
      className="relative overflow-hidden mb-6 border rounded-3xl group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-video">
        {/* Image container with transitions */}
        <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
          {images?.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentImageIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <Image
                src={image || "/placeholder.svg?height=600&width=1000"}
                alt={`${altText} - Image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transform transition duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transform transition duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Image counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          {currentImageIndex + 1} / {images?.length}
        </div>

        {/* Dots navigation */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images?.map((_, index) => (
            <button
              key={index}
              className={`h-2 transition-all duration-300 rounded-full focus:outline-none ${
                index === currentImageIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/60 hover:bg-white/80"
              }`}
              onClick={() => goToImage(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
        <div
          className="h-full bg-blue-500 transition-all duration-300 ease-out"
          style={{
            width: `${(currentImageIndex / (images?.length - 1)) * 100}%`,
            transitionDuration: `${
              isTransitioning ? "300ms" : autoplaySpeed + "ms"
            }`,
          }}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
