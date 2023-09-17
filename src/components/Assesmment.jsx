"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function Assesment() {
  const headerRef = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    const popUpElements = container.current.querySelectorAll(".pop-up");
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 60%",
        scrub: 2,
      },
    });

    t1.fromTo(
      headerRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 },
    );
    popUpElements.forEach((element) => {
      t1.fromTo(
        element,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 2 },
      );
    });

    return () => {
      t1.kill();
    };
  }, []);

  return (
    <div className="relative box-border h-[auto] w-[100vw] overflow-hidden p-6 px-6 md:px-12 ">
      <div
        className="flex h-[100%] w-[100%] flex-col items-center gap-14 rounded-2xl bg-[#EDF8FE] pb-20 pt-10 "
        ref={container}
      >
        <div className="text-center" ref={headerRef}>
          <p className="mx-6 text-lg font-semibold text-gray-700  md:mt-10">
            Let your friends, family, and co-workers (anonymously) rate your
            social skills.
          </p>
          <p className="my-4 text-4xl font-bold md:text-5xl">
            Ever wondered what others think of you?
          </p>
        </div>
        <div className="dashed-line relative my-20 h-[4px] w-[400px] bg-[#e292479d] md:w-[900px]">
          <div className="circle circle-one pop-up">1</div>
          <div className="circle circle-two pop-up">2</div>
          <div className="circle circle-three pop-up">3</div>
        </div>

        <div className="mt-10 flex h-[240px] w-fit items-center justify-center rounded-2xl bg-white px-5 shadow-2xl md:w-[800px]">
          <div className="relative my-20 h-[4px] w-[300px] bg-gray-300 md:w-[700px]">
            <div className="user user-one pop-up"></div>
            <div className="user user-two pop-up"></div>
            <div className="user user-three pop-up"></div>
            <div className="user user-four pop-up"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assesment;
