import FormComponent from "@/components/form-component";
import H1 from "@/components/h1";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <H1>Find Events around you</H1>
      <p className="text-2xl lg:text-3xl opacity-75 mt-7 mb-12">
        Browse more than{" "}
        <span className="text-accent font-bold underline italic">
          10,000 events
        </span>{" "}
        worldwide
      </p>
      <FormComponent />

      <section className="flex text-sm text-white/50 gap-x-4 mt-4">
        <p> Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
