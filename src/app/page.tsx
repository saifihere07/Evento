import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <h1 className="text-3xl lg:text-6xl tracking-tight font-bold">
        Find Events around you
      </h1>
      <p className="text-2xl lg:text-3xl opacity-75 mt-7 mb-12">
        Browse more than{" "}
        <span className="text-accent font-bold underline italic">
          10,000 events
        </span>{" "}
        worldwide
      </p>
      <form className="w-full sm:w-[580px]">
        <input
          className="w-full sm:w-[580px] bg-white/[7%] outline-none px-6 h-14 rounded-lg ring-accent/50 focus:ring-2 focus:bg-white/10  "
          placeholder="Search events in  any City..."
          spellCheck={false}
        ></input>
      </form>
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
