"use client";
import { EventoEvent } from "@/lib/types";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type EventCardProps = {
  event: EventoEvent;
};

const MotionLink = motion(Link);

export default function EventCard({ event }: EventCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={ref}
      style={{
        //@ts-ignore
        scale: scrollProgress,
        //@ts-ignore
        opacity: opacityProgress,
      }}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      className="flex flex-col h-[380px]  flex-1 basis-80 max-w-[500px]"
      href={`/event/${event.slug}`}
    >
      <section className=" relative  h-full w-full bg-white/[3%] rounded-xl overflow-hidden state-effects">
        <Image
          src={event.imageUrl}
          alt={event.name}
          height={280}
          width={500}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-col flex-1 items-center justify-center">
          <h2 className="font-bold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="mt-4 text-white/50 text-sm">{event.location}</p>
        </div>
        <section className=" absolute flex flex-col justify-center items-center h-[45px] w-[45px] left-[12px] top-[12px] bg-black/30 rounded-md ">
          <p className="font-bold text-xl -mb-[5px]">
            {new Date(event.date).toLocaleDateString("en-Us", {
              day: "2-digit",
            })}
          </p>
          <p className="uppercase text-accent text-sm">
            {new Date(event.date).toLocaleDateString("en-Us", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </MotionLink>
  );
}
