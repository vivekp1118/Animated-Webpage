"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
function Info() {
  const headerRef = useRef(null);
  const catRef = useRef(null);
  const paraRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const elements = [
      { ref: headerRef, start: { opacity: 0, x: -200, y: 0, scale: 1 } },
      { ref: catRef, start: { opacity: 0, x: -100, y: 100, scale: 0 } },
      { ref: paraRef, start: { opacity: 0, x: 300 } },
    ];

    const t1 = gsap.timeline({
      scrollTrigger: {
        duration: 2,
        trigger: headerRef.current,
        start: "top 90%",
        end: "bottom 60%",
        scrub: 1,
      },
    });

    elements.forEach(({ ref, start }) => {
      t1.fromTo(ref.current, start, {
        opacity: 1,
        duration: 1,
        x: 0,
        y: 0,
        scale: 1,
        ease: "none",
      });
    });

    return () => {
      t1.kill();
    };
  }, []);

  return (
    <div className="relative h-full w-[100vw] px-6 py-12 sm:h-[100vh] sm:p-12">
      <div className="flex h-[100%] w-[100%] flex-col justify-center rounded-2xl bg-[#FEF6F1] p-6 sm:p-10 ">
        <div>
          <p className="my-4 text-lg font-semibold text-gray-700 ">
            Built out of frustration
          </p>
          <p className="my-4 text-4xl font-bold md:text-5xl" ref={headerRef}>
            Meet the ahead app
          </p>
        </div>
        <div className="my-6 flex h-[100%] w-[100%] flex-col md:flex-row">
          <div className="w-full md:w-[50%]">
            <div
              className="rounded-tl-10 rounded-tr-1 info-cat mx-auto h-[150px] w-[150px] bg-[url('/JoyFulCat.png')] bg-cover md:h-[200px] md:w-[200px]"
              ref={catRef}
            ></div>
          </div>
          <div
            className="w-full text-xl font-semibold leading-relaxed text-gray-700 md:w-[40%]"
            ref={paraRef}
          >
            <p className="md:my-5">
              A personalized pocket coach that provides bite- sized,
              science-driven tools to boost emotional intelligence.
            </p>
            <p>
              Think of it as a pocket cheerleader towards a better, more
              fulfilling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
