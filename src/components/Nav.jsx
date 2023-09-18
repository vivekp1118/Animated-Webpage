function Navbar() {
  return (
    <nav className="flex h-24 items-center justify-between bg-white px-6 text-black md:px-14">
      <div className="h-14 w-14 rounded-xl bg-violet-700 text-center text-3xl leading-[3.5rem]">
        😁
      </div>
      {window.isMobile && (
        <div className="flex gap-9 font-normal">
          <span className="nav-links cursor-pointer">Emotions</span>
          <span className="nav-links cursor-pointer">Menifesto</span>
          <span className="nav-links cursor-pointer">Self Awareness Test</span>
          <span className="nav-links cursor-pointer">Work With Us</span>
        </div>
      )}
      <div className=" h-12 w-44 rounded-3xl bg-black text-center font-medium leading-[3rem] text-white">
        {" "}
        Download app
      </div>
    </nav>
  );
}

export default Navbar;
