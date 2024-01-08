

const SuitableCourse = () => {
    return (
        <div id="tutorials" className="mt-10">
            <div>
                <h1 className="text-[#0F4C81] text-center font-bold text-2xl">Choose Your Suitable Course</h1>
            </div>
            <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="card hover:origin-top hover:-translate-y-1 duration-300 hover:scale-105 hover:bg-base-300 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className=" bg-[#0F4C81] text-white text-xl font-bold rounded-t-[15px] rounded-b-[30px] p-3 text-center">Basic Learning</h2>
                        <button className="btn btn-outline text-2xl mt-5 text-[#0F4C81] font-extrabold">$49.99</button>
                        <div className="mt-4">
                            <li>Introduction to Programming</li>
                            <li>Effective Communication Skills</li>
                            <li>Basic Financial Literacy</li>
                            <li>Lifetime access to course materials</li>
                            <li>Interactive quizzes and assessments</li>
                            <li>Certificate of completion for each course</li>
                        </div>
                        <div className="">
                            <button className="btn btn-outline w-full border-dotted mt-5">Activate This Plan</button>
                        </div>
                    </div>
                </div>
                <div className="card hover:origin-top hover:-translate-y-1 duration-300 hover:scale-105 hover:bg-base-300 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className=" bg-[#0F4C81] text-white text-xl font-bold rounded-t-[15px] rounded-b-[30px] p-3 text-center">Professional Development</h2>
                        <button className="btn btn-outline text-2xl mt-5 text-[#0F4C81] font-extrabold">$99.99</button>
                        <div className="mt-4">
                            <li>Advanced Data Analytics</li>
                            <li>Project Management Fundamentals</li>
                            <li>Digital Marketing Strategies</li>
                            <li>Access to premium course content</li>
                            <li>Dedicated support forum</li>
                            <li>Career guidance resources</li>
                        </div>
                        <div className="">
                            <button className="btn btn-outline w-full border-dotted mt-5">Activated</button>
                        </div>
                    </div>
                </div>
                <div className="card hover:origin-top hover:-translate-y-1 duration-300 hover:scale-105 hover:bg-base-300 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className=" bg-[#0F4C81] text-white text-xl font-bold rounded-t-[15px] rounded-b-[30px] p-3 text-center">Master Class</h2>
                        <button className="btn btn-outline text-2xl mt-5 text-[#0F4C81] font-extrabold">$49.99</button>
                        <div className="mt-4">
                            <li>Artificial Intelligence & Machine Learning</li>
                            <li>Leadership & Management Excellence</li>
                            <li>Creative Writing Workshop</li>
                            <li>Priority access to new course releases</li>
                            <li>Personalized feedback on assignments</li>
                            <li>Exclusive masterclass</li>
                        </div>
                        <div className="">
                            <button className="btn btn-outline w-full border-dotted mt-5">Activate This Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuitableCourse;