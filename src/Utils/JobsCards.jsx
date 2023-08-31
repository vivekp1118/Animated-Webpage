"use client"
import { useState } from "react";
function JobCard(props) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="w-[340px] h-[auto] bg-[#FEFBEC] p-7 rounded-2xl shadow-lg transition-all duration-3000 ease-in-out cursor-pointer"
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
        >
            <p className="text-xl font-semibold"> {props.title}</p>
            <div className="pl-3 mt-5 flex flex-col h-[auto] gap-2">
                <li className="text-sm text-gray-800 font-medium">
                    {props.position}
                </li>
                <li className="text-sm text-gray-800 font-medium">
                    {props.location}
                </li>
                <li className="text-sm text-gray-800 font-medium">
                    {props.salary}
                </li>

                {showDetails && <div className="text-center self-start mt-5 text-white font-medium leading-[3rem] w-fit px-4 bg-black rounded-3xl ">
                    See Details
                </div>}
            </div>
        </div>
    );
}

export default JobCard;