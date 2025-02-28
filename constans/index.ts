export const APIURL = process.env.NEXT_PUBLIC_DIRECTUS_URL;

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
    title: "Customer Service",
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

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/", label: "Shop" },
  { href: "/", label: "Cat1" },
  { href: "/", label: "Cat2" },
  { href: "/", label: "Blog" },
  { href: "/", label: "Contact" },
];

export type SliderItem = {
  id: string;
  title: string;
  image: string;
};

export type Subcategory = {
  id: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
  icon?: string;
  subcategories?: Subcategory[];
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  oldPrice: string | null;
  isHome: boolean;
  images?: string[];
  category: Category | null;
  subcategory: Subcategory | null;
};
