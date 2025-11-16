import React from 'react';
import Banner from './Banner';
import Howitwrokds from './Howitwrokds';
import OuerService from './OuerService';

const Home = () => {
    return (
       <div>
         <div className='my-5'>
            <Banner></Banner>
        </div>
        <div>
            <Howitwrokds />
        </div>
        <div>
            <OuerService></OuerService>
        </div>
       </div>
    );
};

export default Home;