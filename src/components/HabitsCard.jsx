"use client"

import EmojiCard from "@/Utils/EmojiCards";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
function HabitsCard() {
  const triggerRef = useRef(null)
  const sectionRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    let scrollTween = gsap.to("#scroller", {
      x: '-80%',
      duration: 2,
      ease: "none",
      scrollTrigger: {
        markers: true,
        trigger: "#scroller",
        start: "top 90%",
        end: "bottom 25%",
        scrub: true
      }
    });

    return () => {
      scrollTween.kill();
    };

  }, []);

  return (
    <div className="flex flex-col">
      <div className="mb-10 px-14 ">
        <span className="font-semibold text-5xl inline-block">
          Does this sound fimiliar...
        </span>
        <span className="inline-block h-14 w-14 bg-[url('/SadCat.png')] bg-center bg-cover ml-5" />
      </div>

      <div className="overflow-x-scroll pb-10">
        <div className="flex flex-row gap-8 flex-nowrap mx-10 " ref={sectionRef} id="scroller">
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
