"use client";
import React from "react";
import { navigation_pages } from "@/utils/navigation_pages";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const navigateTo = (link) => {
    router.push(link);
  };
  return (
    <div className="w-full bg-dark_grey min-h-[5vh] px-10 py-5">
      <div className="flex items-center justify-end">
        {navigation_pages.map((page, idx) => (
          <div
            key={idx}
            onClick={() => navigateTo(page.route)}
            className={`text-white px-4 py-2 cursor-pointer ${
              currentPath === page.route
                ? "bg-lime text-black"
                : "hover:text-lime transition-colors duration-200"
            }`}
          >
            {page.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
