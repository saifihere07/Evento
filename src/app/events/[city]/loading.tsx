import SkeletonCard from "@/components/skeleton-card";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-wrap max-w-[1100px] mx-auto py-24 px-[20px] gap-20 justify-center">
      {Array.from({ length: 6 }).map((item, i) => {
        return <SkeletonCard key={i} />;
      })}
    </div>
  );
}
