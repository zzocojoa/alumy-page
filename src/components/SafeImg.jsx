import React from 'react';

// 이미지 로드 실패 시 대체 UI를 보여주는 안전한 이미지 컴포넌트
export default function SafeImg({ src, alt, className, style, placeholderH = 'aspect-[4/3]' }) {
  const [currentSrc, setCurrentSrc] = React.useState(src);
  const [hasError, setHasError] = React.useState(false);
  const [triedFallback, setTriedFallback] = React.useState(false);

  // 이미지 로딩에 실패했을 때 호출되는 함수
  const onError = () => {
    // .png ↔ .jpg 확장자 자동 변경을 1회 시도합니다.
    if (!triedFallback) {
      setTriedFallback(true);
      if (/\.png$/i.test(currentSrc)) {
        setCurrentSrc(currentSrc.replace(/\.png$/i, '.jpg'));
        return;
      }
      if (/\.jpe?g$/i.test(currentSrc)) {
        setCurrentSrc(currentSrc.replace(/\.jpe?g$/i, '.png'));
        return;
      }
    }
    // 최종적으로 실패하면 에러 상태로 변경
    setHasError(true);
  };

  // 에러가 발생한 경우, 대체 UI를 렌더링합니다.
  if (hasError) {
    return (
      <div
        className={`grid place-items-center bg-gray-100 text-gray-500 ${className} ${placeholderH}`}
        style={style}
      >
        <span className="text-xs text-center p-2">이미지 로드 실패<br/>({alt})</span>
      </div>
    );
  }

  // 정상적인 경우, img 태그를 렌더링합니다.
  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      style={style}
      loading="lazy" // 지연 로딩으로 성능 최적화
      onError={onError}
    />
  );
}
