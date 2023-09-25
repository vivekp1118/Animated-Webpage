"use client";

import EmojiCard from "@/Utils/EmojiCards";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
function HabitsCard() {
  const sectionRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let scrollTween = gsap.to("#scroller", {
      x: "-600",
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: "#scroller",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        markers: true,
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="mb-10 pl-7">
        <span className="inline-block w-[65%] text-3xl font-semibold sm:text-5xl">
          Does this sound fimiliar...
        </span>
        <span className="ml-5 inline-block h-14 w-14 bg-[url('/SadCat.png')] bg-cover bg-center" />
      </div>

      <div className="overflow-x-scroll pb-10">
        <div
          className="mx-10 flex flex-row flex-nowrap gap-8 "
          ref={sectionRef}
          id="scroller"
        >
          <EmojiCard
            color="#6443E9"
            isDark={true}
            emoji="😧"
            header="You argue with a colleague"
            text="You get angry and defensive, instead of staying open and working towards common ground."
          />
          <EmojiCard
            color="#EEEBFE"
            emoji="😠"
            header="You argue with a colleague"
            text="You get angry and defensive, instead of staying open and working towards common ground."
          />
          <EmojiCard
            color="#FFEFD5"
            emoji="🤔"
            header="You get a promotion at work"
            text="You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities."
          />
          <EmojiCard
            color="#d8f2ff"
            emoji="😧"
            header="You argue with a colleague"
            text="You get angry and defensive, instead of staying open and working towards common ground."
          />

          <EmojiCard
            color="#6443E9"
            isDark={true}
            emoji="😧"
            header="You argue with a colleague"
            text="You get angry and defensive, instead of staying open and working towards common ground."
          />
          <EmojiCard
            color="#EEEBFE"
            emoji="😠"
            header="You argue with a colleague"
            text="You get angry and defensive, instead of staying open and working towards common ground."
          />
        </div>
      </div>
    </div>
  );
}

export default HabitsCard;
