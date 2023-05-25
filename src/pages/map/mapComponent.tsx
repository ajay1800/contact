import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { mapsResponse } from "../../models/mapsModal";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";

const MapComponent = ({ mapData }: MapComponentProps) => {
  // return map data
  return !!mapData ? (
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={6}
      scrollWheelZoom={false}
      className='w-full h-screen z-0'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {mapData.map((data) => (
        <Marker
          position={{
            lat: data.countryInfo.lat,
            lng: data.countryInfo.long,
          }}>
          <Popup>
            country : {data.country} <br /> Total Case : {data.cases} <br />{" "}
            Active Case : {data.active} <br /> Recovered Case : {data.recovered}{" "}
            <br /> Death Case : {data.deaths}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  ) : (
    <div></div>
  );
};

interface MapComponentProps {
  mapData: mapsResponse[];
}
export default MapComponent;
