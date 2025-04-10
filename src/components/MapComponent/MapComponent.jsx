import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import './MapComponent.scss'

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export const MapComponent = ({innerRef}) => {
  return (
    <div ref={innerRef} className="sectionMapComponent">
      <div className="mapComponent">
        <h1 className="mapTitle">Район на карті</h1>
        <MapContainer center={[50.419161, 30.618579]} zoom={13} scrollWheelZoom={false}
                      className="map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          />
          <Marker position={[50.419161, 30.618579]} icon={customIcon}>
            <Popup>
              Київ, Україна <br/> Ми тут!
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};
