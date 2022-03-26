import React, { Fragment, useRef, useState } from 'react';
import useOnClickOutside from '../ClickOutside';
import MenuProfile from '../MenuProfile';
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
            <nav class="header bg-white shadow py-4 px-4">
                <div class="header-content flex items-center flex-row">

                <div className="flex items-center md:order-2">
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

                    <div class="flex ml-auto">
                        <a href class="flex flex-row items-center">
                            <img
                                src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png"
                                alt
                                class="h-10 w-10 bg-gray-200 border rounded-full"
                            />
                            <span class="flex flex-col ml-2">
                                <span class="truncate w-20 font-semibold tracking-wide leading-none">John Doe</span>
                                <span class="truncate w-20 text-gray-500 text-xs leading-none mt-1">Manager</span>
                            </span>
                        </a>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default NavBar;
