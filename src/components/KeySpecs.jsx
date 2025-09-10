import useScrollFadeIn from '../hooks/useScrollFadeIn';

const KeySpecs = ({ content }) => {
  const animatedSpecs = useScrollFadeIn('up', 1, 0.2);

  return (
    <section className="py-24 md:py-32" {...animatedSpecs}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{content.title}</h2>
        </div>
        {/*
          Layout: two columns on mobile to mirror the provided design,
          expanding to four columns on large screens. Using CSS grid keeps
          columns aligned even when each card has different height.
        */}
        <div className="mt-8 md:mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-10">
          {content.specs.map(spec => {
            const parts = String(spec.title || '').trim().split(/\s+/);
            const line1 = parts[0] || '';
            const line2 = parts.slice(1).join(' ');
            return (
              <div key={spec.title} className="text-left px-1 sm:px-2">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-[42px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-none shrink-0 self-center">
                    {spec.icon}
                  </div>
                  <div>
                    <h3
                      className="font-semibold leading-tight text-transparent bg-clip-text text-[26px] sm:text-[30px] md:text-[32px] lg:text-[36px]"
                      style={{ backgroundImage: 'linear-gradient(-74deg, var(--gradient-blue-start), var(--gradient-blue-end))' }}
                    >
                      <span className="block">{line1}</span>
                      {line2 ? <span className="block">{line2}</span> : null}
                    </h3>
                  </div>
                </div>
                <p
                  className="mt-3 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-gray-500"
                  style={{ fontWeight: 600, letterSpacing: '.012em' }}
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
