import React, { useContext } from 'react';
import Authcontext from '../AuthProvide/Authcontext';

const useAuth = () => {

    const Authinfo = useContext(Authcontext); 
    return Authinfo;
};

export default useAuth;