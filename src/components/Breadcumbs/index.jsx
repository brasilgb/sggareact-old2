import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons';
import { IoHomeSharp } from 'react-icons/io5';

export const ABreadcumb = ({ links }) => {
    return (
        <Fragment>

            <div className="flex items-center py-2 overflow-y-auto whitespace-nowrap">
                <Link to="/" className="flex items-center text-gray-600 dark:text-gray-200">
                    <IconContext.Provider value={{ className: "text-lg font-medium" }}>
                        <div>
                            <IoHomeSharp />
                        </div>
                    </IconContext.Provider>
                </Link>
                {links.map((lk, i) => (
                    <div key={i}>
                        <span className="mx-2 text-gray-500 dark:text-gray-300">
                            /
                        </span>

                        <Link to={lk.linked ? lk.url : "#"} className={"text-gray-600 dark:text-gray-200" + (lk.linked ? " hover:underline" : " hover:no-underline cursor-default text-gray-500")}>
                            {lk.label}
                        </Link>
                    </div>

                ))}


            </div>
        </Fragment>
    );
};
