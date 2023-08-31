function Careers() {
  return (
    <div className="h-[90vh] w-[100%] p-20 mt-10 border-solid border-b-[3px] border-gray-300">
      <p className="text-5xl font-bold mb-14">Open vacancies</p>
      <div className="flex justify-between">
        <div className="w-[340px] h-[auto] bg-[#FEFBEC] p-7 rounded-2xl shadow-lg">
          <p className="text-lg font-semibold">Senior Full-Stack Engineer</p>
          <div className="pl-3 mt-5 flex flex-col h-[100%] gap-2">
            <li className="text-sm text-gray-800 font-medium">
              Full-time position
            </li>
            <li className="text-sm text-gray-800 font-medium">
              Berlin or remote
            </li>
            <li className="text-sm text-gray-800 font-medium">
              €65-85k, 0.5-1.50% equity share options
            </li>
          </div>
        </div>

        <div className="w-[340px] h-[auto] bg-[#FEFBEC] p-7 rounded-2xl shadow-lg">
          <p className="text-xl font-semibold"> Senior designer</p>
          <div className="pl-3 mt-5 flex flex-col h-[100%] gap-2">
            <li className="text-sm text-gray-800 font-medium">
              Full-time position
            </li>
            <li className="text-sm text-gray-800 font-medium">
              Berlin or remote
            </li>
            <li className="text-sm text-gray-800 font-medium">
              €40-55k, 0.25-0.50% equity share options
            </li>
          </div>
        </div>

        <div className="w-[340px] h-[auto] bg-[#FEFBEC] p-7 rounded-2xl shadow-lg">
          <p className="text-xl font-semibold">Superstar Intern</p>
          <div className="pl-3 mt-5 flex flex-col h-[100%] gap-2">
            <li className="text-sm text-gray-800 font-medium">
              Full-time position
            </li>
            <li className="text-sm text-gray-800 font-medium">
              Berlin or remote
            </li>
            <li className="text-sm text-gray-800 font-medium">
              €20-24k, 0.5-1.50% equity share options
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
