import { useState } from 'react'
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import Carousel from './Carousel';

const gradientTextClass = "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text";

const FeatureSection = ({ feature }) => {
  const animatedItem = useScrollFadeIn();
  const isDark = feature.theme === 'dark';
  const bgColor = isDark ? 'bg-black' : 'bg-gray-50';

  const items = Array.isArray(feature.images) && feature.images.length > 0
    ? feature.images
    : [{ src: feature.image, alt: feature.alt }];

  const pickText = (it) => it?.label || it?.caption || it?.alt || ''
  const deriveDefaultCaption = (it, idx) => {
    const s = it?.src || ''
    if (/Utilized_Products-1\.png$/i.test(s)) return '베이커리 진열, 자연스럽게.'
    if (/Utilized_Products-2\.png$/i.test(s)) return '데스크 위에도, 미니멀하게.'
    if (/Utilized_Products-3\.png$/i.test(s)) return '브러시드 알루미늄의 질감.'
    if (/Utilized_Products-4\.png$/i.test(s)) return '회의실 네임태그로도 완벽하게.'
    if (/Silver\.jpg$/i.test(s)) return 'Silver — 정제된 메탈 감성.'
    if (/Red\.png$/i.test(s)) return 'Red — 공간을 밝히는 포인트.'
    if (/Green\.png$/i.test(s)) return 'Green — 차분한 균형감.'
    if (/Yellow\.png$/i.test(s)) return 'Yellow — 따뜻한 온기.'
    return ''
  }
  const pickWithDefault = (it, idx) => pickText(it) || deriveDefaultCaption(it, idx)
  const [caption, setCaption] = useState(pickWithDefault(items?.[0], 0))
  const strongWords = ['자연스럽게.', '미니멀하게.', '질감.', '완벽하게.']
  const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${strongWords.map(escape).join('|')})`, 'g')
  const renderCaption = (text) => {
    if (!text) return null
    const parts = String(text).split(regex)
    return parts.map((part, i) => (
      strongWords.includes(part)
        ? <span key={i} className="text-strong">{part}</span>
        : <span key={i}>{part}</span>
    ))
  }

  const alignClass = isDark ? 'text-center' : 'text-left'

  return (
    <section className={`relative z-10 py-24 md:py-32 ${bgColor}`} {...animatedItem}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mx-auto max-w-3xl ${alignClass}`}>
          <h2 className={`text-4xl font-bold tracking-tight sm:text-5xl ${gradientTextClass}`}>{feature.title}</h2>
          <p className={`mt-6 leading-8 text-body`}>{feature.desc}</p>
        </div>
        <div className="mt-16 flow-root sm:mt-20">
          <div className="relative z-10 overflow-hidden rounded-2xl ring-1 ring-gray-900/10 shadow-2xl h-[360px] sm:h-[420px] md:h-[520px] lg:h-[600px]">
            <Carousel
              items={items}
              captionMode="none"
              onIndexChange={(i, it) => setCaption(pickWithDefault(it, i))}
            />
          </div>
          <div className={`mt-4 font-semibold text-body ${alignClass}`}>
            {renderCaption(caption)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
