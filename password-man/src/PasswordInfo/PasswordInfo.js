import React from 'react';

const PasswordInfo = ( props ) => {
    return (
        <div>
            <p>Info for {props.provider}. username is {props.username} password is {props.password}</p>
        </div>
    )
};

export default PasswordInfo;