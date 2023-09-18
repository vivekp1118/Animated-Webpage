"use client";
import { useEffect, useState } from "react";

function Navbar() {
  return (
    <nav className="flex h-24 items-center justify-between bg-white px-6 text-black md:px-14">
      <div className="h-14 w-14 rounded-xl bg-violet-700 text-center text-3xl leading-[3.5rem]">
        😁
      </div>

      <div className=" h-12 w-44 rounded-3xl bg-black text-center font-medium leading-[3rem] text-white">
        {" "}
        Download app
      </div>
    </nav>
  );
}

export default Navbar;
