import useScrollFadeIn from '../hooks/useScrollFadeIn';

const KeySpecs = ({ content }) => {
  const animatedSpecs = useScrollFadeIn('up', 1, 0.2);

  return (
    <section className="py-24 md:py-32" {...animatedSpecs}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{content.title}</h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 text-center sm:grid-cols-2 lg:grid-cols-4">
              {content.specs.map(spec => (
                  <div key={spec.title}>
                      <div className="text-4xl">{spec.icon}</div>
                      <h3 className="mt-4 font-semibold text-gray-900">{spec.title}</h3>
                      <p className="mt-1 text-gray-600">{spec.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default KeySpecs;
