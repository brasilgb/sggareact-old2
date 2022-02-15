import React, { Fragment } from 'react';

export const AForm = ({ children, action }) => {

    return (
        <form
            action={action}
            method="POST"
        >
            {children}
        </form>
    );

};
