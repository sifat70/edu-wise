

const Blogs = () => {
    return (
        <div className="mt-10">
            <div>
                <h1 className="text-[#0F4C81] text-center font-bold text-2xl">Blogs</h1>
            </div>
            <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <div className="card  ">
                    <div className="card-body">
                        <p className="text-[#0F4C81] font-semibold">3 december 2023 - Uncategorized</p>
                        <h2 className="card-title mt-3">From Code to Clicks: Crafting Aesthetically Pleasing Websites</h2>
                        <p className="mt-3">From Code to Clicks: Crafting Aesthetically Pleasing Websites" sounds like a compelling title for a blog post or article about web design.  <a className="link font-bold text-[#0F4C81]">Read more</a></p>
                    </div>
                </div>
                <div className="card  ">
                    <div className="card-body">
                        <p className="text-[#0F4C81] font-semibold">2 december 2023 - Uncategorized</p>
                        <h2 className="card-title mt-3">Journey to Eloquence Strategies for Effective Verbal Communication</h2>
                        <p className="mt-3">Embark on a transformative "Journey to Eloquence" with our comprehensive guide on effective verbal communication. In a world where the <a className="link font-bold text-[#0F4C81]">Read more</a></p>
                    </div>
                </div>
                <div className="card  ">
                    <div className="card-body">
                        <p className="text-[#0F4C81] font-semibold">1 december 2023 - Uncategorized</p>
                        <h2 className="card-title mt-3">Designing Impact: Strategies for Effective Graphic Communication</h2>
                        <p className="mt-3">Designing Impact: Unveiling Strategies for Effective Graphic Communication". This slight modification maintains the original essence while <a className="link font-bold text-[#0F4C81]">Read more</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;