import React, { useState } from "react";
import image1 from "../assets/1a42454ed0b5f558b2ab7f2478aefbb4d03a89c7.jpg";
import image2 from "../assets/LunaHeal.jpg";
import image3 from "../assets/Bloom Haven.jpg";

const HeaderSectionService = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: image1 },
    {
      image: image2,
      special: true, // This can now be ignored, but is kept for context
    },
    { image: image3 },
  ];

  const goToNextSlide = (e) => {
    e?.stopPropagation();
    setCurrentSlide((s) => Math.min(s + 1, slides.length - 1));
  };

  const goToPrevSlide = (e) => {
    e?.stopPropagation();
    setCurrentSlide((s) => Math.max(s - 1, 0));
  };

  const goToSlide = (i) => setCurrentSlide(i);

  return (
    <div className="w-full flex justify-center">
      {/* Desktop Version */}
      <div className="hidden md:block relative bg-white w-full max-w-[1280px] h-[530px] mt-8 overflow-visible">
        {/* Image Slider Container (left) */}
        <div className="absolute top-0 -left-6 w-[432px] h-[432px] rounded-[20px] border border-[#888] overflow-hidden flex-shrink-0">
          {/* Slides */}
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
              >
                <img
                  src={slide.image}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover object-bottom"
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            ))}

            {/* Left / Right arrows (over image) */}
            <button
              onClick={goToPrevSlide}
              aria-label="Previous slide"
              className={`absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full ${
                currentSlide === 0 ? "opacity-60 cursor-default" : "hover:scale-105"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="38" viewBox="0 0 18 35" fill="none">
                <path
                  d="M3.18811 18.5369L11.4379 26.7866L13.5 24.7246L6.2812 17.5058L13.5 10.2871L11.4379 8.22498L3.18811 16.4748C2.91466 16.7482 2.76111 17.1191 2.76111 17.5058C2.76111 17.8925 2.91466 18.2634 3.18811 18.5369Z"
                  fill="white"
                />
              </svg>
            </button>

            <button
              onClick={goToNextSlide}
              aria-label="Next slide"
              className={`absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full ${
                currentSlide === slides.length - 1 ? "opacity-60 cursor-default" : "hover:scale-105"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="38" viewBox="0 0 18 35" fill="none">
                <path
                  d="M14.8119 18.5369L6.56208 26.7866L4.5 24.7246L11.7188 17.5058L4.5 10.2871L6.56208 8.22498L14.8119 16.4748C15.0853 16.7482 15.2389 17.1191 15.2389 17.5058C15.2389 17.8925 15.0853 18.2634 14.8119 18.5369Z"
                  fill="white"
                />
              </svg>
            </button>

            {/* Pagination dots with animation */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === currentSlide ? "w-3 h-3 bg-white" : "w-2.5 h-2.5 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Static Content Section (right) */}
        <div className="absolute top-0 left-0 pl-[552px] pr-6 h-full flex flex-col justify-start w-full">
          <h1 className="text-[#2A2929] font-inter uppercase font-bold text-[48px] leading-[67.2px] mb-6 text-left max-w-[810px]">
            Beeyan | Classical Hatha Yoga Center
          </h1>

          <p className="text-[#616161] font-montserrat text-base font-semibold underline underline-offset-2 mb-4 max-w-[700px] text-left">
            Fitness &amp; Body Movement / Yoga
          </p>

          <div className="flex items-center gap-2 mb-8 max-w-[700px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none">
              <path
                d="M17.4993 16.7708C16.5324 16.7708 15.6051 16.3867 14.9214 15.703C14.2376 15.0192 13.8535 14.0919 13.8535 13.125C13.8535 12.158 14.2376 11.2307 14.9214 10.547C15.6051 9.86324 16.5324 9.47913 17.4993 9.47913C18.4663 9.47913 19.3936 9.86324 20.0773 10.547C20.7611 11.2307 21.1452 12.158 21.1452 13.125C21.1452 13.6037 21.0509 14.0778 20.8677 14.5202C20.6844 14.9625 20.4159 15.3644 20.0773 15.703C19.7388 16.0415 19.3369 16.3101 18.8945 16.4933C18.4522 16.6765 17.9781 16.7708 17.4993 16.7708ZM17.4993 2.91663C14.7919 2.91663 12.1954 3.99214 10.281 5.90658C8.36653 7.82101 7.29102 10.4175 7.29102 13.125C7.29102 20.7812 17.4993 32.0833 17.4993 32.0833C17.4993 32.0833 27.7077 20.7812 27.7077 13.125C27.7077 10.4175 26.6322 7.82101 24.7177 5.90658C22.8033 3.99214 20.2068 2.91663 17.4993 2.91663Z"
                fill="#D4AF37"
              />
            </svg>
            <p className="text-[#464646] font-montserrat text-xl font-medium leading-[110%] max-w-[600px]">
              Sector 45, Gurugram, Haryana 122018, India
            </p>
          </div>

          <button className="bg-black text-white px-8 py-3 rounded-md font-bold hover:bg-gray-800 transition w-max">
            Contact
          </button>
        </div>

        {/* Highlights Section */}
        <div className="absolute top-[470px] -left-6 w-full">
          <h2 className="text-black font-inter font-semibold text-[18px] mb-2">Highlights</h2>
          <p className="text-[#4D4D4D] font-montserrat font-medium text-lg leading-[140%] mb-4">
            Female Staff Available | Air Conditioned | Free Parking | Trained Classical Hatha Yoga teachers | Certified by Sadhguru Gurukulam
          </p>
          <div className="w-[1320px] h-px bg-[#A2A2A2]"></div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden bg-white w-full">
        {/* Mobile image takes up the full width, with height determined by the image's aspect ratio */}
        <div className="relative w-full overflow-hidden -top-5">
          {/* Mobile rounded container that holds the image & controls */}
          <div className="relative w-full aspect-[4/3] h-[393px] overflow-hidden shadow-sm">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
              >
                <img
                  src={slide.image}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover object-bottom"
                />

                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            ))}

            {/* Arrows */}
            <button
              onClick={goToPrevSlide}
              aria-label="Previous"
              className={`absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full ${
                currentSlide === 0 ? "opacity-60 cursor-default" : "hover:scale-105"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="38" viewBox="0 0 18 35" fill="none">
                <path
                  d="M3.18811 18.5369L11.4379 26.7866L13.5 24.7246L6.2812 17.5058L13.5 10.2871L11.4379 8.22498L3.18811 16.4748C2.91466 16.7482 2.76111 17.1191 2.76111 17.5058C2.76111 17.8925 2.91466 18.2634 3.18811 18.5369Z"
                  fill="white"
                />
              </svg>
            </button>

            <button
              onClick={goToNextSlide}
              aria-label="Next"
              className={`absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full ${
                currentSlide === slides.length - 1 ? "opacity-60 cursor-default" : "hover:scale-105"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="38" viewBox="0 0 18 35" fill="none">
                <path
                  d="M14.8119 18.5369L6.56208 26.7866L4.5 24.7246L11.7188 17.5058L4.5 10.2871L6.56208 8.22498L14.8119 16.4748C15.0853 16.7482 15.2389 17.1191 15.2389 17.5058C15.2389 17.8925 15.0853 18.2634 14.8119 18.5369Z"
                  fill="white"
                />
              </svg>
            </button>

            {/* Pagination dots with animation for mobile */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === currentSlide ? "w-3 h-3 bg-white" : "w-2 h-2 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* static content below */}
        <div className="px-4">
          <h1 className="text-[#2A2929] font-inter uppercase font-bold text-[16px] mt-4 mb-2 leading-snug">
            Beeyan | Classical Hatha Yoga Center
          </h1>
          <p className="text-[#616161] font-montserrat text-sm font-semibold underline underline-offset-2 mb-3">
            Fitness &amp; Body Movement / Yoga
          </p>
          <div className="flex items-start gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <path
                d="M12 11.5c-.86 0-1.687-.34-2.293-.947A3.236 3.236 0 0 1 8.76 8.26a3.236 3.236 0 0 1 .947-2.293A3.236 3.236 0 0 1 12 5.02c.86 0 1.687.34 2.293.947A3.236 3.236 0 0 1 15.24 8.26c0 .43-.085.855-.268 1.246a3.27 3.27 0 0 1-.739 1.046A3.27 3.27 0 0 1 12 11.5Zm0-8.75c-2.12 0-4.153.843-5.657 2.343C4.843 6.597 4 8.63 4 10.75 4 16.75 12 25 12 25s8-8.25 8-14.25c0-2.12-.843-4.153-2.343-5.657A7.982 7.982 0 0 0 12 2.75Z"
                fill="#D4AF37"
              />
            </svg>
            <p className="text-[#464646] font-montserrat text-[12px]">
              Sector 45, Gurugram, Haryana 122018, India
            </p>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-md font-bold mb-6">Contact</button>
          <h2 className="text-black font-inter font-semibold text-[16px] mb-1">Highlights</h2>
          <p className="text-[#4D4D4D] font-montserrat text-[14px] mb-6">
            Female Staff Available | Air Conditioned | Free Parking | Trained Classical Hatha Yoga teachers | Certified by Sadhguru Gurukulam
          </p>
          <div className="w-[350px] h-px bg-[#A2A2A2] mb-6"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSectionService;