import React from 'react';
import SafeImg from './SafeImg';

export default function Details({ IMG }) {
  return (
    <section id="details" className="page scroll-mt-24 py-10 md:py-14">
      <h3 className="display alt-head text-xl md:text-3xl h-tight balance">Details</h3>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Image 1 */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <SafeImg 
            src={IMG.detail1} 
            alt="제품 디테일 1" 
            style={{ objectPosition: '50% 50%' }}
            className="w-full aspect-[12/9] object-cover transition-transform duration-300 ease-in-out hover:scale-125" 
          />
        </div>
        {/* Image 2 */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <SafeImg 
            src={IMG.detail2} 
            alt="제품 디테일 2" 
            style={{ objectPosition: '100% 50%' }}
            className="w-full aspect-[12/9] object-cover transition-transform duration-300 ease-in-out hover:scale-110" 
          />
        </div>
        {/* Image 3 */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <SafeImg 
            src={IMG.detail3} 
            alt="제품 디테일 3" 
            className="w-full aspect-[12/9] object-cover object-bottom transition-transform duration-300 ease-in-out hover:scale-150" 
          />
        </div>
      </div>
    </section>
  );
}
