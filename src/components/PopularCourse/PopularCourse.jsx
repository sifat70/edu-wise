

const PopularCourse = () => {
    return (
        <div>
            <div>
                <h1 className="text-[#0F4C81] text-center font-bold text-2xl">Popular Courses</h1>
                <p className="mt-4">Explore our diverse array of popular courses designed to inspire, educate, and empower. From cutting-edge technology to timeless arts, our curated selection ensures  a dynamic learning experience.</p>
            </div>
            {/* card section */}
            <div className="mt-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#0F4C81]"> Graphic Design</h2>

                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#0F4C81]"> Web Design</h2>

                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#0F4C81]"> Learn Quran</h2>

                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#0F4C81]"> Graphic Design</h2>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCourse;