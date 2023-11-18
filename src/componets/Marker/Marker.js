
import { Marker as LeafletMarker } from 'react-leaflet';
import IconLocation from '../Marker/IconLocation';



const CustomMarker=(props) =>{
    const {places} = props
    const markers = places.map((place, i) => (
        <LeafletMarker key={i} position={place.geometry} icon={IconLocation} />
    ));
  return markers
  
}

export default CustomMarker