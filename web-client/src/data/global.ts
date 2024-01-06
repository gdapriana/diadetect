const metadata = {
  brand: {
    name: process.env.PUBLIC_NEXT_APP,
    link: "/",
  },
  navigations: [
    { name: "Home", link: "/" },
    { name: "Predict", link: "/predict" },
    { name: "News", link: "/news" },
  ],
  login: {
    name: "Login",
    link: "/login",
  },
  social: [
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
};

export default metadata;
