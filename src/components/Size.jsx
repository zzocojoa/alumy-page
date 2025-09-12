import useScrollFadeIn from '../hooks/useScrollFadeIn'

const gradientTextClass = "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text"

const Size = ({ content }) => {
  const animatedSize = useScrollFadeIn('up', 1, 0)

  const specs = Array.isArray(content?.specs) ? content.specs : []

  const normalize = (s) => (typeof s === 'string' ? s.replace(/\s+/g, '').toLowerCase() : '')

  const findSpec = (labels = []) => {
    const set = new Set(labels.map(normalize))
    const match = specs.find(s => set.has(normalize(s?.label)))
    return match?.value
  }

  const resolvedProductName = content?.productName
    || content?.name
    || findSpec(['제품명', '모델명', 'Product Name', 'Name'])

  const resolvedMaterial = content?.material
    || findSpec(['재질', '소재', 'Material'])

  const resolvedDimensions = content?.dimensions
    || content?.size
    || findSpec(['치수', '크기', '규격', '사이즈', '규격(mm)', '치수(mm)', '사이즈(mm)', 'size', 'dimension', 'dimensions'])
    || (() => {
      const m = specs.find(s => typeof s?.value === 'string' && /\d\s*[x×]\s*\d/.test(s.value))
      return m?.value
    })()

  const resolvedOrigin = content?.origin
    || content?.country
    || findSpec(['제조국', '원산지', 'Country of Origin', 'Origin'])

  const resolvedAlt = content?.alt || content?.title || '제품 이미지'
  const displayTitle = '가볍고 정확하게.'

  const labels = ['제품명', '재질', '치수', '제조국']
  const values = [resolvedProductName, resolvedMaterial, resolvedDimensions, resolvedOrigin]

  return (
    <section id="size" className="bg-gray-50 py-24 md:py-32" {...animatedSize}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ${gradientTextClass}`}>{displayTitle}</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
          <div>
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-gray-900">INFO</h3>
            </div>
            <dl className="mt-6 border-t border-gray-200 divide-y divide-gray-200">
              {labels.map((label, idx) => (
                <div key={label} className="grid grid-cols-2 gap-x-6 py-6">
                  <dt className="text-2xl text-gray-500 text-left">{label}</dt>
                  <dd className="text-2xl text-gray-500 text-left">{values[idx] || '-'}</dd>
                </div>
              ))}
            </dl>
            {content?.note ? (
              <p className="mt-6 text-sm text-gray-500">{content.note}</p>
            ) : null}
          </div>
          <div>
            <div className="aspect-[5/4] lg:aspect-[3/3] overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
              <img src={content.image} alt={resolvedAlt} className="h-full w-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Size
