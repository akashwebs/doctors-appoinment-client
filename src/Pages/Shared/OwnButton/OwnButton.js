import React from 'react';

const OwnButton = ({text}) => {
    return (
        <div>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">{text}</button>
        </div>
    );
};

export default OwnButton;