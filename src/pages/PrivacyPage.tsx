import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="bg-[#0A0A0A] pt-16">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-glow">Polityka Prywatności</h1>
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Informacje ogólne</h2>
            <p className="text-gray-300">
              Giant Motorsport przywiązuje szczególną wagę do ochrony prywatności swoich klientów.
              Wszystkie dane osobowe są przetwarzane zgodnie z obowiązującymi przepisami prawa.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Dane osobowe</h2>
            <p className="text-gray-300">
              Administratorem danych osobowych jest Giant Motorsport. Dane są przetwarzane wyłącznie
              w celu realizacji usług oraz w celach marketingowych, po uzyskaniu odpowiedniej zgody.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Prawa użytkowników</h2>
            <p className="text-gray-300">
              Każdy użytkownik ma prawo do dostępu do swoich danych, ich sprostowania,
              usunięcia lub ograniczenia przetwarzania.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}