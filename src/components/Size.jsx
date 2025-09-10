import useScrollFadeIn from '../hooks/useScrollFadeIn';

const gradientTextClass = "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text";

const Size = ({ content }) => {
  const animatedSize = useScrollFadeIn('up', 1, 0);

  return (
    <section id="size" className="bg-gray-50 py-24 md:py-32" {...animatedSize}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
              <h2 className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ${gradientTextClass}`}>{content.title}</h2>
          </div>
          <div className="mt-16 grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
              <div>
                  <div className="border-b border-gray-200 pb-10">
                  {content.specs.map(spec => (
                      <div key={spec.label} className="pt-10">
                          <dt className="font-medium text-gray-900">{spec.label}</dt>
                          <dd className="mt-2 text-2xl text-gray-500">{spec.value}</dd>
                      </div>
                  ))}
                  </div>
                  <p className="mt-6 text-sm text-gray-500">{content.note}</p>
              </div>
              <div>
                  <div className="aspect-[5/4] lg:aspect-[3/3] overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
                      <img src={content.image} alt={content.alt} className="h-full w-full object-cover"/>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Size;