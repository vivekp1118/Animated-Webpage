function Navbar() {
    return ( 
        <nav className="bg-white text-black flex items-center justify-between h-24 px-14">
        <div className="h-14 w-14 rounded-xl bg-violet-700 text-center text-3xl leading-[3.5rem]">😁</div>
        <div className="flex gap-9 font-normal"> 
            <span className="nav-links cursor-pointer">Emotions</span> 
            <span className="nav-links cursor-pointer">Menifesto</span> 
            <span className="nav-links cursor-pointer">Self Awareness Test</span> 
            <span className="nav-links cursor-pointer">Work With Us</span> 
        </div>
        <div className=" h-12 w-44 text-center text-white font-medium leading-[3rem] bg-black rounded-3xl"> Download app</div>
        </nav>
     );
}

export default Navbar;