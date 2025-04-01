import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, MessageCircle, Check } from 'lucide-react';
import GoogleMap from '../components/GoogleMap';

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

interface FormData {
  name: string;
  email: string;
  phone: string;
  carBrand: string;
  carYear: number;
  carModel: string;
  title: string;
  message: string;
  gdprAccepted: boolean;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    carBrand: '',
    carYear: currentYear,
    carModel: '',
    title: '',
    message: '',
    gdprAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Wystąpił błąd podczas wysyłania wiadomości');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Wiadomość została wysłana pomyślnie! Skontaktujemy się z Tobą wkrótce.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        carBrand: '',
        carYear: currentYear,
        carModel: '',
        title: '',
        message: '',
        gdprAccepted: false,
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0A0A0A] pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-6 text-glow uppercase tracking-wide">Kontakt</h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Napisz do nas, i dowiedz się co możemy ulepszyć w Twoim samochodzie
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Contact Form */}
          <div className="bg-[#111111] p-8 rounded-lg border border-red-600/20">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide">Formularz kontaktowy</h2>
            
            {submitStatus.type && (
              <div 
                className={`mb-6 p-4 rounded ${
                  submitStatus.type === 'success' ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Imię</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-red-600/20 rounded p-2 text-white focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-red-600/20 rounded p-2 text-white focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-400 mb-2">Numer telefonu (opcjonalnie)</label>
                <div className="flex">
                  <select
                    className="bg-[#0A0A0A] border border-red-600/20 rounded-l p-2 text-white focus:outline-none focus:border-red-600"
                  >
                    <option value="+48">🇵🇱 +48</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 bg-[#0A0A0A] border border-red-600/20 border-l-0 rounded-r p-2 text-white focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="carBrand" className="block text-gray-400 mb-2">Marka Samochodu</label>
                  <input
                    type="text"
                    id="carBrand"
                    required
                    value={formData.carBrand}
                    onChange={(e) => setFormData({ ...formData, carBrand: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-red-600/20 rounded p-2 text-white focus:outline-none focus:border-red-600"
                  />
                </div>

                <div>
                  <label htmlFor="carYear" className="block text-gray-400 mb-2">Rocznik</label>
                  <select
                    id="carYear"
                    required
                    value={formData.carYear}
                    onChange={(e) => setFormData({ ...formData, carYear: parseInt(e.target.value) })}
                    className="w-full bg-[#0A0A0A] border border-red-600/20 rounded p-2 text-white focus:outline-none focus:border-red-600"
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="carModel" className="block text-gray-400 mb-2">Model Samochodu</label>
                  <input
                    type="text"
                    id="carModel"
                    required
                    value={formData.carModel}
                    onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-red-600/20 rounded p-2 text-white focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-gray-400 mb-2">Tytuł</label>
                <input
                  type="text"
                  id="title"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-red-600/20 rounded p-2 text-white focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Wiadomość</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-red-600/20 rounded p-2 text-white focus:outline-none focus:border-red-600"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="gdpr"
                  required
                  checked={formData.gdprAccepted}
                  onChange={(e) => setFormData({ ...formData, gdprAccepted: e.target.checked })}
                  className="hidden"
                />
                <label 
                  htmlFor="gdpr"
                  className="flex items-center cursor-pointer text-gray-400 hover:text-gray-300"
                >
                  <div className={`w-5 h-5 border ${formData.gdprAccepted ? 'bg-red-600 border-red-600' : 'border-red-600/20'} rounded flex items-center justify-center mr-2 transition-colors`}>
                    {formData.gdprAccepted && <Check className="w-4 h-4 text-white" />}
                  </div>
                  Akceptuję warunki przetwarzania danych przez Giant Motorsport
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white px-8 py-3 rounded-sm hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
              >
                {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info and Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-[#111111] p-8 rounded-lg border border-red-600/20">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide">Dane kontaktowe</h2>
              <ul className="space-y-6">
                <li className="flex items-center space-x-4">
                  <Mail className="text-red-600 w-6 h-6" />
                  <a href="mailto:kontakt@giantmoto.pl" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-wide">
                    kontakt@giantmoto.pl
                  </a>
                </li>
                <li className="flex items-center space-x-4">
                  <Phone className="text-red-600 w-6 h-6" />
                  <a href="tel:510176564" className="text-gray-400 hover:text-red-500 transition-colors uppercase tracking-wide">
                    510 176 564
                  </a>
                </li>
                <li className="flex items-center space-x-4">
                  <MapPin className="text-red-600 w-6 h-6" />
                  <span className="text-gray-400 uppercase tracking-wide">
                    Parkowa 10b 98-161 Zapolice
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100076437766391"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-400 transition-colors inline-flex items-center space-x-4"
                  >
                    <Facebook className="w-6 h-6" />
                    <span className="uppercase tracking-wide">Znajdź nas na Facebooku</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=%2B48510176564&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR0rq72jW0kVafe8SVp3vOhmyWE1_DCeJ0M7tCo9anCEJV4MqVgNk5CjBpY_aem_fw6IJsQ9y_in8DPcTtlD_g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-400 transition-colors inline-flex items-center space-x-4"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span className="uppercase tracking-wide">Napisz na WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="bg-[#111111] p-8 rounded-lg border border-red-600/20">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide">Godziny otwarcia</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between">
                  <span className="text-gray-400 uppercase tracking-wide">Poniedziałek - Piątek</span>
                  <span className="text-white uppercase tracking-wide">10:00 - 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400 uppercase tracking-wide">Sobota</span>
                  <span className="text-red-500 uppercase tracking-wide">Zamknięte</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400 uppercase tracking-wide">Niedziela</span>
                  <span className="text-red-500 uppercase tracking-wide">Zamknięte</span>
                </li>
              </ul>

              {/* Google Maps */}
              <div className="w-full h-[300px] rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.903783927632!2d19.198655776785746!3d51.59931297181461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471d55a13c515555%3A0x83b67b9bcdb5da62!2sGiant%20Motorsport%20Chiptuning!5e0!3m2!1spl!2spl!4v1711920661961!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}