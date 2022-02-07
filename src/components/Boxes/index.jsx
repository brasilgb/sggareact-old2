import { Fragment } from "react"

export const ABoxAll = ({ children }) => {

    return (
        <Fragment>
            <div className="container my-4 mx-auto bg-gray-100 border-2 border-white rounded shadow">
                {children}
            </div>
        </Fragment>
    );

}

export const ABoxHeader = ({ children }) => {

    return (
        <Fragment>
            <div className="flex items-center justify-between border-b-2 border-white p-2">
                {children}
            </div>
        </Fragment>
    );

}

export const ABoxHeaderTitle = ({ children}) => {
    
    return (
        <Fragment>
            <div className="flex items-center justify-center">
                {children}
            </div>
        </Fragment>
    );

}

export const ABoxBody = ({ children }) => {

    return (
        <Fragment>
            <div className="bg-white p-4">
                {children}
            </div>
        </Fragment>
    );

}

export const ABoxFooter = ({ children }) => {

    return (
        <Fragment>
            <div className="bg-gray-100 p-2">
                {children}
            </div>
        </Fragment>
    );

}
