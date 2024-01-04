
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Transform Your Future
                        Through Online Learning</h1>
                    <p className="py-6">Welcome to our E-Learning platform, where knowledge meets innovation. Explore dynamic courses, engage with expert instructors, and thrive academically.</p>
                    <button className="btn bg-[#0F4C81] text-white">Enroll Course</button>
                    <button className="btn ml-3">More Info <FaArrowRight /></button>
                    <div className="flex items-center gap-5">
                        <div className="avatar-group -space-x-6 rtl:space-x-reverse mt-5">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Students Review</p>
                            <p><small>15k+ Successful Students</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;