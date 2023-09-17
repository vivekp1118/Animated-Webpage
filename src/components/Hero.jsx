function Hero() {
  return (
    <>
      <div className="h-full w-[100%] p-4 sm:h-[100vh] sm:px-9 sm:pb-9">
        <div className="flex h-full w-[100%] flex-col items-center rounded-3xl bg-[#EEEBFE] p-12 sm:h-[90vh] sm:flex-row">
          <div className="w-full sm:w-[50%]">
            <p className="mb-5 text-base font-medium text-gray-900">
              Ahead App
            </p>
            <p className="mb-5 text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">
              Master your life by mastering emotions.
            </p>
            <div className="flex flex-wrap gap-5">
              <div className="h-[45px] w-[150px] flex-shrink-0 bg-[url('/app-store.svg')] bg-cover"></div>

              <p className="text-left">
                <span className="block">⭐ ⭐ ⭐ ⭐ ⭐</span>
                <span className="ml-1 block text-gray-800">
                  100+ AppStore reviews
                </span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex w-full items-center justify-center sm:m-0 sm:w-[50%]">
            <div className="mobile-phone h-[360px] w-[180px] rounded-2xl border-4 border-black bg-[#FFEEE1] bg-[url('/Poster.png')] bg-cover bg-center"></div>
          </div>
        </div>
      </div>
      <div className="md:px-18 mx-10 my-10 flex flex-col items-center justify-evenly gap-10 pb-6 sm:flex-row sm:gap-0">
        <p className="h-fit w-fit text-2xl font-semibold sm:h-[200px] sm:w-[300px]">
          EQ Beats IQ
        </p>

        <p className="w-full text-base font-medium text-gray-600 sm:h-[200px] sm:w-[300px]">
          People with high emotional intelligence (EQ) live more fullfilled
          life. They tend to be happier and have healthier relationships.
        </p>

        <p className="w-full text-base font-medium text-gray-600 sm:h-[200px] sm:w-[300px]">
          They are more successful at their persuit and make for inspiring
          leaders. According to research, they earn $29k a year.
        </p>
      </div>
    </>
  );
}

export default Hero;
