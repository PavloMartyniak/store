"use client";

import React, { useState } from "react";
import { navigation_pages } from "@/utils/navigation_pages";
import { usePathname, useRouter } from "next/navigation";
import HeaderNavigationModal from "@/components/HeaderNavigationModal";

const Header = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const navigateTo = (link) => {
    router.push(link);
  };

  const [isModalShown, setIsModalShown] = useState(false);

  console.log("isModalShown", isModalShown);

  return (
    <div className="w-full bg-dark_grey min-h-[5vh] px-10 py-5">
      <div className="flex items-center justify-end">
        {navigation_pages.map((page, idx) => (
          <div
            key={idx}
            onMouseEnter={() =>
              page.children_pages && setIsModalShown(page.title)
            }
            onMouseLeave={() => setIsModalShown(false)}
            onClick={() => navigateTo(page.route)}
            className={`text-white px-4 py-2 cursor-pointer relative flex flex-col items-center ${
              currentPath === page.route
                ? "bg-lime text-black"
                : "hover:text-lime transition-colors duration-200"
            }`}
          >
            {page.title}

            {page.title === isModalShown && (
              <HeaderNavigationModal
                isModalShown={isModalShown}
                pages={navigation_pages.find(
                  (page) => page.title === isModalShown
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
