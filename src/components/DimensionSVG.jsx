import React from 'react';

// 제품 치수도를 표현하는 SVG 컴포넌트
export default function DimensionSVG({ wLabel = "W", hLabel = "H" }) {
  return (
    <svg viewBox="0 0 600 360" className="w-full h-auto rounded-2xl ring-1 ring-gray-200 bg-white" role="img" aria-label="제품 치수도">
      <rect x="120" y="140" width="360" height="180" fill="#f5f5f5" stroke="#d1d5db" />
      <rect x="120" y="325" width="360" height="15" fill="#e5e7eb" stroke="#d1d5db" />
      <line x1="120" y1="320" x2="480" y2="320" stroke="#9ca3af" strokeDasharray="6 6" />
      <polygon points="120,316 120,324 110,320" fill="#9ca3af" />
      <polygon points="480,316 480,324 490,320" fill="#9ca3af" />
      <text x="300" y="312" textAnchor="middle" fontSize="16" fill="#374151">{wLabel}</text>
      <line x1="500" y1="140" x2="500" y2="320" stroke="#9ca3af" strokeDasharray="6 6" />
      <polygon points="496,140 504,140 500,130" fill="#9ca3af" />
      <polygon points="496,320 504,320 500,330" fill="#9ca3af" />
      <text x="510" y="235" fontSize="16" fill="#374151">{hLabel}</text>
      <text x="300" y="60" textAnchor="middle" fontSize="20" fill="#111827" fontWeight="600">치수 개념도</text>
    </svg>
  );
}
