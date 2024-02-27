import React from "react";
import { navigation_pages } from "@/utils/navigation_pages";

const Footer = () => {
  return (
    <div className="w-full bg-dark_grey min-h-[5vh] flex items-center gap-10 py-10">
      {navigation_pages.map((page) => (
        <div>
          {page.children_pages && (
            <h1 className="font-bold text-xl cursor-pointer hover:text-white">
              {page.title}
            </h1>
          )}
          {page.children_pages?.map((item) => (
            <div className="cursor-pointer hover:text-white">{item.title}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;
