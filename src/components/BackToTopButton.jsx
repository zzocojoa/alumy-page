import React from 'react';

export default function BackToTopButton() {
  return (
    <button 
      type="button" 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
      className="fixed bottom-5 right-5 inline-flex items-center justify-center w-11 h-11 rounded-full shadow-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-transform hover:scale-110" 
      aria-label="맨 위로">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" transform="rotate(180 10 10)" />
      </svg>
    </button>
  );
}
