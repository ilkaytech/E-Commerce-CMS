export type FooterSection = {
  title: string;
  links: string[];
};

export const footerSections: FooterSection[] = [
  {
    title: "About Us",
    links: ["Who We Are", "Our Values", "Careers", "Press"],
  },
  {
    title: "Costomer Service",
    links: ["Help Center", "FAQs", "Returns", "Shipping Info"],
  },
  {
    title: "Products",
    links: ["New Arrivals", "Best Sellers", "Gift Cards", "Special Offers"],
  },
  {
    title: "Policies",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Accessibility",
    ],
  },
];
