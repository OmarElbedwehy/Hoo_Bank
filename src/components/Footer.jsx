import logo from "../assets/logo.svg"

const Footer = () => (
    <>
        <div className="w-[80%] footer-div px-24 py-14 mx-auto rounded-3xl mb-24 flex items-center justify-between">
            <div className="text">
                <h1 className="text-4xl leading-snug font-semibold">Let’s try our service now!</h1>
                <p className="praph text-sm text-white/70 w-[350px] mt-3">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <button className="linear-btn rounded-lg px-5 py-4 text-[#00040E] font-medium block">Get Started</button>
        </div>
        <footer className="grid grid-cols-4 py-10 px-32 mx-auto bg-[#0B0A0C]/60 gap-24">
            <div>
                <div className="logo mb-4">
                    <img className="w-[180px]" src={logo} alt="" />
                </div>
                <p className="text-sm text-white/70 w-[200px]">A new way to make the payments easy, reliable and secure.</p>
            </div>
            <div>
                <h4>Usefull Links</h4>
                <ul>
                    <li>Content</li>
                    <li>How it Works</li>
                    <li>Create</li>
                    <li>Explore</li>
                    <li>Terms & Services</li>
                </ul>
            </div>
            <div>
                <h4>Community</h4>
                <ul>
                    <li>Help Center</li>
                    <li>Partners</li>
                    <li>Suggestions</li>
                    <li>Blog</li>
                    <li>Newsletters</li>
                </ul>
            </div>
            <div>
                <h4>Partner</h4>
                <ul>
                    <li>Our Partner</li>
                    <li>Become a Partner</li>
                </ul>
            </div>
        </footer>
    </>
)

export default Footer