import useScrollFadeIn from '../hooks/useScrollFadeIn';

const gradientTextClass = "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text";

const Colors = ({ content }) => {
  const animatedColors = useScrollFadeIn('up', 1, 0);

  return (
    <section id="colors" className="py-24 md:py-32" {...animatedColors}>
      <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ${gradientTextClass}`}>{content.title}</h2>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              {content.data.map(c => (
                  <div key={c.name} className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full shadow-lg" style={{ backgroundColor: c.hex }}></div>
                      <p className="mt-4 font-semibold">{c.name}</p>
                  </div>
              ))}
          </div>
          <p className="mt-12 text-sm text-gray-500">{content.note}</p>
      </div>
    </section>
  );
};

export default Colors;