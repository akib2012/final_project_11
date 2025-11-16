import React from 'react';
import bookingicon from '../../assets/bookingIcon.png'

const Howitwrokds = () => {
    const works = [
  {
    "image": bookingicon,
    "title": "Booking Pick & Drop",
    "paragraph": "From personal packages to business shipments — we deliver on time, every time."
  },
  {
    "image": bookingicon,
    "title": "Cash On Delivery",
    "paragraph": "From personal packages to business shipments — we deliver on time, every time."
  },
  {
    "image": bookingicon,
    "title": "Delivery Hub",
    "paragraph": "From personal packages to business shipments — we deliver on time, every time."
  },
  {
    "image": bookingicon,
    "title": "Booking SME & Corporate",
    "paragraph": "From personal packages to business shipments — we deliver on time, every time."
  }
]

    return (
        <div >
            <h3 className='text-2xl font-bold ml-9 mt-9 mb-5 text-secondary'>How it Works</h3>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-9' >
                {
                    works.map(w => <div className='bg-gray-200 p-5 rounded-3xl'>
                       <img src={w.image} alt="" />
                       <h1 className='py-4 text-secondary font-bold text-md'>{w.title}</h1>
                       <p className='text-sm'>{w.paragraph}</p>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default Howitwrokds;