

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer,useMap  } from "react-leaflet"
import './Mapviews.css';
import IconLocation from '../Marker/IconLocation';
import CustomMarker from '../Marker/Marker';
// import {places} from "../../assets/data.json"
import data from "../../assets/data.json"
import { useState,useEffect } from 'react';

import { useLocation } from "react-router-dom";

function ChangeView({ center, zoom }) { const map = useMap(); map.setView(center, zoom); return null; }

function MapView() {
    const location = useLocation();
    // const places = location.state; // Access the state passed from the Home component
    const places = data.places
    const [centerMap,setCenterMap] = useState({
        currentLocation: {lat:"52.52437",lng:"13.41053"},
        zoom:13
    })

    useEffect(() => {
      if (location.state.longitud && location.state.latitud) {
        setCenterMap((centerMap) => ({
         
          ...centerMap,
          currentLocation: {
            lat: location.state.latitud,
            lng: location.state.longitud,
          },
        }));
      }
      console.log(`if`);
      console.log(centerMap);
    }, [location]);


    
    console.log( `lat: ${location.state.latitud}`);
    console.log( `lng: ${location.state.longitud}`);
    

    return ( 
    <MapContainer className="map-container" center={centerMap.currentLocation} zoom={centerMap.zoom}> 
      <TileLayer attribution="© <a href=“5”>OpenStreetMap</a> contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/> 
      <ChangeView center={centerMap.currentLocation} zoom={centerMap.zoom} /> 
      <CustomMarker places={places} />
    </MapContainer> ) }

export default MapView