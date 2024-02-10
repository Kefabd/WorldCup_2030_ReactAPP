import React, { useContext, useEffect, useState, useRef } from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import iconMap from '../../dependecies/images/iconMapLight.png';
import iconMapRed from '../../dependecies/images/iconMapDark.png'
import DataStadiums from '../../dependecies/api/stadium.json'
import { useDarkMode } from "../header/useTheme"
import separatorDark from '../../dependecies/images/separatorDark.png'
import separatorLight from '../../dependecies/images/separatorLight.png'







export default function StadiumsMarkers({ pays }) {
    const [map, setMap] = useState(null);

    const [mapType, setMapType] = useState(null);
    const [iconMark, setIconMark ] = useState(localStorage.getItem('darkMode') === "true" ? iconMapRed : iconMap);

    const { darkMode, toggleDarkMode } = useDarkMode();
    

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_API_KEY
    })
    

    const findMinMaxStadiums = (stadiums) => {
        let largestStadium = null;
        let smallestStadium = null;
        let numberOfStade = stadiums.length;
        let totalLatitude = 0;
        let totalLongitude = 0;


        stadiums.forEach((stadium) => {

            if (!largestStadium || stadium.nbrplaces > largestStadium.nbrplaces) {
                largestStadium = stadium;
            }

            if (!smallestStadium || stadium.nbrplaces < smallestStadium.nbrplaces) {
                smallestStadium = stadium;
            }
            totalLatitude += stadium.coord.latitude;
            totalLongitude += stadium.coord.longitude;
        });
        const averageLatitude = totalLatitude / numberOfStade;
        const averageLongitude = totalLongitude / numberOfStade;
        

        return { largestStadium, smallestStadium, numberOfStade, averageLatitude, averageLongitude };
    };

    const { largestStadium, smallestStadium, numberOfStade, averageLatitude, averageLongitude } = findMinMaxStadiums(
        DataStadiums[pays]
    );

   
    useEffect(() => {
        const isDarkMode = darkMode;
        setMapType(isDarkMode ? "hybrid" : "roadmap");
        setIconMark(isDarkMode ? iconMapRed : iconMap);
         
        console.log('mapType changed:', isDarkMode ? "hybrid" : "roadmap");
    }, [darkMode]);
  

    const containerStyle = {
        width: '100%',
        height: '600px',
        
        marginTop: '4%',
        border: '3px solid black',
        borderRadius: '20px', 
       
    };
  

    return (
        <>
            <div className="row mx-auto my-5 stade-stats d-flex align-items-center" >
                <div className="col-sm-12 col-md-6 mt-5" >
                    <h1 className="text-center">WORLD CUP 2030 - in numbers</h1>
                    <div className="separator" style={{ backgroundImage: `url(${darkMode ? separatorDark : separatorLight})`}}> </div>
                    <div className="container mt-5">

                        <p><h3>Largest Stadium: </h3>{largestStadium?.name} (<i>{largestStadium?.nbrplaces} places</i>)</p>

                        <p> <h3> Smallest Stadium: </h3>{smallestStadium?.name} (<i>{smallestStadium?.nbrplaces} places</i>)</p>
                        <p><h3>Number of Stadiums: </h3> <h4>{numberOfStade}</h4></p>

                    </div>
                </div>
                <div className="col-sm-12 col-md-6" >
                    {isLoaded  ?
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={{
                                lat: averageLatitude,
                                lng: averageLongitude
                            }}
                            
                            zoom={6}
                            
                            options={{
                                gestureHandling: 'cooperative',
                                streetViewControl: false,
                                mapTypeControl: false,
                                mapTypeId: `${mapType}`,
                                fullscreenControl: false
                            }}
                            onLoad={(map) => {setMap(map) }}
                        >
                            {DataStadiums[pays].map((stadium, index) => {
                                return (
                                    <Marker position={{
                                        lat: stadium.coord.latitude,
                                        lng: stadium.coord.longitude
                                    }}
                                        icon={{ url: iconMark, scaledSize: { width: 50, height: 35 }, }}
                                        title={`${stadium.name}`}
                                        key={index}
                                        

                                    />
                                )

                            })}


                        </GoogleMap > 
                         : <></>} 
                         
                </div>

            </div>

        </>

    )

}