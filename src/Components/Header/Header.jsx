import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from './Logo';

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0 lg:p-3 " style={{ backgroundColor: '#c3c3f0' }}>
            <nav className="border-gray-200 px-3 lg:px-5 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <Logo/>
                    </Link>
                    
                    <div
                        className="md:justify-between items-center w-full md:flex md:w-auto md:order-2" >
                        <ul className="flex flex-col  mt-4 font-medium md:gap-[50px] md:flex-row md:space-x-8 md:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-white/70"}  lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-white/55"}   lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-white/55"}  lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </header>
    );
}