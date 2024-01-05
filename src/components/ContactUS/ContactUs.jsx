

const ContactUs = () => {
    return (
        <div className="mt-10">
            <div>
                <h1 className="text-[#0F4C81] text-center font-bold text-2xl">Contact Us</h1>
            </div>
            <div className="grid gap-8 mt-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <div>
                    <input type="text" placeholder="Name" className="input input-bordered w-full " />
                </div>
                <div>
                    <input type="text" placeholder="Email" className="input input-bordered w-full" />
                </div>
                <div>
                    <input type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                </div>
            </div>
            <div className="mt-8">
                <textarea className="textarea w-full h-[96px] textarea-bordered" placeholder="Your comment here"></textarea>
            </div>
            <div className="text-center mt-8">
                <button className="btn bg-[#0F4C81] text-white">Send Message</button>
            </div>
        </div>
    );
};

export default ContactUs;