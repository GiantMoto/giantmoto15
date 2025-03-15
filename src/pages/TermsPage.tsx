import React from 'react';

export default function TermsPage() {
  return (
    <div className="bg-[#0A0A0A] pt-16">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-glow">Regulamin</h1>
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">§1. Postanowienia ogólne</h2>
            <p className="text-gray-300">
              1. Niniejszy regulamin określa zasady korzystania z usług świadczonych przez Giant Motorsport.
            </p>
            <p className="text-gray-300">
              2. Korzystanie z usług oznacza akceptację niniejszego regulaminu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">§2. Zakres usług</h2>
            <p className="text-gray-300">
              1. Giant Motorsport świadczy usługi w zakresie modyfikacji oprogramowania pojazdów.
            </p>
            <p className="text-gray-300">
              2. Szczegółowy zakres usług jest ustalany indywidualnie z klientem.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">§3. Odpowiedzialność</h2>
            <p className="text-gray-300">
              1. Giant Motorsport nie ponosi odpowiedzialności za szkody wynikłe z niewłaściwego użytkowania pojazdu.
            </p>
            <p className="text-gray-300">
              2. Klient jest zobowiązany do przestrzegania zaleceń dotyczących eksploatacji pojazdu.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}