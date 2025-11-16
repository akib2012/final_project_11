import React from "react";

import icon from "../../assets/service.png";

const OuerService = () => {
  const services = [
    {
      image: icon,
      title: "Express & Standard Delivery",
      paragraph:
        "We deliver parcels within 24–72 hours in Dhaka, Chattogram, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      image: icon,
      title: "Nationwide Delivery",
      paragraph:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      image: icon,
      title: "Fulfillment Solution",
      paragraph:
        "We offer customized service with inventory management support, online order processing, packaging, and after-sales support.",
    },
    {
      image: icon,
      title: "Cash on Home Delivery",
      paragraph:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      image: icon,
      title: "Corporate Service / Contract in Logistics",
      paragraph:
        "Customized corporate services including warehouse and inventory management support.",
    },
    {
      image: icon,
      title: "Parcel Return",
      paragraph:
        "Through our reverse logistics facility, we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <div className="bg-secondary p-11 my-12 rounded-2xl">
      <div className="text-white text-center max-w-[500px] mx-auto">
        <h3 className="text-3xl font-bold my-5">Our Services</h3>
        <p className="text-[12px]">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-6  gap-7 mt-7">
        {services.map((s) => (
          <div className="border-2 border-amber-300 bg-white p-6 rounded-2xl">
            <div className="text-center">
              <div className="flex  justify-center items-center ">
                <img src={s.image} alt="" />
              </div>

              <h3 className="text-lg font-bold py-5">{s.title}</h3>
              <p className="text-sm ">{s.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OuerService;
