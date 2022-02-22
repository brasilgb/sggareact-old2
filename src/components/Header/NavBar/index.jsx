import React, { Fragment, useRef, useState } from 'react';
import useOnClickOutside from '../../ClickOutside';
import MenuProfile from '../MenuProfile';
import MenuDropDown from '../MenuDropDown';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { IoHomeSharp, IoMenu } from 'react-icons/io5';
const NavBar = () => {

    const openMenu = () => {
        setShowMenu(!showMenu);
    };

    const ref = useRef();
    const [showMenu, setShowMenu] = useState(false);
    useOnClickOutside(ref, () => setShowMenu(false));

    return (
        <Fragment>
            <nav className="px-2 sm:px-4 py-2.5">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="#" className="flex">
                        <IconContext.Provider value={{ className: "text-lg font-medium" }}>
                            <div>
                                <IoHomeSharp />
                            </div>
                        </IconContext.Provider>
                        <span className="self-center text-lg font-semibold whitespace-nowrap">FlowBite</span>
                    </Link>
                    <div className="flex items-center md:order-2">
                        <MenuProfile />
                        <button
                            onClick={openMenu}
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <IconContext.Provider value={{ className: "text-lg font-medium" }}>
                                <div>
                                    <IoMenu />
                                </div>
                            </IconContext.Provider>
                        </button>
                    </div>
                    <div ref={ref} className={`${showMenu ? 'none' : 'hidden'} justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2`}>
                        <MenuDropDown />
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default NavBar;
