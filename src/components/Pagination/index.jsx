import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Pagination = () => {
    return (
        <Fragment>
            <div className="flex items-center justify-center">
                <Link to="#" className="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md cursor-not-allowed dark:bg-gray-900 dark:text-gray-600">
                    previous
                </Link>

                <Link to="#" className="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:flex dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    1
                </Link>

                <Link to="#" className="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:flex dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    2
                </Link>

                <Link to="#" className="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:flex dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    3
                </Link>

                <Link to="#" className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    Next
                </Link>
            </div>
        </Fragment>
    );
};
