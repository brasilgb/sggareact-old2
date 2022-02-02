import React, { Fragment, useRef, useState } from 'react';
import useOnClickOutside from '../../ClickOutside';

const DropDown = () => {
    const [showOptions, setShowOptions] = useState(false);
    const handleClick = () => {
        setShowOptions(!showOptions);
    };
    const ref = useRef();
    useOnClickOutside(ref, () => setShowOptions(false));

    return (
        <Fragment>
            <div className='relative'>
                <button
                    onClick={handleClick}
                    type="button"
                    className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded="false"
                    type="button"
                    data-dropdown-toggle="dropdown"
                >
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src="/images/profile.jpg" alt="user photo" />
                </button>
                {showOptions &&
                    <div ref={ref} className="z-50 my-4 -right-12 md:-right-16 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute" id="dropdown">
                        <div className="py-3 px-4">
                            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                        </div>
                        <ul className="py-1" aria-labelledby="dropdown">
                            <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>
                }
            </div>


        </Fragment>
    );
};

export default DropDown;
