
import {useEffect, useState} from "react"

import {Link} from "react-router-dom"


const Home = () => {
    const [stateposition,setStateposition] =useState({
    //const [stateposition,setPosition] =useState({
        longitud:0,
        latitud:0

    })



    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
        function (position){
            setStateposition({
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
    }, [])
    console.log(stateposition);
  return (
    <>  
        <h2>GeoLocation</h2>
        <p>Longitud:{stateposition.longitud}</p>
        <p>Latitud:{stateposition.latitud}</p>
        <Link to="/map" state={stateposition}>See my location</Link>

    </>
  )
}

export default Home