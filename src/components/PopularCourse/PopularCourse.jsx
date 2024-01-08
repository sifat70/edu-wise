

const PopularCourse = () => {
    return (
        <div id="courses">
            <div>
                <h1 className="text-[#0F4C81] text-center font-bold text-2xl">Popular Courses</h1>
                <p className="mt-4">Explore our diverse array of popular courses designed to inspire, educate, and empower. From cutting-edge technology to timeless arts, our curated selection ensures  a dynamic learning experience.</p>
            </div>
            {/* card section */}
            <div className="mt-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    <div className="mt-5">
                        <div className="hover:origin-top hover:-translate-y-1 duration-300 hover:scale-105 hover:bg-base-300 card card-compact bg-base-100 shadow-xl">
                            <div className="w-[95%] mx-auto"><figure><img className="rounded-xl h-[200px] w-full" src="https://i.ibb.co/zF1kSRX/29d2ae53af3c8fcb8ea9c3a708f0cc96.jpg" alt="Shoes" /></figure></div>
                            <div className="card-body flex items-center">
                                <h2 className="card-title text text-[#0F4C81]"> Graphic Design</h2>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="hover:origin-top hover:-translate-y-1 duration-300 hover:scale-105 hover:bg-base-300 card card-compact bg-base-100 shadow-xl">
                            <div className="w-[95%] mx-auto"><figure><img className="rounded-xl h-[200px] w-full" src="https://i.ibb.co/T8s2CZn/f4b6b93284b508de878519d0dbb29430.jpg" alt="Shoes" /></figure></div>
                            <div className="card-body flex items-center">
                                <h2 className="card-title text text-[#0F4C81]"> Graphic Design</h2>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="hover:origin-top hover:-translate-y-1 duration-300 hover:scale-105 hover:bg-base-300 card card-compact bg-base-100 shadow-xl">
                            <div className="w-[95%] mx-auto"><figure><img className="rounded-xl h-[200px] w-full" src="https://i.ibb.co/d2X3j0Y/2aa0ea56cb5e7d4f4591cc1836c4636a.jpg" alt="Shoes" /></figure></div>
                            <div className="card-body flex items-center">
                                <h2 className="card-title text text-[#0F4C81]"> Graphic Design</h2>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="hover:origin-top hover:-translate-y-1 duration-300 hover:scale-105 hover:bg-base-300 card card-compact bg-base-100 shadow-xl">
                            <div className="w-[95%] mx-auto"><figure><img className="rounded-xl h-[200px] w-full" src="https://i.ibb.co/cTFFggJ/78549d9476c6e51555208b757e245b56.jpg" alt="Shoes" /></figure></div>
                            <div className="card-body flex items-center">
                                <h2 className="card-title text text-[#0F4C81]"> Graphic Design</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCourse;