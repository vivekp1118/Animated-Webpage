import ImprovementCard from "@/Utils/ImprovementCard";
function Scroller() {
  return (
    <>
      <div className="h-[100vh] w-[100vw] p-24 relative overflow-hidden">
        <p className="text-lg font-medium text-gray-800 my-4">
          Wrong with self-improvement & how we're fixing it.
        </p>
        <div>
          <p className="text-5xl font-bold my-4 inline-block">
            Self-improvement. Ugh.
          </p>
          <span className="inline-block h-14 w-14 bg-[url('/CryingCat.png')] bg-center bg-cover ml-5">
            {" "}
          </span>
        </div>

        <div className="flex w-[100%] h-[90vh] px-5 justify-center overflow-y-auto">
          <div className="flex flex-col w-[550px] gap-14  mt-10 flex-nowrap">
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
        <div className="flex justify-evenly items-center h-[80vh]">
          <p className="text-2xl font-semibold w-[300px] h-[150px]">
            Be the best you with EQ
          </p>

          <p className="text-base text-gray-600 font-medium w-[300px] h-[150px]">
            Not having your own emotions under control might be holding you
            back.
          </p>

          <p className="text-base text-gray-600 font-medium w-[300px] h-[150px]">
            Additionally, not understanding those of others stops you from being
            parent, friend you can be.
          </p>
        </div>
      </>
    </>
  );
}

export default Scroller;
