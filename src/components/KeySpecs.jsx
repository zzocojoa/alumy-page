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
              {content.specs.map(spec => {
                  const parts = String(spec.title || '').trim().split(/\s+/);
                  const line1 = parts[0] || '';
                  const line2 = parts.slice(1).join(' ');
                  return (
                    <div key={spec.title} className="text-left">
                      <div className="flex items-start gap-3">
                        <div className="text-[56px] leading-none shrink-0 self-center">{spec.icon}</div>
                        <div>
                          <h3
                            className="font-semibold leading-tight text-transparent bg-clip-text text-[25px]"
                            style={{ backgroundImage: 'linear-gradient(-74deg, var(--gradient-blue-start), var(--gradient-blue-end))' }}
                          >
                            <span className="block">{line1}</span>
                            {line2 ? <span className="block">{line2}</span> : null}
                          </h3>
                        </div>
                      </div>
                      <p
                        className="mt-3"
                        style={{ fontWeight: 600, letterSpacing: '.012em', fontSize: '16px', color: '#86868b' }}
                      >
                        {spec.desc}
                      </p>
                    </div>
                  )
              })}
          </div>
      </div>
    </section>
  );
};

export default KeySpecs;
