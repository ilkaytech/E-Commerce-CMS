import React from "react";
import { footerSections } from "@/constans";

const Footer = () => {
  return (
    <div className="bg-indigo-800 px-8 py-12 text-white lg:px-64">
      <div className="flex flex-col md:flex-row justify-between gap-8 py-12">
        <div className="w-full md:w-1/4">
          Logo
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
            maiores.
          </p>
        </div>
        {footerSections.map((section, index) => (
          <div key={index} className="w-full md:w-1/6">
            <h3 className="font-semibold text-lg">{section.title} </h3>
            <ul className="mt-2 space-y-1 text-sm">
              {section.links.map((link, idx) => (
                <li key={idx} className="hover:underline cursor-pointer ">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-indigo-500 my-5">
        <div className="flex flex-col md:flex-row justify-between items-center py-5 text-sm">
          <div> © 2025 ilkaytech All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
