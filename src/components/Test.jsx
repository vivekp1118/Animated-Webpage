"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function Test() {
  const buttonRef = useRef(null);
  const testInfoRef = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 90%",
        end: "bottom 90%",
        scrub: 2,
      },
    });

    t1.fromTo(buttonRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });
    t1.fromTo(testInfoRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });
    return () => {
      t1.kill();
    };
  }, [])
  return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center">
      <div className="flex flex-col gap-6 w-[700px] text-center">
        <div className="text-lg font-medium text-gray-900">
          We take privacy seriously
        </div>
        <div className="text-4xl  font-semibold">Before you get started</div>
        <div className="text-[1.3rem] font-medium text-gray-700 leading-10">
          We won&apos;t share your answers with anyone (and won&apos;t ever tell you which friends said what about you)

        </div>
        <div className="text-lg text-black font-medium my-5">
          with love, Team aloud
        </div>
        <div className="text-center self-center text-white font-medium leading-[3rem] w-fit px-5 bg-black rounded-3xl" ref={buttonRef}>
          Start a Test
        </div>

        <div className="text-base text-gray-500 font-medium" ref={testInfoRef}>
          Take only 5 minutes
        </div>
      </div>
    </div>
  );
}

export default Test;
