import React from 'react';

import logo from'../../assets/logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
       <Link to='/'> <div className='flex items-end font-bold'>
            <img src={logo} alt="" />
            <h3 className='text-3xl -ml-2.5'>ZapShift</h3>
        </div></Link>
    );
};

export default Logo;