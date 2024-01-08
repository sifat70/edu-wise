

const Reviews = () => {
    return (
        <div className="mt-10">
            <div>
                <h1 className="text-[#0F4C81] text-center font-bold text-2xl">Students Reviews</h1>
            </div>
            <div className="grid mt-10 grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-2">
                <div className="hover:origin-top hover:-translate-y-1 duration-300 hover:scale-105 hover:bg-base-300 card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center">
                            <div className="w-full">
                                <img className="w-[150px] h-[150px] rounded-full" src="https://i.ibb.co/G02nwjw/5037c3027298cf3e6e6e9351f4688db2.jpg" alt="" />
                            </div>
                            <div className="">
                                <div className="ml-3">
                                    <div className="flex justify-between">
                                        <div>
                                            <h1 className="text-xl font-bold">Oliver</h1>
                                        </div>
                                        <div>
                                            <div className="rating">
                                                <input type="radio" name="rating-1" className="mask mask-star" />
                                                <input type="radio" name="rating-1" className="mask mask-star" checked />
                                                <input type="radio" name="rating-1" className="mask mask-star" />
                                                <input type="radio" name="rating-1" className="mask mask-star" />
                                                <input type="radio" name="rating-1" className="mask mask-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-2">Student Of Web Design</p>
                                    <p className="mt-4">“Definitely recommend it to anyone looking to upskill new subjects.”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hover:origin-top hover:-translate-y-1 duration-300 hover:scale-105 hover:bg-base-300 card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center">
                            <div className="w-full">
                                <img className="w-[150px] h-[150px] rounded-full" src="https://i.ibb.co/3s3LmYg/33dd6f8889a20cb129e4e038565dc947.jpg" alt="" />
                            </div>
                            <div className="">
                                <div className="ml-3">
                                    <div className="flex justify-between">
                                        <div>
                                            <h1 className="text-xl font-bold">Olivia</h1>
                                        </div>
                                        <div>
                                            <div className="rating">
                                                <input type="radio" name="rating-1" className="mask mask-star" />
                                                <input type="radio" name="rating-1" className="mask mask-star" checked />
                                                <input type="radio" name="rating-1" className="mask mask-star" />
                                                <input type="radio" name="rating-1" className="mask mask-star" />
                                                <input type="radio" name="rating-1" className="mask mask-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-2">Student Of Graphic Design</p>
                                    <p className="mt-4">“The courses are well-structured, and the bite-sized lessons made it easy.”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hover:origin-top hover:-translate-y-1 duration-300 hover:scale-105 hover:bg-base-300 card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center">
                            <div className="w-full">
                                <img className="w-[150px] h-[150px] rounded-full" src="https://i.ibb.co/G02nwjw/5037c3027298cf3e6e6e9351f4688db2.jpg" alt="" />
                            </div>
                            <div className="">
                                <div className="ml-3">
                                    <div className="flex justify-between">
                                        <div>
                                            <h1 className="text-xl font-bold">Ethan</h1>
                                        </div>
                                        <div>
                                            <div className="rating">
                                                <input type="radio" name="rating-1" className="mask mask-star" />
                                                <input type="radio" name="rating-1" className="mask mask-star" checked />
                                                <input type="radio" name="rating-1" className="mask mask-star" />
                                                <input type="radio" name="rating-1" className="mask mask-star" />
                                                <input type="radio" name="rating-1" className="mask mask-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-2">Student Of CSE</p>
                                    <p className="mt-4">“The instructors are passionate, and the  hands-on projects allowed me to apply  what I learned.”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;