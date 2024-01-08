

const Navbar = () => {
    const NavLinks = <>
        <li className="text-[#0F4C81] font-bold"><a href="#navbar">Home</a></li>
        <li className="text-[#0F4C81] font-bold"><a href="#courses">Courses</a></li>
        <li className="text-[#0F4C81] font-bold"><a href="#tutorials">Tutorials</a></li>
        <li className="text-[#0F4C81] font-bold"><a href="#mentors">Mentors</a></li>
    </>
    return (
        <div id="navbar" className="navbar bg-base-100 mt-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <a className="text-3xl text-[#0F4C81] font-extrabold">Edu<span className="text-[#FFA03A] font-extrabold ml-0">Wise</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline">Log In</a>
                <a className="btn ml-3 bg-[#0F4C81] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;