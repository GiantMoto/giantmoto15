import React from 'react';

export default function CookiesPage() {
  return (
    <div className="bg-[#0A0A0A] pt-16">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-glow">Polityka Cookies</h1>
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Czym są pliki cookies?</h2>
            <p className="text-gray-300">
              Pliki cookies (tzw. "ciasteczka") to niewielkie pliki tekstowe, które są zapisywane
              na urządzeniu użytkownika podczas przeglądania strony internetowej.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Jak wykorzystujemy pliki cookies?</h2>
            <p className="text-gray-300">
              Wykorzystujemy pliki cookies w celu zapewnienia prawidłowego działania strony,
              analizy ruchu oraz dostosowania treści do preferencji użytkowników.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Zarządzanie plikami cookies</h2>
            <p className="text-gray-300">
              Użytkownik może w każdej chwili zmienić ustawienia przeglądarki dotyczące
              plików cookies, w tym całkowicie wyłączyć ich obsługę.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}