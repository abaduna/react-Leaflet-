
import {useEffect, useState} from "react"

import {Link, useLocation} from "react-router-dom"


const Home = () => {
    const [position,setPosition] =useState({
        longitud:0,
        latitud:0

    })



    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
        function (position){
            setPosition({
                longitud:position.coords.longitude,
                latitud:position.coords.latitude

            })
        },
        function (error) {
            console.error(error);
        },
        {
            enableHighAccuracy:true//para activar el GPS
        })
    })
  return (
    <>  
        <h2>GeoLocation</h2>
        <p>Longitud:{position.longitud}</p>
        <p>Latitud:{position.latitud}</p>
        <Link to={{
            pathname:"/map",
            position
        }}>See my location</Link>

    </>
  )
}

export default Home