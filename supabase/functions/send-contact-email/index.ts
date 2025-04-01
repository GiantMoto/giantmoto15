import fetch from 'node-fetch';

const RESEND_API_KEY = "re_b7Nh7978_Jv1gMbicNTBGr1HM25gibuPT"; // Your API Key
const RECIPIENT_EMAIL = "kontakt@giantmoto.pl"; // Where to send emails

async function sendEmail(name, email, phone, carBrand, carYear, carModel, title, message) {
  const emailContent = `
    Nowa wiadomość od: ${name}

    📧 Email: ${email}
    📞 Telefon: ${phone || 'Nie podano'}

    🚗 Samochód:
    - Marka: ${carBrand}
    - Model: ${carModel}
    - Rocznik: ${carYear}

    📝 Tytuł: ${title}

    💬 Wiadomość:
    ${message}
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "formularz@giantmoto.pl",
      to: [RECIPIENT_EMAIL],
      subject: `Nowa wiadomość: ${title}`,
      text: emailContent,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    console.log("✅ Email sent successfully:", data);
  } else {
    console.error("❌ Failed to send email:", data);
  }
}