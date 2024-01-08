const metadata = {
  brand: {
    name: process.env.PUBLIC_NEXT_APP,
    link: "/",
    description:
      "Machine learning program, to detect diabetes using classification algorithm, Neural Network",
  },
  navigations: [
    { name: "Home", link: "/" },
    { name: "Predict", link: "/predict" },
    { name: "News", link: "/news" },
  ],
  supports: {
    name: "support",
    items: [
      { name: "Contact Us", link: "/contact" },
      { name: "FAQ", link: "/faq" },
      { name: "Resources", link: "/resources" },
      { name: "App", link: "/app" },
      { name: "Term & Conditions", link: "/term-conditions" },
      { name: "Privacy Policy", link: "/privacy-policy" },
    ],
  },
  login: {
    name: "Login",
    link: "/login",
  },
  connect: {
    name: "Get in Touch",
    socials: [
      {
        name: "instagram",
        username: "@diadetectig",
        link: "https://www.instagtam.com/diadetect",
      },
      {
        name: "facebook",
        username: "@diadetectfb",
        link: "https://www.facebook.com/diadetect",
      },
      {
        name: "whatsapp",
        username: "@diadetectwa",
        link: "https://www.whatapp.com/diadetect",
      },
      {
        name: "twitter",
        username: "@diadetectx",
        link: "https://www.x.com/diadetect",
      },
      {
        name: "linkedin",
        username: "@diadetectld",
        link: "https://www.linkedin.com/diadetect",
      },
    ],
  },

  closing: {
    text: `@2024 ${process.env.PUBLIC_NEXT_APP}, All right reserved`,
  },
};

export default metadata;
