function Assesment() {
  return (
    <div className="h-[auto] w-[100vw] relative box-border px-12 overflow-hidden ">
      <div className="w-[100%] h-[100%] flex flex-col gap-14 items-center rounded-2xl bg-[#EDF8FE] pt-10 pb-20 ">
        <div className="text-center">
          <p className="text-lg font-semibold mt-10  text-gray-700">
            Let your friends, family, and co-workers (anonymously) rate your
            social skills.
          </p>
          <p className="text-5xl font-bold my-4">
            Ever wondered what others think of you?
          </p>
        </div>
        <div className="dashed-line my-20 w-[900px] h-[4px] bg-[#e292479d] relative">
          <div className="circle circle-one">1</div>
          <div className="circle circle-two">2</div>
          <div className="circle circle-three">3</div>
        </div>

        <div className="w-[800px] h-[240px] bg-white rounded-2xl mt-10 flex justify-center items-center shadow-2xl">
          <div className="my-20 w-[700px] h-[4px] bg-gray-300 relative">
            <div className="user user-one"></div>
            <div className="user user-two"></div>
            <div className="user user-three"></div>
            <div className="user user-four"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assesment;
