import { navLinks } from "@/constans";
import Link from "next/link";
import React from "react";

const MainMenu = () => {
  return (
    <div className="flex lg:gap-8 xl:gap-12">
      {navLinks.map((link, index) => (
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
