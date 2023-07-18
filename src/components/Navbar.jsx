import logo from "../assets/logo.svg"
import menu from '../assets/menu.svg'

import { useState } from "react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="container py-8 flex justify-between items-center relative">
        <a className="logo" href="#">
            <img className="w-[119px] h-[32px]" src={logo} alt="" />
        </a>
        <div className="toggle cursor-pointer hidden" onClick={() => setIsOpen((prev) => !prev)}>
            <img src={menu} alt="" />
        </div>
        <ul className={`${isOpen ? 'openNav' : 'flex'}`}>
            <li><a className="active text-white" href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Solution</a></li>
        </ul>
    </nav>
    )
}

export default Navbar