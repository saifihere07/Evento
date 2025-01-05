import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
const btnStyles =
  "px-5 flex items-center gap-x-2 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm";
type PaginationControlsprops = {
  previousPage: string;
  nextPage: string;
};
export default function PaginationControls({
  previousPage,
  nextPage,
}: PaginationControlsprops) {
  return (
    <section className="flex justify-between w-full">
      {previousPage ? (
        <Link href={previousPage} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPage && (
        <Link className={btnStyles} href={nextPage}>
          Next <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
