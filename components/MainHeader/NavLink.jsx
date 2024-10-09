"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <>
      <div
        className={
          path === href
            ? "w-20 rounded-3xl border-[3px] border-customCashGreen py-1 text-center"
            : "w-20 rounded-3xl py-1 text-center"
        }
      >
        <Link
          href={href}
          className={`${
            path === href
              ? "font-bold text-customCashGreen"
              : "hover:font-bold hover:text-customGreen02"
          } transition-all duration-150`}
        >
          {children}
        </Link>
      </div>
    </>
  );
}
