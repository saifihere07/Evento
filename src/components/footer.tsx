import Link from "next/link";

const routes = [
  {
    name: "Terms and Conditions",
    path: "/terms-conditions",
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-between px-3 sm:px-9 border-t border-white/10 h-16 text-xs text-white/25">
      <small className="text-xs">
        &copy; Saifi 2050 all rights are reserved
      </small>
      <ul className="flex gap-x-3 sm;gap-x-8">
        {routes.map((route) => {
          return (
            <li key={route.path}>
              <Link href={route.path}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
