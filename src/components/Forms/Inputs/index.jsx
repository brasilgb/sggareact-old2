import React, { Fragment } from 'react';
import { IconContext } from 'react-icons';
import { IoSearch, IoSearchOutline } from 'react-icons/io5';

export const AInput = ({ id, type, ref, label, place }) => {
    return (
        <Fragment>
            <div>
                <label class="text-gray-700" for="username">{label}</label>
                <input
                    ref={ref}
                    id={id}
                    type={type}
                    placeholder={place}
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
            </div>
        </Fragment>
    );
};

export const AInputSearch = ({ id, type, ref, place }) => {
    return (
        <Fragment>
            <div class="relative flex-grow">

                <input
                    ref={ref}
                    id={id}
                    type={type}
                    placeholder={place}
                    class="w-full py-2 pl-4 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                />

                <span class="absolute inset-y-0 right-0 flex items-center pr-3">
                    <IconContext.Provider value={{ className: "text-xl text-gray-500 font-extrabold" }}>
                        <div>
                            <IoSearchOutline />
                        </div>
                    </IconContext.Provider>
                </span>

            </div>
        </Fragment>
    );
};
