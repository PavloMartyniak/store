export const navigation_pages = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About Us",
    route: "/about-us",
    children_pages: [
      { title: "Company Profile", route: "/about-us/company-profile" },
      { title: "History", route: "/about-us/history" },
      { title: "Awards", route: "/about-us/awards" },
    ],
  },
  {
    title: "Products",
    route: "/products",
    children_pages: [
      { title: "Accessories", route: "/products/accessories" },
      { title: "Tires & Rims", route: "/products/tires-and-rims" },
      { title: "Car Batteries", route: "/products/car-batteries" },
    ],
  },
  {
    title: "Contact",
    route: "/contact-us",
  },
];
