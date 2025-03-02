import React from "react";
import { APIURL, Category, navLinks } from "@/constans";
import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/lib/utils";

interface MainMenuProps {
  categories: Category[];
}

const MainMenu = ({ categories }: MainMenuProps) => {
  return (
    <div className="flex lg:gap-8 xl:gap-12">
      {navLinks.slice(0, 2).map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className="hover:bg-indigo-100 rounded-xl p-2 transition duration-500"
        >
          {link.label}
        </Link>
      ))}
      {categories.slice(0, 2).map((category) => (
        <Link
          href={`/categories/${slugify(category.name)}`}
          key={category.id}
          className="hover:bg-blue-100 rounded-xl p-2 transition duration-500 flex items-center justify-center gap-2"
        >
          {category.icon && (
            <Image
              src={`${APIURL}/assets/${category.icon}`}
              alt=""
              width={50}
              height={50}
              className="w-6 h-6"
            />
          )}
          {category.name}
        </Link>
      ))}
      {navLinks.slice(4, 6).map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className="hover:bg-indigo-100 rounded-xl p-2 transition duration-500"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default MainMenu;
