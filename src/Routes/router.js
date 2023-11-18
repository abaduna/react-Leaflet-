import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";
  import Home from "../pagues/Home";

  import MapView from "../componets/Mapwiws/MapView";

  const RoutesPrincial=()=>{
    return(
        <Router>
            <Routes>
                
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/map" element={<MapView></MapView>}></Route>
                
                <Route
                path="*"
                element={<Navigate to="/Home" replace />} />
            </Routes>
        </Router>
    )
  }

export default RoutesPrincial