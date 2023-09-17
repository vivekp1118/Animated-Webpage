"use client";
import { useState } from "react";
import { gsap } from "gsap";
function JobCard(props) {
  const [showDetails, setShowDetails] = useState(null);

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05, duration: 0.3, ease: "ease-out" });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1, duration: 0.3, ease: "ease-out" });
  };
  return (
    <div
      className="card duration-3000 h-[fit-content] w-[340px] cursor-pointer rounded-2xl bg-[#FEFBEC] p-7 shadow-lg"
      onMouseEnter={(e) => {
        onEnter(e);
        setShowDetails(props.id);
      }}
      onMouseLeave={(e) => {
        onLeave(e);
        setShowDetails(null);
      }}
    >
      <p className="text-xl font-semibold"> {props.title}</p>
      <div className="mt-5 flex h-[auto] flex-col gap-2 pl-3">
        <li className="text-sm font-medium text-gray-800">{props.position}</li>
        <li className="text-sm font-medium text-gray-800">{props.location}</li>
        <li className="text-sm font-medium text-gray-800">{props.salary}</li>

        {showDetails === props.id && (
          <div className="mt-5 h-fit w-fit self-start rounded-3xl bg-black px-3 text-center text-sm font-medium leading-[2rem] text-white ">
            See Details
          </div>
        )}
      </div>
    </div>
  );
}

export default JobCard;
