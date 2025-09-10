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

  return (
    <section className={`relative z-10 py-24 md:py-32 ${bgColor}`} {...animatedItem}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`text-4xl font-bold tracking-tight sm:text-5xl ${gradientTextClass}`}>{feature.title}</h2>
          <p className={`mt-6 text-lg leading-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{feature.desc}</p>
        </div>
        <div className="mt-16 flow-root sm:mt-20">
          <div className="relative z-10 overflow-hidden rounded-2xl ring-1 ring-gray-900/10 shadow-2xl bg-white h-[360px] sm:h-[420px] md:h-[520px] lg:h-[600px]">
            <Carousel items={items} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
