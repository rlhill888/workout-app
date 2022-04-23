import React from "react";
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'


function Map(){

    return(
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat: 39.952583, lng: 75.165222}}
        />

    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default Map