import useScrollFadeIn from '../hooks/useScrollFadeIn'

const gradientTextClass = "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text"

const Size = ({ content }) => {
  const animatedSize = useScrollFadeIn('up', 1, 0)

  const legacySpecs = Array.isArray(content?.specs) ? content.specs : []
  const details = [
    { label: '상품명', value: content?.productName },
    { label: '소재', value: content?.material || legacySpecs[1]?.value },
    { label: '사이즈', value: content?.dimensions || legacySpecs[0]?.value },
    { label: '제조국', value: content?.origin },
  ]

  return (
    <section id="size" className="bg-gray-50 py-24 md:py-32" {...animatedSize}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ${gradientTextClass}`}>{content.title}</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
          <div>
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-gray-900">INFO</h3>
            </div>
            <dl className="mt-6 border-t border-gray-200 divide-y divide-gray-200">
              {details.map((item) => (
                <div key={item.label} className="grid grid-cols-2 gap-x-6 py-6">
                  <dt className="text-2xl text-gray-500 text-left">{item.label}</dt>
                  <dd className="text-2xl text-gray-500 text-left">{item.value || '-'}</dd>
                </div>
              ))}
            </dl>
            {content?.note ? (
              <p className="mt-6 text-sm text-gray-500">{content.note}</p>
            ) : null}
          </div>
          <div>
            <div className="aspect-[5/4] lg:aspect-[3/3] overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
              <img src={content.image} alt={content.alt} className="h-full w-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Size
