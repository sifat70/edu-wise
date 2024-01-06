

const Footer = () => {
    return (
        <div className="mt-8">
            <footer className="footer p-10 bg-[#0F4C81] text-white">
                <aside>
                    
                    <p className="w-full text-5xl font-bold lg:mt-10">Edu<span className="text-yellow-500">Wise</span></p>
                </aside>
                <nav>
                    <header className="footer-title">Pages</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Courses</a>
                    <a className="link link-hover">Tutorials</a>
                    <a className="link link-hover">Mentors</a>
                    <a className="link link-hover">Blogs</a>
                </nav>
                <nav>
                    <header className="footer-title">Contact</header>
                    <a className="link link-hover">Location : Mirpur 10, Dhaka, Bangladesh</a>
                    <a className="link link-hover">Whatsapp : +8801711111109</a>
                    <a className="link link-hover">Telegram : t.me/uiuxdesign</a>
                    <a className="link link-hover">Email : yourmail@gmail.com</a>
                </nav>
                <nav>
                    <header className="footer-title">Social</header>
                    <a className="link">Facebook</a>
                    <a className="link">Twitter</a>
                    <a className="link">LinkedIn</a>
                    <a className="link">Instagram</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;