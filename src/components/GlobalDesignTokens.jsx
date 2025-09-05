import React from 'react';

// ====== 전역 디자인 토큰(센터링/버튼 동일화 포함) ======
// 페이지 전체의 디자인 일관성을 위한 스타일을 정의합니다.
// 색상, 여백, 글꼴 등 디자인 시스템의 기본 요소를 변수로 관리합니다.
export default function GlobalDesignTokens() {
  return (
    <>
      <style>{`
        :root{
          --page-max: 72rem;         /* 1152px (Tailwind 6xl 유사) */
          --pad-x: 1rem;             /* 좌우 여백 */
          --radius: 1rem;            /* 코너 반경 베이스 */
          --brand: #111827;           /* 브랜드(Almost Black) */
          --brand-ink: #ffffff;      /* 브랜드 위 텍스트 */
          --ink: #111827;             /* 본문 텍스트 */
          --ink-weak: #4b5563;       /* 보조 텍스트 */
          --surface: #ffffff;        /* 기본 표면 */
          --surface-2: #f8fafc;       /* 보조 표면 */
        }
        /* 기본 폰트 및 스무딩 설정 */
        body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        
        /* 공용 클래스 */
        .page { max-width: var(--page-max); margin-inline:auto; padding-inline: var(--pad-x); }
        .btn { display:inline-flex; align-items:center; justify-content:center; gap:.5rem; border-radius: calc(var(--radius) + .25rem); padding:.625rem 1rem; font-weight:600; line-height:1; transition: transform .06s ease, box-shadow .15s ease, background-color .15s ease, color .15s ease; cursor:pointer; }
        .btn:active { transform: translateY(.5px) scale(.99); }
        .btn-primary { background: var(--brand); color: var(--brand-ink); box-shadow: 0 6px 20px rgba(17,24,39,.15); border: 1px solid rgba(0,0,0,.06); }
        .btn-primary:hover { background: #0b1220; }
        .btn-ghost { background: transparent; color: var(--ink-weak); border: none; }
        .btn-ghost:hover { color: var(--ink); }
        .btn-outline { background:#fff; color: var(--ink); border:1px solid #e5e7eb; }
        .btn-outline:hover { background:#f9fafb; }
        .navbar { position: sticky; top:0; z-index:40; background: rgba(255,255,255,.8); backdrop-filter: blur(6px); border-bottom:1px solid #f3f4f6; transition: transform 0.3s ease-in-out; }
        .navbar--hidden { transform: translateY(-100%); }
        .card { border:1px solid #e5e7eb; border-radius: calc(var(--radius) + .5rem); background: var(--surface); }
        
        /* 타이포그래피 유틸리티 */
        .h-tight { letter-spacing: -0.02em; }
        .num { font-variant-numeric: tabular-nums; }
        .alt-head { font-family: Bahnschrift, 'Segoe UI Variable Display', 'Segoe UI', Arial, system-ui, sans-serif; }
        .display { font-weight: 900; letter-spacing: -0.015em; line-height: 1.15; }
        .eyebrow { text-transform: uppercase; letter-spacing: .14em; font-weight: 700; font-size: 0.75rem; }
        .balance { text-wrap: balance; }
      `}</style>
    </>
  );
}
