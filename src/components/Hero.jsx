import robotImg from '../assets/robot.png'

const Hero = () => (
    <div className="hero container flex flex-col justify-between h-[calc(100vh-140px)]">
        <div className='hero-full-content flex flex-row items-center justify-between pt-24'>
            <div className='content relative'>
                <svg className='light z-[-1] absolute w-full h-full left-[-150px]' width="580" height="1026" viewBox="0 0 580 1026" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1_212)">
                        <ellipse cx="32.5" cy="414" rx="97.5" ry="162" fill="white" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1_212" x="-515" y="-198" width="1095" height="1224" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="225" result="effect1_foregroundBlur_1_212" />
                        </filter>
                    </defs>
                </svg>

                <div className="discount w-[350px] p-1 flex items-center rounded-md">
                    <svg className="mr-3.5" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M15.9988 29.331C14.9735 29.331 13.9495 28.9417 13.1668 28.1643L12.1935 27.191C11.8161 26.815 11.3108 26.607 10.7748 26.6057H9.40546C7.19212 26.6057 5.39079 24.8043 5.39079 22.591V21.2203C5.38946 20.6857 5.18146 20.1803 4.80412 19.8003L3.84679 18.8443C2.27879 17.2857 2.27212 14.7377 3.83212 13.1683L4.80546 12.1937C5.18146 11.8163 5.38946 11.311 5.39079 10.775V9.40699C5.39079 7.19232 7.19212 5.39099 9.40546 5.39099H10.7761C11.3108 5.39099 11.8148 5.18299 12.1948 4.80299L13.1535 3.84699C14.7121 2.27899 17.2588 2.27099 18.8295 3.83232L19.8028 4.80565C20.1815 5.18299 20.6855 5.39099 21.2201 5.39099H22.5908C24.8041 5.39099 26.6055 7.19232 26.6055 9.40699V10.7763C26.6068 11.311 26.8148 11.8163 27.1921 12.1963L28.1495 13.1537C28.9081 13.9083 29.3281 14.9137 29.3321 15.987C29.3348 17.0537 28.9241 18.0577 28.1761 18.8163C28.1628 18.8297 28.1508 18.8443 28.1375 18.8563L27.1908 19.803C26.8148 20.1803 26.6068 20.6857 26.6055 21.2217V22.591C26.6055 24.8043 24.8041 26.6057 22.5908 26.6057H21.2201C20.6855 26.607 20.1801 26.815 19.8015 27.1923L18.8428 28.1497C18.0615 28.9363 17.0295 29.331 15.9988 29.331" fill="#393939" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.3904 13.4012C13.1704 13.6212 12.8851 13.7399 12.5691 13.7399C12.2731 13.7399 11.9824 13.6186 11.7491 13.3999C11.5277 13.1799 11.4024 12.8786 11.4024 12.5732C11.4024 12.2826 11.5251 11.9839 11.7411 11.7532C11.8597 11.6332 12.0011 11.5426 12.1424 11.4946C12.5451 11.3106 13.0797 11.4186 13.3971 11.7519C13.5104 11.8652 13.5971 11.9892 13.6544 12.1186C13.7171 12.2572 13.7491 12.4146 13.7491 12.5732C13.7491 12.8906 13.6224 13.1852 13.3904 13.4012ZM20.254 11.7464C19.7993 11.2931 19.0593 11.2931 18.6047 11.7464L11.7513 18.5998C11.2967 19.0544 11.2967 19.7944 11.7513 20.2504C11.9727 20.4704 12.2647 20.5918 12.5767 20.5918C12.8887 20.5918 13.1807 20.4704 13.4007 20.2504L20.254 13.3971C20.7087 12.9411 20.7087 12.2024 20.254 11.7464ZM19.8744 18.3519C19.4424 18.1706 18.9304 18.2692 18.5891 18.6106C18.5184 18.6932 18.4184 18.8212 18.3504 18.9719C18.2784 19.1346 18.2691 19.3092 18.2691 19.4266C18.2691 19.5439 18.2784 19.7172 18.3504 19.8799C18.4171 20.0292 18.4971 20.1506 18.6024 20.2559C18.8437 20.4799 19.1237 20.5932 19.4357 20.5932C19.7317 20.5932 20.0224 20.4732 20.2611 20.2506C20.4731 20.0386 20.5891 19.7452 20.5891 19.4266C20.5891 19.1066 20.4731 18.8146 20.2597 18.6012C20.1424 18.4852 20.0011 18.3946 19.8744 18.3519Z" fill="#00F6FF" />
                    </svg>
                    <p className="text-white/60 text-sm"><span className="text-white">20%</span> DISCOUNT FOR <span className="text-white">1 MONTH</span> ACCOUNT</p>
                </div>
                <h1 className="text-6xl w-[550px] leading-tight mt-4 mb-11 font-semibold relative">
                    The Next <span className="radial-text">Generation</span> Payment Method
                    <span className="started absolute group right-[20px] top-0 flex items-center justify-center w-[100px] h-[100px]  rounded-full border-2 border-[#5CE1E6] cursor-pointer">
                        <span className="radial-text flex flex-wrap items-center text-sm w-[60%]">
                            Get
                            <span className="ico transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                <svg className="h-[25px] leading-0" width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.9898 21.2615C10.7559 20.9828 10.7697 20.5786 11.0079 20.3167L11.0784 20.2489L22.0903 11.0089C22.3943 10.7537 22.8477 10.7934 23.1029 11.0975C23.3368 11.3762 23.3229 11.7804 23.0848 12.0423L23.0143 12.1101L12.0024 21.3501C11.6983 21.6053 11.2449 21.5656 10.9898 21.2615Z" fill="white" />
                                    <path d="M14.3388 11.5797C13.9433 11.546 13.65 11.198 13.6837 10.8025C13.7144 10.4429 14.0048 10.1679 14.3545 10.1462L14.461 10.1475L22.6132 10.843C22.9739 10.8738 23.2493 11.1657 23.2697 11.5165L23.268 11.6233L22.538 19.7732C22.5026 20.1686 22.1534 20.4604 21.758 20.425C21.3986 20.3928 21.1247 20.1012 21.1045 19.7514L21.1062 19.645L21.7714 12.2139L14.3388 11.5797Z" fill="white" />
                                </svg>
                            </span>
                            Started
                        </span>
                    </span>
                </h1>
                <p className="praph text-sm w-[420px] leading-normal text-white/70">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                    We examine annual percentage rates, annual fees.</p>
            </div>
            <div className="hero-graphic absolute right-0 ">
                <svg className='absolute light top-[-250px] left-[-130px] z-[-1]' width="630" height="768" viewBox="0 0 767 768" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1_38)">
                        <path d="M124 73L298.468 644H502.608L702 73H124Z" fill="url(#paint0_linear_1_38)" />
                        <path d="M124 73L298.468 644H502.608L702 73H124Z" stroke="black" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1_38" x="0.324402" y="-50.5" width="825.38" height="818" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="61.5" result="effect1_foregroundBlur_1_38" />
                        </filter>
                        <linearGradient id="paint0_linear_1_38" x1="413" y1="73" x2="413" y2="644" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#BCA5FF" stopOpacity="0" />
                            <stop offset="1" stopColor="#214D76" />
                        </linearGradient>
                    </defs>
                </svg>
                <img src={robotImg} alt="" className='w-[500px] h-[500px]' />
            </div>
        </div>
        <div className='hero-info flex items-center justify-between xl:w-[70%] lg:w-[80%] mx-auto'>
            <div className="info">
                <div className='flex flex-col'>
                    <h3>3800+</h3>
                    <span className='linear-text'>User Active</span>
                </div>
            </div>
            <div className="info px-14">
                <div className='flex flex-col'>
                    <h3>230+</h3>
                    <span className='linear-text'>TRUSTED BY COMPANY</span>
                </div>
            </div>
            <div className="info">
                <div className='flex flex-col'>
                    <h3>$230M+</h3>
                    <span className='linear-text'>TRANSACTION</span>
                </div>
            </div>
        </div>
    </div>
)

export default Hero