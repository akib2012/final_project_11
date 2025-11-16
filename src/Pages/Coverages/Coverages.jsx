import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverages = () => {
  const position = [23.685, 90.3563];
  const servicecenter = useLoaderData();
  console.log(servicecenter);

  return (
    <div>
      <div>
        <h4 className="text-3xl font-bold">We Are Available is 64 Districts</h4>
      </div>
      <div></div>
      {/* here is the map continer here ! */}

      <div className="border w-full h-[700px]">
        <MapContainer
          className="w-full h-[700px]"
          center={position}
          zoom={8}
          scrollWheelZoom={false}
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
