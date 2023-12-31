const metadata = {
  navbrand: {
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
};

export default metadata;
