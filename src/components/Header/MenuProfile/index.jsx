import React, { Fragment, useRef, useState } from 'react';
import useOnClickOutside from '../../ClickOutside';

const MenuProfile = () => {
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
                    className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
                    id="user-menu-button"
                    aria-expanded="false"
                    type="button"
                    data-dropdown-toggle="dropdown"
                >
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src="/images/profile.jpg" alt="user photo" />
                </button>
                {showOptions &&
                    <div ref={ref} className="z-50 my-4 -right-12 md:-right-16 text-base list-none bg-white rounded divide-y divide-gray-100 shadow" id="dropdown">
                        <div className="py-3 px-4">
                            <span className="block text-sm text-gray-900">Usuario</span>
                            <span className="block text-sm font-medium text-gray-500 truncate">name@email.com</span>
                        </div>
                        <ul className="py-1" aria-labelledby="dropdown">
                            <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Definições</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Sair</a>
                            </li>
                        </ul>
                    </div>
                }
            </div>


        </Fragment>
    );
};

export default MenuProfile;
