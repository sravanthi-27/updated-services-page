import React from 'react';
import b1 from '../assets/b1.jpg'; 
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';

const PartnerSection = () => {
  return (
    <>
      {/* Desktop Version (1280px+) - 3 images in one row */}
      <div className="hidden xl:block  relative bg-white w-full h-[305.455px] my-10 ml-[100px] mr-[100px]">
        <div 
          className="absolute left-[470px] flex gap-[22px] top-0 -translate-x-1/2 font-['Sukhumvit_Set','Kanit',sans-serif] w-full max-w-[1200px] px-[120px] box-border"
        >
          {/* Wide banner image */}
          <div
            className="flex-shrink-0 relative w-[640px] h-[305.455px] bg-cover bg-center rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-gray-200"
            style={{ backgroundImage: `url(${b1})` }}
          />
          
          {/* Square image 1 */}
          <div
            className="flex-shrink-0 relative w-[320px] h-[305px] bg-cover bg-center rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-gray-200"
            style={{ backgroundImage: `url(${b2})` }}
          />
          
          {/* Square image 2 */}
          <div
            className="flex-shrink-0 relative w-[320px] h-[305px] bg-cover bg-center rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-gray-200"
            style={{ backgroundImage: `url(${b3})` }}
          />
        </div>
      </div>

      {/* Tablet Version (768px-1279px) - 1 banner + 2 squares below */}
      <div className="hidden md:block xl:hidden w-full bg-white py-8">
        <div className="container mx-auto px-6">
          {/* Top banner */}
          <div className="w-full h-[280px] mb-6 rounded-xl overflow-hidden shadow-[0_3px_15px_rgba(0,0,0,0.1)] border border-gray-200">
            <img
              src={b1}
              alt="Banner"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Bottom images */}
          <div className="flex gap-6 justify-between">
            <div className="w-full h-[260px] rounded-xl overflow-hidden shadow-[0_3px_15px_rgba(0,0,0,0.1)] border border-gray-200">
              <img
                src={b2}
                alt="Content 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[260px] rounded-xl overflow-hidden shadow-[0_3px_15px_rgba(0,0,0,0.1)] border border-gray-200">
              <img
                src={b3}
                alt="Content 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version (<768px) - Stacked layout */}
      <div className="block md:hidden w-full bg-white py-6 px-4 -mb-10">
        {/* Top banner */}
        <div className="w-full aspect-[33/16] mb-4 rounded-xl overflow-hidden shadow-[0_1.88px_8.8px_rgba(0,0,0,0.1)] border border-gray-200">
          <img
            src={b1}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Bottom images */}
        <div className="flex gap-4 w-full">
          <div className="w-1/2 aspect-square rounded-xl overflow-hidden shadow-[0_1.88px_8.8px_rgba(0,0,0,0.1)] border border-gray-200">
            <img
              src={b2}
              alt="Content 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 aspect-square rounded-xl overflow-hidden shadow-[0_1.88px_8.8px_rgba(0,0,0,0.1)] border border-gray-200">
            <img
              src={b3}
              alt="Content 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerSection;
