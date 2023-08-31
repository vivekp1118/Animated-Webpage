"use client";
import JobCard from "@/Utils/JobsCards";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

function Careers() {
  const vacanciesHeader = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: vacanciesHeader.current,
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
      },
    });

    t1.fromTo(vacanciesHeader.current, { opacity: 0, x: -200 }, { opacity: 1, x: 0, duration: 1 });
    return () => {
      t1.kill();
    };
  }, [])
  return (
    <div className="h-[90vh] w-[100%] p-20 mt-10 border-solid border-b-[3px] border-gray-300">
      <p className="text-5xl font-bold mb-14" ref={vacanciesHeader}>Open vacancies</p>
      <div className="flex justify-between">

        <JobCard
          title="Senior Full-Stack Engineer"
          position="Full-time position"
          location="Berlin or remote"
          salary="€65-85k, 0.5-1.50% equity share options"
          id={1}
        />

        <JobCard
          title="Senior designer"
          position="Full-time position"
          location="Berlin or remote"
          salary="€40-55k, 0.25-0.50% equity share options"
          id={2}
        />

        <JobCard
          title="Superstar Intern"
          position="Full-time position"
          location="Berlin or remote"
          salary="€20-24k, 0.5-1.50% equity share options"
          id={3}
        />


      </div>
    </div>


  );
}

export default Careers;
