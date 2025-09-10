import useScrollFadeIn from '../hooks/useScrollFadeIn';

const gradientTextClass = "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text";

const Price = ({ content }) => {
  const animatedPrice = useScrollFadeIn('up', 1, 0);

  return (
    <section id="price" className="py-24 md:py-32" {...animatedPrice}>
      <div className="mx-auto max-w-7xl px-4">
          <h2 className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center mb-16 ${gradientTextClass}`}>{content.title}</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg">
              <table className="min-w-full text-center text-sm">
              <thead className="bg-gray-100 font-medium">
                  <tr>{content.headers.map(h => <th key={h} scope="col" className="px-6 py-4">{h}</th>)}</tr>
              </thead>
              <tbody>
                  {content.rows.map(r => (
                  <tr key={r.size} className="border-t border-gray-200">
                      <td className="whitespace-nowrap px-6 py-4 font-semibold text-gray-900">{r.size}</td>
                      {r.prices.map((p, i) => <td key={i} className="whitespace-nowrap px-6 py-4 text-gray-600">{p}</td>)}
                      <td className="whitespace-nowrap px-6 py-4 text-gray-600">{r.bundle}</td>
                  </tr>
                  ))}
              </tbody>
              </table>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">{content.note}</p>
      </div>
    </section>
  );
};

export default Price;
