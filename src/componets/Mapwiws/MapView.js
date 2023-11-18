
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import './Mapviews.css';
import IconLocation from '../Marker/IconLocation';
import CustomMarker from '../Marker/Marker';
// import {places} from "../../assets/data.json"
import data from "../../assets/data.json"
import { useState } from 'react';
function MapView() {
    const places = data.places
    const [state,setState] = useState({
        currentLocation: {lat:"",lng:""}
    })
  return (
    <MapContainer className="map-container" center={{lat:"52.52437",lng:"13.41053"}} zoom={15}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <CustomMarker places={places} />          
    </MapContainer>

  )
}

export default MapView