import H1 from "@/components/h1";
import { getEvent } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const event = await getEvent(slug);
  return {
    title: event.name,
  };
}

export default async function EventPage({ params }: Props) {
  const slug = params.slug;
  const event = await getEvent(slug);
  return (
    <main>
      <section className="relative  z-0 overflow-hidden flex items-center justify-center py-14 md:py-20">
        <Image
          src={event.imageUrl}
          alt="Background Image"
          fill
          className="object-cover blur-3xl"
          sizes="(max-width:1280px) 100vh,1280px"
          priority
          quality={50}
        />
        <div className="z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-16">
          <Image
            className="rounded-xl border-2 border-white/50 object-cover"
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
          />
          <div className="flex flex-col relative">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-Us", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mt-1 mb-2 lg:text-5xl whitespace-nowrap ">
              {event.name}
            </H1>
            <p className="text-white/75 whitespace-nowrap">
              Organized by:{" "}
              <span className="itallic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 bg-blur capitalize  mt-5 lg:mt-auto w-[95vw] sm:w-full py-2 rounded-md border-white/10 border-2  state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[75vh] text-center px-5 py-14">
        <Section>
          <SectionHeading>About this Event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>

        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}
function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}
function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl mx-auto leading-8 text-lg text-white/75">
      {children}
    </p>
  );
}
