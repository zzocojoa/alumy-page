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
            srcMp4="Hold_it_up.webm"
            poster="Alumy.jpg"
            sectionHeightVh={100}
            stickyTop={0}
          />
        )
      ]))}
      <Colors content={CONTENT.colors} />
      <Size content={CONTENT.size} />
      <Price content={CONTENT.price} />
      <Contact content={CONTENT.contact} />
      <Footer />
    </main>
  );
}
