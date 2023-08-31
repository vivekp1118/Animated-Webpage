import EmojiCard from "@/Utils/EmojiCards";
function HabitsCard() {
  return (
    <div className="flex flex-col">
      <div className="mb-10 px-14 ">
        <span className="font-semibold text-5xl inline-block">
          Does this sound fimiliar...
        </span>
        <span className="inline-block h-14 w-14 bg-[url('/SadCat.png')] bg-center bg-cover ml-5">
          {" "}
        </span>
      </div>

      <div className="overflow-x-scroll pb-10">
        <div className="flex flex-row gap-8 flex-nowrap mx-10">
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
        </div>
      </div>
    </div>
  );
}

export default HabitsCard;
