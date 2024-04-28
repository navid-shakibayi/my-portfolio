import { useState } from "react"
import HamburgerMenu from "../Svg/HamburgerMenu"
import Logo from "./Logo"
import MobileMenu from "./MobileMenu"
import Navbar from "./Navbar"

const Header = ({

}) => {

    const [open, setOpen] = useState(false)

    const clickHandler = () => {
        setOpen(!open)
    }

    return <>
        <section className="flex justify-between items-center max-w-7xl mx-auto my-8 px-6">

            <Logo />

            <div>
                <div className="hidden lg:block">
                    <Navbar />
                </div>

                <div
                onClick={clickHandler}
                className="lg:hidden"
                >
                    <HamburgerMenu />
                </div>

                <div className={open ? "block" : "hidden"}>
                    <MobileMenu />
                </div>
            </div>
        </section>
    </>
}

export default Header