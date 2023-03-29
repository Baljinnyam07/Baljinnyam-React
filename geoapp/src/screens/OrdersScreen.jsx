import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const OrdersScreen = () => {
  const [items, setItems] = useState([]);
  // const []

  useEffect(() => {
    axios.get("http://localhost:8081/orders").then((res) => {
      setItems(res.data);
    });
  });

  // const newOrder = () => {
  //   axios.post("http://localhost:8081/orders", {
  //     location: { type: "Point", coordinates: [longitude, latitude] },
  //   });
  // };
  return (
    <div style={{ width: 500 }}>
      <MapContainer
        center={[47.9148155, 106.9108148]}
        zoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map((item) => {
          const { coordinates } = item.location;
          return (
            <Marker key={item._id} position={[coordinates[1], coordinates[0]]}>
              <Popup>{item.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default OrdersScreen;
