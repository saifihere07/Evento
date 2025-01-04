"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormComponent() {
  const [searchText, setSearchText] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;

    router.push(`/events/${searchText.toLowerCase()}`);
  };
  const router = useRouter();

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px] ">
      <input
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        className="w-full sm:w-[580px] bg-white/[7%] outline-none px-6 h-14 rounded-lg ring-accent/50 focus:ring-2 focus:bg-white/10  "
        placeholder="Search events in  any City..."
        spellCheck={false}
      ></input>
    </form>
  );
}
