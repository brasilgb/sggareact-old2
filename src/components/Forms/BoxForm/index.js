import React, { Fragment } from 'react';
import { AButtomSave } from '../../Buttons';

export const ABoxForm = ({ children, infoTitle, infoText }) => {
    return (
        <Fragment>
            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">

                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">{infoTitle}</h3>
                            <p className="mt-1 text-sm text-gray-600">{infoText}</p>
                        </div>
                    </div>

                    <div className="mt-5 md:mt-0 md:col-span-2">

                        {children}

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export const ABoxFormBody = ({ children }) => {
    return (
        <Fragment>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">

                        {children}

                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 border-t border-gray-100">
                    <AButtomSave />
                </div>
            </div>
        </Fragment>
        );
}
