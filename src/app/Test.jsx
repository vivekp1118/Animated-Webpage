function Test() {
  return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center">
      <div className="flex flex-col gap-6 w-[700px] text-center">
        <div className="text-lg font-medium text-gray-900">
          We take privacy seriously
        </div>
        <div className="text-4xl  font-semibold">Before you get started</div>
        <div className="text-[1.3rem] font-medium text-gray-700 leading-10">
          "We won't share your answers with anyone (and won't ever tell you
          which friends said what about you)"
        </div>
        <div className="text-lg text-black font-medium my-5">
          with love, Team aloud
        </div>
        <div className="text-center self-center text-white font-medium leading-[3rem] w-fit px-5 bg-black rounded-3xl">
          Start a Test
        </div>

        <div className="text-base text-gray-500 font-medium">
          Take only 5 minutes
        </div>
      </div>
    </div>
  );
}

export default Test;
