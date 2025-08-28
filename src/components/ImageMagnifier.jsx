import React, { useState } from 'react';

export default function ImageMagnifier({
  src,
  alt,
  className,
  magnifierHeight = 150,
  magnifierWidth = 150,
  zoomLevel = 2,
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  const handleMouseEnter = (e) => {
    const elem = e.currentTarget;
    const { width, height } = elem.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  };

  const handleMouseMove = (e) => {
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setXY([x, y]);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  return (
    <div
      style={{ position: 'relative', cursor: 'crosshair' }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} className={className} />

      <div
        style={{
          display: showMagnifier ? '' : 'none',
          position: 'absolute',
          pointerEvents: 'none',
          height: `${magnifierHeight}px`,
          width: `${magnifierWidth}px`,
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifierWidth / 2}px`,
          opacity: '1',
          border: '1px solid lightgray',
          backgroundColor: 'white',
          borderRadius: '50%',
          backgroundImage: `url('${src}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
          backgroundPosition: `-${x * zoomLevel - magnifierWidth / 2}px -${y * zoomLevel - magnifierHeight / 2}px`,
        }}
      ></div>
    </div>
  );
}
