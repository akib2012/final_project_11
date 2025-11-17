import React from 'react';
import Logo from '../Componnets/Logo/Logo';
import { Outlet } from 'react-router';
import authimg from '../assets/authImage.png';

const AuthLayout = () => {
    return (
        <div className='max-w-10/12 mx-auto'>
            <Logo></Logo>

            <div className='flex items-center justify-center'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                        <img src={authimg} alt="" />
                </div>
            </div>

        </div>
        
    );
};

export default AuthLayout;