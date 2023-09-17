"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const workHeader = useRef(null);
  const aheadHeader = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: workHeader.current,
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
      },
    });

    t1.fromTo(
      workHeader.current,
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1 },
    );
    t1.fromTo(
      aheadHeader.current,
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 1 },
    );
    return () => {
      t1.kill();
    };
  }, []);
  return (
    <div className="w- mx-12 h-[200vh] overflow-hidden rounded-2xl bg-[#F3F1FF] pt-10 sm:h-[120vh]">
      <div className="flex h-[100%] w-[100%] flex-col justify-between p-10 shadow-lg sm:flex-row">
        <div className="flex h-[100%] w-[auto] flex-col gap-8 sm:w-[40%]">
          <p className="text-5xl font-bold" ref={workHeader}>
            Work with us
          </p>
          <div className="h-[100%] w-[100%] rounded-2xl bg-white ">
            <div className="p-10">
              <span className="block h-14 w-14 bg-[url('/JoyFulCat.png')] bg-cover bg-center"></span>
              <p className="my-3 text-2xl font-semibold">About</p>
              <p className="text-lg font-medium text-gray-600 ">
                At ahead our goal is to make self- improvement fun and lasting.
                We know there&rsquo;s a way how to make it work. And that&apos;s
                what aHead is all about!
              </p>
            </div>
            <div className="rounded-2xl bg-[#FEF6F1] px-10 py-5">
              <p className="my-3 text-2xl font-semibold">Product</p>
              <p className="text-lg font-medium text-gray-600">
                Sure, you could spend ages reading books or sitting in seminars
                on how to become a better spouse, parent, or manager - like we
                did...
              </p>
            </div>
          </div>
        </div>

        <div className="h-full w-[auto] sm:w-[40%]">
          <p
            className="my-8 flex text-5xl font-semibold text-[#6542EA] sm:my-0 sm:mb-8"
            ref={aheadHeader}
          >
            ahead
          </p>
          <div className="custom-scroller flex h-[85%] flex-col flex-nowrap gap-10 overflow-scroll pb-10">
            <div className="h-[220px] w-[330px] rounded-2xl bg-white p-9 ">
              <p className="pb-5 text-base font-medium text-black">
                Power through, even when the going gets tough
              </p>
              <p className="text-base font-medium text-gray-700">
                We help you spot and work around whatever stands in the way, be
                it bad habits, fears, etc.
              </p>
            </div>

            <div className="h-[220px] w-[330px] rounded-2xl bg-white p-9">
              <p className="pb-5 text-base font-medium text-black">
                Power through, even when the going gets tough
              </p>
              <p className="text-base font-medium text-gray-700">
                We help you spot and work around whatever stands in the way, be
                it bad habits, fears, etc.
              </p>
            </div>

            <div className="h-[220px] w-[330px] rounded-2xl bg-white p-9">
              <p className="pb-5 text-base font-medium text-black">
                Power through, even when the going gets tough
              </p>
              <p className="text-base font-medium text-gray-700">
                We help you spot and work around whatever stands in the way, be
                it bad habits, fears, etc.
              </p>
            </div>

            <div className="h-[220px] w-[330px] rounded-2xl bg-white p-9">
              <p className="pb-5 text-base font-medium text-black">
                Power through, even when the going gets tough
              </p>
              <p className="text-base font-medium text-gray-700">
                We help you spot and work around whatever stands in the way, be
                it bad habits, fears, etc.
              </p>
            </div>

            <div className="h-[220px] w-[330px] rounded-2xl bg-white p-9">
              <p className="pb-5 text-base font-medium text-black">
                Power through, even when the going gets tough
              </p>
              <p className="text-base font-medium text-gray-700">
                We help you spot and work around whatever stands in the way, be
                it bad habits, fears, etc.
              </p>
            </div>

            <div className="h-[220px] w-[330px] rounded-2xl bg-white p-9">
              <p className="pb-5 text-base font-medium text-black">
                Power through, even when the going gets tough
              </p>
              <p className="text-base font-medium text-gray-700">
                We help you spot and work around whatever stands in the way, be
                it bad habits, fears, etc.
              </p>
            </div>

            <div className="h-[220px] w-[330px] rounded-2xl bg-white p-9">
              <p className="pb-5 text-base font-medium text-black">
                Power through, even when the going gets tough
              </p>
              <p className="text-base font-medium text-gray-700">
                We help you spot and work around whatever stands in the way, be
                it bad habits, fears, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
