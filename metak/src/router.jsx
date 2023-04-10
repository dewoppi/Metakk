import Contact from "./components/Pages/Contact/Contact";

import Home from "./components/Pages/Home/Home";

const route = [
  {
    name: "az",
    path: "/Home",
    exact: true,
    component: <Home />,
    fallback: <Home />,
  },
  //   {
  //     path: "/Blog",
  //     exact: true,
  //     component: <Blog />,
  //   },
  {
    name: "ru",
    path: "/Contact",
    exact: true,
    component: <Contact />,
  },
  //   {
  //     path: "/Product",
  //     exact: true,
  //     component: <Product />,
  //   },
];

export default route;
