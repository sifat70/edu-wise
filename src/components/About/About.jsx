

const About = () => {
    return (
        <div className="mt-10">
            <div>
                <h1 className="text-[#0F4C81] text-center font-bold text-2xl">About Us</h1>
            </div>
            <div className="mt-10 lg:flex ">
                <div className="lg:w-[60%]">
                    <h1 className="text-2xl text-[#0F4C81] font-bold">Crafting Excellence: <span className="text-[#FFA03A]">Our Story and Mission</span></h1>
                    <p className="mt-6">Welcome to <span className="text-[#0F4C81] font-bold">Edu</span><span className="text-[#FFA03A] font-bold">Wise</span>, where education meets innovation. Founded with a passion for empowering individuals through knowledge, we are dedicated to providing an enriching and accessible learning experience. Our team of educators and industry experts collaborates to curate high-quality courses spanning diverse subjects. At [Your Company Name], we believe in the transformative power of education to shape a brighter future. Whether you're a professional seeking to enhance your skills or an enthusiast eager to explore new horizons, our platform offers a dynamic space for growth. Join our community, embark on a journey of discovery, and let education be the catalyst for your personal and professional success.</p>
                    <div className="flex items-center">
                        <div>
                            <button className="btn bg-[#0F4C81] text-white mt-10">Learn More About Us</button>
                        </div>
                        <div className="flex gap-2 items-center mt-9 ml-6">
                            <div>
                                <img className="h-[20px]" src="https://i.ibb.co/XD3gbnP/Frame.png" alt="" />
                            </div>
                            <div>
                                <p className="text-[#0F4C81] font-semibold">How We Work</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <div className="lg:w-[40%] lg:ml-[80px]">
                    <div className="flex gap-5">
                        <div>
                            <img className="h-[120px] border-4 border-amber-300 rounded-se-[60px] rounded-es-[60px]" src="https://i.ibb.co/7tP88dq/3db0ec708e2425cc5cc27771b288da37.jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-[120px] border-4 border-amber-300 rounded-ss-[60px] rounded-ee-[60px]" src="https://i.ibb.co/y5dfJSG/dc73c118babe1eba88927ffadf8c74a4.jpg" alt="" />
                        </div>
                    </div>
                    <div className="mt-5 ml-8">
                        <img className="h-[180px] w-[300px] border-4 border-amber-300 rounded-[50px]" src="https://i.ibb.co/X75KzVh/674f15a4b8d13015dc81488600b0f280.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;