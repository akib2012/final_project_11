import React from 'react';

import logo from'../../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex items-end font-bold'>
            <img src={logo} alt="" />
            <h3 className='text-3xl -ml-2.5'>ZapShift</h3>
        </div>
    );
};

export default Logo;