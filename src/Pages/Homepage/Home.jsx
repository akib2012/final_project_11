import React from 'react';
import Banner from './Banner';
import Howitwrokds from './Howitwrokds';
import OuerService from './OuerService';
import Brands from './Brands';
import Reviews from './Reviews';

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
        <div>
            <Brands></Brands>
        </div>
        <div>
            <Reviews></Reviews>
        </div>
       </div>
    );
};

export default Home;