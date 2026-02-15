import React, { useEffect } from 'react';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import type { Station } from '@/hooks/type';
import type { MapProps } from './types';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const FlyToStation = ({ station }: { station: Station | null }) => {
  const map = useMap();
  useEffect(() => {
    if (station) {
      map.flyTo([station.lat, station.lng], 13, { duration: 1.5 });
    }
  }, [station, map]);
  return null;
};

const Map: React.FC<MapProps> = ({ stations, selectedStation }) => {
  return (
    <MapContainer center={[51.1657, 10.4515]} zoom={6} className="h-150 w-full rounded-2xl">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stations.map((station) => (
        <Marker
          key={station.id}
          position={[station.lat, station.lng]}
        >
          <Popup>
            <b>{station.name}</b>
            <br />
            {station.city}
          </Popup>
        </Marker>
      ))}
      <FlyToStation station={selectedStation} />
    </MapContainer>
  );
};

export default Map;
