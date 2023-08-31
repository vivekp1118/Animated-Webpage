"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function Assesment() {
  const headerRef = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    const popUpElements = container.current.querySelectorAll('.pop-up');
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 60%",
        scrub: 2,
      },
    });

    t1.fromTo(headerRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 });
    popUpElements.forEach((element) => {
      t1.fromTo(
        element,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 2 }
      );
    });

    return () => {
      t1.kill();
    };
  }, []);

  return (
    <div className="h-[auto] w-[100vw] relative box-border px-12 overflow-hidden ">
      <div className="w-[100%] h-[100%] flex flex-col gap-14 items-center rounded-2xl bg-[#EDF8FE] pt-10 pb-20 " ref={container}>
        <div className="text-center" ref={headerRef}>
          <p className="text-lg font-semibold mt-10  text-gray-700">
            Let your friends, family, and co-workers (anonymously) rate your
            social skills.
          </p>
          <p className="text-5xl font-bold my-4">
            Ever wondered what others think of you?
          </p>
        </div>
        <div className="dashed-line my-20 w-[900px] h-[4px] bg-[#e292479d] relative">
          <div className="circle circle-one pop-up">1</div>
          <div className="circle circle-two pop-up">2</div>
          <div className="circle circle-three pop-up">3</div>
        </div>

        <div className="w-[800px] h-[240px] bg-white rounded-2xl mt-10 flex justify-center items-center shadow-2xl">
          <div className="my-20 w-[700px] h-[4px] bg-gray-300 relative">
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
