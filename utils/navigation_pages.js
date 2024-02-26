export const navigation_pages = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About Us",
    route: "/about-us",
    children_pages: [
      { title: "Company Profile", route: "/company-profile" },
      { title: "History", route: "/history" },
      { title: "Awards", route: "/awards" },
    ],
  },
  {
    title: "Products",
    route: "/products",
    children_pages: [
      { title: "Accessories", route: "/accessories" },
      { title: "Tires & Rims", route: "tires-and-rims" },
      { title: "Car Batteries", route: "car-batteries" },
    ],
  },
  {
    title: "Contact",
    route: "/contact-us",
  },
];
