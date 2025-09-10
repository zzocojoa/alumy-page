const Header = ({ content }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">{content.productName}</span>
              </div>
              <a href={content.href} className="rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">
                  {content.cta}
              </a>
          </div>
      </div>
    </header>
  );
};

export default Header;