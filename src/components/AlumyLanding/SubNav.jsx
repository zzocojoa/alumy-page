import React from 'react';

function SubNav() {
  return (
    <div className="sticky top-0 z-30 border-y border-stone-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2 text-sm">
        <a href="#details" className="rounded-full bg-stone-100 px-3 py-1 hover:bg-stone-200">Details</a>
        <a href="#colors" className="rounded-full bg-stone-100 px-3 py-1 hover:bg-stone-200">Color</a>
        <a href="#size" className="rounded-full bg-stone-100 px-3 py-1 hover:bg-stone-200">Size</a>
        <a href="#spec" className="rounded-full bg-stone-100 px-3 py-1 hover:bg-stone-200">Spec</a>
        <a href="#contact" className="rounded-full bg-stone-100 px-3 py-1 hover:bg-stone-200">Contact</a>
      </div>
    </div>
  );
}

export default SubNav;