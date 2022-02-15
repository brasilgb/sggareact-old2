import React, { Fragment } from 'react';
import { IconContext } from 'react-icons';
import { IoSearchOutline } from 'react-icons/io5';

export const AInput = ({ id, type, ref, label, place, colspan }) => {
    return (
        <Fragment>
            <div className={`col-span-6 sm:col-span-${colspan}`}>
                <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
                <input
                    type={type}
                    id={id}
                    ref={ref}
                    name="first-name"
                    placeholder={place}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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

export const ASelect = ({id, ref, options, optiondef, label, colspan}) => {
    return (
        <Fragment>
            <div className={`col-span-6 sm:col-span-${colspan}`}>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
                <select
                    id={id}
                    ref={ref}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >

                    <option>{optiondef}</option>
                    {options.map((opt, index) => (
                        <option key={index} value={opt.uid}>{opt.value}</option>
                    ))}
                    
                </select>
            </div>
        </Fragment>
    );
}