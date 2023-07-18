import people_1 from '../assets/people01.png'
import people_2 from '../assets/people02.png'
import people_3 from '../assets/people03.png'
import airbnb from '../assets/airbnb.png'
import binance from '../assets/binance.png'
import coinbase from '../assets/coinbase.png'
import dropbox from '../assets/dropbox.png'

const Testimonials = () => (
    <section className="testimonials flex-col justify-start w-full gap-24 relative">
        <div className="top flex items-center w-full justify-between">
            <h1 className="text-4xl w-[390px] leading-snug font-semibold">What people are saying about us</h1>
            <p className="praph text-sm text-white/70 w-[350px]">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className="testis w-[90%] flex justify-between items-center">
            <div className="testi">
                <div className="ico">
                    <svg width="43" height="28" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7984 27.6L18.9984 0H12.3984L0.398438 27.6H11.7984ZM35.7984 27.6L42.9984 0H36.3984L24.3984 27.6H35.7984Z" fill="url(#paint0_linear_1_54)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_54" x1="28.8615" y1="-24.7969" x2="41.7939" y2="24.1471" gradientUnits="userSpaceOnUse">
                                <stop offset="0.00887753" stop-color="#DEF9FA" />
                                <stop offset="0.1723" stop-color="#BEF3F5" />
                                <stop offset="0.4204" stop-color="#9DEDF0" />
                                <stop offset="0.5512" stop-color="#7DE7EB" />
                                <stop offset="0.7154" stop-color="#5CE1E6" />
                                <stop offset="1" stop-color="#33BBCF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <p className='praph'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                <div className="author">
                    <div className="img">
                        <img src={people_1} alt="" />
                    </div>
                    <div className="text">
                        <h4>Herman Jensen</h4>
                        <p>Founder & Leader</p>
                    </div>
                </div>
            </div>
            <div className="testi">
                <div className="ico">
                    <svg width="43" height="28" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7984 27.6L18.9984 0H12.3984L0.398438 27.6H11.7984ZM35.7984 27.6L42.9984 0H36.3984L24.3984 27.6H35.7984Z" fill="url(#paint0_linear_1_54)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_54" x1="28.8615" y1="-24.7969" x2="41.7939" y2="24.1471" gradientUnits="userSpaceOnUse">
                                <stop offset="0.00887753" stop-color="#DEF9FA" />
                                <stop offset="0.1723" stop-color="#BEF3F5" />
                                <stop offset="0.4204" stop-color="#9DEDF0" />
                                <stop offset="0.5512" stop-color="#7DE7EB" />
                                <stop offset="0.7154" stop-color="#5CE1E6" />
                                <stop offset="1" stop-color="#33BBCF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <p className='praph'>Money makes your life easier. If you're lucky to have it, you're lucky.</p>
                <div className="author">
                    <div className="img">
                        <img src={people_2} alt="" />
                    </div>
                    <div className="text">
                        <h4>Steve Mark</h4>
                        <p>Founder & Leader</p>
                    </div>
                </div>
            </div>
            <div className="testi">
                <div className="ico">
                    <svg width="43" height="28" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7984 27.6L18.9984 0H12.3984L0.398438 27.6H11.7984ZM35.7984 27.6L42.9984 0H36.3984L24.3984 27.6H35.7984Z" fill="url(#paint0_linear_1_54)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_54" x1="28.8615" y1="-24.7969" x2="41.7939" y2="24.1471" gradientUnits="userSpaceOnUse">
                                <stop offset="0.00887753" stop-color="#DEF9FA" />
                                <stop offset="0.1723" stop-color="#BEF3F5" />
                                <stop offset="0.4204" stop-color="#9DEDF0" />
                                <stop offset="0.5512" stop-color="#7DE7EB" />
                                <stop offset="0.7154" stop-color="#5CE1E6" />
                                <stop offset="1" stop-color="#33BBCF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <p className='praph'>It is usually people in the money business, finance, and international trade that are really rich.</p>
                <div className="author">
                    <div className="img">
                        <img src={people_3} alt="" />
                    </div>
                    <div className="text">
                        <h4>Kenn Gallagher</h4>
                        <p>Founder & Leader</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='btm flex items-center justify-between w-[85%]'>
            <img src={airbnb} alt="" />
            <img src={binance} alt="" />
            <img src={coinbase} alt="" />
            <img src={dropbox} alt="" />
        </div>
    </section>
)

export default Testimonials