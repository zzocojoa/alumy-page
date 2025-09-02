import React from 'react';

const MobileBottomBar = () => (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <span className="text-sm font-medium">Alumy · 미닛 미니홀더</span>
          <a href="tel:12345678" className="rounded-xl bg-stone-900 px-4 py-2 text-sm font-semibold text-white">문의</a>
        </div>
      </div>
);

export default MobileBottomBar;
