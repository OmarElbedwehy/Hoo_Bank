import circle from '../assets/circle.svg'
import status from '../assets/status.svg'
import paypal from '../assets/paypal.svg'
import apple from '../assets/apple.svg'
import visa from '../assets/visa.svg'
import shopify from '../assets/shopify.svg'

const Status = () => (
    <section className='status w-[86%] '>
        <div className="left">
            <h1 className='text-4xl w-[390px] leading-snug font-semibold'>Find a better card deal in few easy steps.</h1>
            <p className='praph text-sm text-white/70 w-[350px] mt-7 mb-10'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
            <button className='linear-btn rounded-lg px-5 py-3 text-[#00040E] font-medium '>Get Started</button>
        </div>
        <div className="right relative">
            <img src={circle} alt="" />
            <div className='card w-[200px] text-center !rounded-2xl absolute top-[44%] -translate-y-1/2 left-[-70px]'>
                <div className="ico w-[34px] h-[34px] mx-auto flex justify-center items-center mb-5 bg-[#00030C] rounded-lg">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.4277 3.88262C8.8477 3.88262 9.1887 4.21701 9.1887 4.62984C9.1887 5.04169 8.8487 5.37608 8.4277 5.37608L6.7987 5.37706C5.4467 5.37902 4.3467 6.45866 4.3467 7.78541V9.64463C4.3467 10.0565 4.0047 10.3918 3.5847 10.3918C3.1647 10.3918 2.8237 10.0565 2.8237 9.64463V7.78541C2.8237 5.63594 4.6067 3.88556 6.7977 3.8836L8.4267 3.88262H8.4277ZM15.6006 3.88292H17.1936C19.3906 3.88292 21.1766 5.63427 21.1766 7.78865V9.64492C21.1766 10.0568 20.8366 10.3921 20.4156 10.3921C19.9956 10.3921 19.6546 10.0568 19.6546 9.64492V7.78865C19.6546 6.45797 18.5506 5.37539 17.1936 5.37539H15.6006C15.1806 5.37539 14.8396 5.04199 14.8396 4.63013C14.8396 4.2173 15.1806 3.88292 15.6006 3.88292ZM14.7625 7.62528H9.2385C7.9745 7.63803 6.9585 8.65099 6.9695 9.89145V11.1368C6.9725 11.2819 7.0915 11.4006 7.2395 11.4055H16.7595C16.9085 11.4016 17.0275 11.2829 17.0325 11.1368V9.89145C17.0335 9.2923 16.7975 8.71669 16.3715 8.28817C15.9485 7.86357 15.3675 7.62528 14.7625 7.62528ZM1.762 12.9239H22.239C22.659 12.9239 23 13.2582 23 13.6711C23 14.0829 22.659 14.4163 22.239 14.4163H21.177V17.9759C21.177 20.1313 19.39 21.8826 17.194 21.8826H15.601C15.18 21.8826 14.839 21.5482 14.839 21.1354C14.839 20.7236 15.18 20.3892 15.601 20.3892H17.194C18.551 20.3892 19.655 19.3076 19.655 17.9759V14.4163H17.032V15.4077C17.042 16.6482 16.027 17.6621 14.762 17.6739H9.238C7.974 17.6621 6.959 16.6482 6.969 15.4077V14.4163H4.346V17.9798C4.346 19.3066 5.447 20.3862 6.8 20.3882L8.428 20.3892C8.848 20.3892 9.189 20.7236 9.189 21.1354C9.188 21.5482 8.848 21.8826 8.427 21.8826L6.798 21.8816C4.607 21.8797 2.823 20.1293 2.823 17.9798V14.4163H1.762C1.342 14.4163 1 14.0829 1 13.6711C1 13.2582 1.342 12.9239 1.762 12.9239Z" fill="#00F6FF" />
                    </svg>
                </div>
                <h4 className='font-semibold mb-1'>Scan Credit Cards</h4>
                <p className='text-sm text-white/70'>Scan yourcredit card in 4 minutes.</p>
            </div>
            <div className="card w-[300px] !rounded-2xl absolute top-[40%] -translate-y-1/2 right-[-80px]">
                <div className='flex justify-between items-center mb-5'>
                    <h4 className='font-semibold text-lg'>Online Analysis</h4>
                    <p className='flex items-center gap-1 text-xs'>
                        1 Month<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_386)">
                                <path d="M4.08337 6.71595L7.00004 9.63262L9.91671 6.71595H4.08337Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_386">
                                    <rect width="14" height="14" fill="white" transform="translate(0 0.882622)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </p>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col'>
                        <span className='text-[#00D2AA]'>$ 2,334,67</span>
                        <span className='text-sm text-[#00D2AA]/70'>Income</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[#00D9F5]'>$ 5.31M</span>
                        <span className='text-sm text-[#00D9F5]/70'>Expenses</span>
                    </div>
                </div>
                <div className='w-full flex justify-center mt-5 mb-7'>
                    <img src={status} alt="" />
                </div>
                <div className='w-full flex justify-between items-center months'>
                    <span>Jan</span>
                    <span>Feb</span>
                    <span className='!text-[#14101D] bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] p-1 px-2 rounded-md'>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                </div>
            </div>
            <div className="card w-[260px] absolute left-1/2 -translate-x-1/2 bottom-[-60px]">
                <div className='flex justify-between items-center mb-5'>
                    <h4>Pay Method</h4>
                    <span>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_389)">
                                <path d="M7.00012 10.8826L12.0001 15.8826L17.0001 10.8826H7.00012Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_389">
                                    <rect width="24" height="24" fill="white" transform="translate(0 0.882629)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                </div>
                <div className='flex justify-between'>
                    <span>
                        <img src={paypal} alt="" />
                    </span>
                    <span>
                        <img src={apple} alt="" />
                    </span>
                    <span>
                        <img src={visa} alt="" />
                    </span>
                    <span>
                        <img src={shopify} alt="" />
                    </span>
                </div>
            </div>
        </div>
    </section>
)

export default Status