import CONTENT from './content.jsx';
import Header from './components/Header';
import ScrollProgressBar from './components/ScrollProgressBar';
import Hero from './components/Hero';
import KeySpecs from './components/KeySpecs';
import FeatureSection from './components/FeatureSection';
import VideoScrubSection from './components/VideoScrubSection';
import Colors from './components/Colors';
import Size from './components/Size';
import Price from './components/Price';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App(){
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans tracking-tight overflow-x-hidden">
      <ScrollProgressBar />
      <Header content={CONTENT.header} />
      <Hero content={CONTENT.hero} />
      <KeySpecs content={CONTENT.keySpecs} />
      {CONTENT.features.flatMap((feature, index) => ([
        <FeatureSection key={`feature-${index}`} feature={feature} />,
        index === 0 && (
          <VideoScrubSection
            key="video-scrub"
            // Provide both formats; component auto-detects types
            srcs={["Hold_it_up.webm", "Hold_it_up.mp4"]}
            poster="Alumy.jpg"
            sectionHeightVh={70}
            stickyTop={0}
            videoHeight={677}
          />
        )
      ]))}
      <Colors content={CONTENT.colors} />
      <Size content={{
        ...CONTENT.size,
        productName: '알루미 메모 홀더',
        origin: '한국',
      }} />
      <Price content={CONTENT.price} />
      <Contact content={CONTENT.contact} />
      <Footer />
    </main>
  );
}
