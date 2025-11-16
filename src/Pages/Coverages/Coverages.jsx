import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverages = () => {
  const position = [23.685, 90.3563];
  const servicecenter = useLoaderData();
  console.log(servicecenter);
  const mapref = useRef(null);

  

  const hnadlesearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const dist = servicecenter.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
    if(dist){
        const cord = [dist.latitude, dist.longitude];
        mapref.current.flyTo(cord, 14);
    }
  }

  return (
    <div>
      <div>
        <h4 className="text-3xl font-bold">We Are Available is 64 Districts</h4>
      </div>
      <div>
        {/* search opcions here  */}
        <form action="" onSubmit={hnadlesearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="location" type="search" className="grow" placeholder="Search" />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
        </form>
      </div>
      {/* here is the map continer here ! */}

      <div className="border w-full h-[700px]">
        <MapContainer
          className="w-full h-[700px]"
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          ref={mapref}
        >
          <TileLayer
            // className="w-full h-[800px]"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {servicecenter.map((center) => (
            <Marker position={[center.latitude, center.longitude]}>
              <Popup>
                {center.district} <br /> {center.status}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverages;
