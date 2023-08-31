function Hero() {
  return (
    <>
      <div className="h-[100vh] w-[100%] px-9 pb-9">
        <div className="h-[90vh] w-[100%] bg-[#EEEBFE] rounded-3xl flex items-center p-12">
          <div className="w-[50%]">
            <p className="text-base text-gray-900 font-medium mb-5">
              Ahead App
            </p>
            <p className="text-6xl font-bold mb-5 leading-[1.1]">
              Master your life by mastering emotions.
            </p>
            <div className="flex gap-10">
              <div className="w-[150px] h-[45px] bg-[url('/app-store.svg')] bg-cover"></div>

              <p className="text-left">
                <span className="block">⭐ ⭐ ⭐ ⭐ ⭐</span>
                <span className="text-gray-800 ml-1 block">
                  100+ AppStore reviews
                </span>
              </p>
            </div>
          </div>
          <div className="w-[50%] flex items-center justify-center">
            <div className="mobile-phone w-[180px] h-[360px] border-black border-4 rounded-2xl bg-[url('/Poster.png')] bg-[#FFEEE1] bg-center bg-cover"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center px-18 pb-6">
        <p className="text-2xl font-semibold w-[300px] h-[200px]">
          EQ Beats IQ
        </p>

        <p className="text-base text-gray-600 font-medium w-[300px] h-[200px]">
          People with high emotional intelligence (EQ) live more fullfilled
          life. They tend to be happier and have healthier relationships.
        </p>

        <p className="text-base text-gray-600 font-medium w-[300px] h-[200px]">
          They are more successful at their persuit and make for inspiring
          leaders. According to research, they earn $29k a year.
        </p>
      </div>
    </>
  );
}

export default Hero;
