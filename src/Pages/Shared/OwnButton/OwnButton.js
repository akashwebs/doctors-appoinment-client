import React from 'react';

const OwnButton = ({children}) => {
    return (
        <div>
            <button className="uppercase btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">{children}</button>
        </div>
    );
};

export default OwnButton;