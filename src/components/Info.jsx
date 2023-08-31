function Info() {
  return (
    <div className="h-[100vh] w-[100vw] p-12 relative ">
      <div className="w-[100%] h-[100%] flex flex-col justify-center rounded-2xl bg-[#FEF6F1] p-10 ">
        <div>
          <p className="text-lg font-semibold my-4 text-gray-700">
            Built out of frustration
          </p>
          <p className="text-5xl font-bold my-4">Meet the ahead app</p>
        </div>
        <div className="flex flex-row w-[100%] h[100%] my-6">
          <div className="w-[50%]">
            <div className="w-[200px] h-[200px] bg-[url('/JoyFulCat.png')] rounded-tl-10 rounded-tr-1 bg-cover mx-auto info-cat"></div>
          </div>
          <div className="w-[40%] leading-relaxed text-xl font-semibold text-gray-700">
            <p className="mb-5">
              A personalized pocket coach that provides bite- sized,
              science-driven tools to boost emotional intelligence.
            </p>
            <p>
              Think of it as a pocket cheerleader towards a better, more
              fulfilling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
