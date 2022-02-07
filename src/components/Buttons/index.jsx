import React, { Fragment } from 'react';
import { IconContext } from 'react-icons';
import { IoAdd } from "react-icons/io5";
export const AButtomAdd = ({url}) => {
    return (
        <Fragment>
            
            <div className='flex-grow'>
                <button 
                onClick={url}
                className='flex items-center justify-center bg-blue-600 border-2 border-white py-2 px-4 rounded-md shadow-md hover:bg-blue-500 text-base text-white hover:text-gray-100'
                >
                    <IconContext.Provider value={{ className: "text-lg" }}>
                        <div>
                            <IoAdd />
                        </div>
                    </IconContext.Provider>
                    <span className='ml-1 text-md'>Adicionar</span>
                </button>
            </div>

        </Fragment>
    );
};
