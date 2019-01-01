import React from 'react';

const PasswordInfo = ( props ) => {
    return (
        <div>
            <p>username is {props.username} password is {props.password}</p>
        </div>
    )
};

export default PasswordInfo;