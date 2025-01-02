"use client";
import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

export default function Header() {
  const activePathname = usePathname();

  return (
    <main className="flex items-center h-14 justify-between border-b border-white/10 px-3 sm:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6 text-sm h-full">
          {routes.map((route) => {
            return (
              <li
                key={route.path}
                className={clsx(
                  " hover:text-white flex items-center relative transition",
                  {
                    "text-white": activePathname === route.path,
                    "text-white/50": activePathname !== route.path,
                  }
                )}
              >
                <Link href={route.path}>{route.name}</Link>
                {activePathname === route.path && (
                  <motion.div
                    layoutId="header-active-link"
                    className="w-full h-1 bg-accent rounded-lg absolute bottom-0"
                  ></motion.div>
                )}
              </li>
            );
          })}
          <li></li>
        </ul>
      </nav>
    </main>
  );
}
