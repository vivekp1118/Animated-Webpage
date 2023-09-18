"use client";
import ImprovementCard from "@/Utils/ImprovementCard";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Scroller() {
  const headerRef = useRef(null);
  const titleHeaderRef = useRef(null);
  const catRef = useRef(null);

  useEffect(() => {
    const elements = [
      { ref: headerRef, start: { opacity: 0, x: -200, y: 0 } },
      { ref: titleHeaderRef, start: { opacity: 0, x: -300, y: 0 } },
      { ref: catRef, start: { opacity: 0, x: 300, y: -300, rotate: -90 } },
    ];
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        end: "bottom 50%",
        duration: 1,
        scrub: 1,
      },
    });

    elements.forEach(({ ref, start }) => {
      t1.fromTo(ref.current, start, {
        opacity: 1,
        duration: 2,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        ease: "none",
        scrub: 1,
      });
    });

    return () => {
      t1.kill();
    };
  }, []);

  return (
    <>
      <div className="relative h-[100vh] w-[100vw] overflow-hidden p-10 md:p-24">
        <p
          className="mb-5 text-lg font-medium text-gray-800 md:mb-0 md:mt-3 "
          ref={headerRef}
        >
          Wrong with self-improvement &amp; how we&apos;re fixing it.
        </p>
        <p
          className="mb-4 inline-block text-4xl font-bold md:text-5xl"
          ref={titleHeaderRef}
        >
          Self-improvement. Ugh.
        </p>
        <span
          className="ml-5 inline-block h-14 w-14 bg-[url('/CryingCat.png')] bg-cover bg-center"
          ref={catRef}
        />

        <div className="flex h-[90vh] w-[100%] justify-center overflow-y-auto px-5">
          <div className="mt-10 flex w-[550px] flex-col  flex-nowrap gap-14">
            <ImprovementCard
              header="It's not as easy as 1-2-3."
              desc="The journey of change may be long, but our sessions are quick. We get
to the point and tell you what you want to know (and nothing else).
Old habits are hard to break."
            />
            <ImprovementCard
              header="Old habits are hard to break."
              desc="And bad behaviors die hard. Fortunately, we give you great, science- backed techniques to use."
            />
            <ImprovementCard
              header="It's not as easy as 1-2-3."
              desc="The journey of change may be long, but our sessions are quick. We get
to the point and tell you what you want to know (and nothing else).
Old habits are hard to break."
            />
            <ImprovementCard
              header="You and your motivation don't have a
long-term relationship."
              desc="Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exerciseswill help you stick to your goals.
Books just don't offer practical solutions."
            />

            <ImprovementCard
              header="Books just don't offer practical solutions."
              desc="Remember when you learned to ride a bike just by reading? Yeah we don't either. We're not saying books are bad, but they're not the best way to learn new skills.
                         We're here to help you learn by doing."
            />

            <ImprovementCard
              header="It's not as easy as 1-2-3."
              desc="The journey of change may be long, but our sessions are quick. We get
to the point and tell you what you want to know (and nothing else).
Old habits are hard to break."
            />
            <ImprovementCard
              header="Old habits are hard to break."
              desc="And bad behaviors die hard. Fortunately, we give you great, science- backed techniques to use."
            />
            <ImprovementCard
              header="It's not as easy as 1-2-3."
              desc="The journey of change may be long, but our sessions are quick. We get
to the point and tell you what you want to know (and nothing else).
Old habits are hard to break."
            />
            <ImprovementCard
              header="You and your motivation don't have a
long-term relationship."
              desc="Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exerciseswill help you stick to your goals.
Books just don't offer practical solutions."
            />

            <ImprovementCard
              header="Books just don't offer practical solutions."
              desc="Remember when you learned to ride a bike just by reading? Yeah we don't either. We're not saying books are bad, but they're not the best way to learn new skills.
                         We're here to help you learn by doing."
            />
          </div>
        </div>
      </div>
      <>
        <div className="mx-10 my-10 flex flex-col items-center justify-evenly gap-10 pb-6 sm:flex-row sm:gap-0 md:py-16">
          <p className="h-fit w-fit text-2xl font-semibold sm:h-[200px] sm:w-[300px]">
            Be the best you with EQ
          </p>

          <p className="w-full text-base font-medium text-gray-600 sm:h-[200px] sm:w-[300px]">
            Not having your own emotions under control might be holding you
            back.
          </p>

          <p className="w-full text-base font-medium text-gray-600 sm:h-[200px] sm:w-[300px]">
            Additionally, not understanding those of others stops you from being
            parent, friend you can be.
          </p>
        </div>
      </>
    </>
  );
}

export default Scroller;
