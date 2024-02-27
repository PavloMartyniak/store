import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const HeaderNavigationModal = ({ isModalShown, pages }) => {
  const route = useRouter();
  const params = useParams();

  console.log("params", params);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute shadow-2xl bg-white z-10 min-w-48 top-10 p-4 gap-2 flex flex-col items-start text-lime"
    >
      {pages?.children_pages.map((page) => (
        <Link className="hover:underline" href={page.route}>
          {page.title}
        </Link>
      ))}
    </div>
  );
};

export default HeaderNavigationModal;
