import useScrollFadeIn from '../hooks/useScrollFadeIn';

const gradientTextClass = "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text";

const Contact = ({ content }) => {
  const animatedContact = useScrollFadeIn('up', 1, 0);

  return (
    <section id="contact" className="bg-gray-50" {...animatedContact}>
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:py-32">
          <h2 className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ${gradientTextClass}`}>{content.title}</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">{content.desc}</p>
          <div className="mt-10">
              <a href="#" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">{content.cta}</a>
          </div>
      </div>
    </section>
  );
};

export default Contact;
