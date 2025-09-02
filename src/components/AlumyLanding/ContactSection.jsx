import React from 'react';

const ContactSection = () => (
    <section id="contact" className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 md:flex-row">
          <p className="text-center text-lg font-semibold md:text-left">시제품/대량 견적이 필요하신가요? 지금 상담해 보세요.</p>
          <div className="flex gap-3">
            <a href="#" className="rounded-xl border border-stone-300 px-5 py-3 text-sm font-semibold">도면 다운로드</a>
            <a href="tel:12345678" className="rounded-xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white">전화 문의</a>
          </div>
        </div>
      </section>
);

export default ContactSection;
