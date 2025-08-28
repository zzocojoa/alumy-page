import React from 'react';
import SafeImg from './SafeImg';

export default function Header({ PRODUCT, IMG, scrollToId, onKey }) {
  return (
    <header className="navbar">
      <div className="page py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <SafeImg src={IMG.logo} alt="Alumy brand logo" className="h-8 w-auto" />
          <h1 className="display alt-head text-2xl md:text-4xl h-tight balance">{PRODUCT.title}</h1>
        </div>
        <nav className="hidden md:flex items-center gap-2 text-sm">
          <button onClick={() => scrollToId('colors')} onKeyDown={(e) => onKey(e, 'colors')} className="btn btn-ghost text-xs tracking-wider alt-head">색상</button>
          <button onClick={() => scrollToId('intro')} onKeyDown={(e) => onKey(e, 'intro')} className="btn btn-ghost text-xs tracking-wider alt-head">제품 소개</button>
          <button onClick={() => scrollToId('details')} onKeyDown={(e) => onKey(e, 'details')} className="btn btn-ghost text-xs tracking-wider alt-head">Details</button>
          {/* <button onClick={() => scrollToId('checkpoint')} onKeyDown={(e) => onKey(e, 'checkpoint')} className="btn btn-ghost text-xs tracking-wider alt-head">Check Point</button> */}
          <button onClick={() => scrollToId('usage')} onKeyDown={(e) => onKey(e, 'usage')} className="btn btn-ghost text-xs tracking-wider alt-head">활용 예시</button>
          <button onClick={() => scrollToId('size')} onKeyDown={(e) => onKey(e, 'size')} className="btn btn-ghost text-xs tracking-wider alt-head">Size</button>
          <button onClick={() => scrollToId('price')} onKeyDown={(e) => onKey(e, 'price')} className="btn btn-ghost text-xs tracking-wider alt-head">Price</button>
        </nav>
        <button type="button" onClick={() => scrollToId('inquiry')} onKeyDown={(e) => onKey(e, 'inquiry')} className="btn btn-primary">문의하기</button>
      </div>
    </header>
  );
}
