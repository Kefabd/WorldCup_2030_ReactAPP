import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from '@react-google-maps/api';
import { FaLocationArrow } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Header from "../header/header";
import { useDarkMode } from "../header/useTheme";

export default function CarteGeo() {


    const [currentPosition, setCurrentPosition] = useState(null);
    const [map, setMap] = useState(null)
    const [direction, setDirection] = useState(null);
    const [duration, setDuration] = useState({ driving: null, walking: null });
    const [distance, setDistance] = useState(null)
    const { latitude, longitude } = useParams();
    const [mapType, setMapType] = useState(null);
    const { darkMode, toggleDarkMode } = useDarkMode();


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_API_KEY
    })

    useEffect(() => {
        const success = (position) => {
            console.log(position);
            setCurrentPosition(position);
        }
        const error = () => {
            alert("Knowing your location not allowed")
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("error")
        }


    }, [])


    useEffect(() => {
        const fetchData = async () => {
            try {

                if (currentPosition && latitude && longitude) { // Check if currentPosition is not null

                    const directionsService = new window.google.maps.DirectionsService();
                    const originLatLng = new window.google.maps.LatLng(
                        currentPosition.coords.latitude,
                        currentPosition.coords.longitude
                    );
                    const destinationLatLng = new window.google.maps.LatLng(
                        latitude,
                        longitude
                    );

                    const result1 = await directionsService.route({
                        origin: originLatLng,
                        destination: destinationLatLng,
                        travelMode: window.google.maps.TravelMode.DRIVING,
                    });

                    const result2 = await directionsService.route({
                        origin: originLatLng,
                        destination: destinationLatLng,
                        travelMode: window.google.maps.TravelMode.WALKING,
                    });

                    setDirection(result1);
                    setDistance(result1.routes[0].legs[0].distance.text);
                    setDuration({ driving: result1.routes[0].legs[0].duration.text, walking: result2.routes[0].legs[0].duration.text });
                }
            } catch (error) {
                console.error('Error fetching directions:', error);
            }
        };

        fetchData();
    }, [map, currentPosition]);



    useEffect(() => {
        const isDarkMode = darkMode;
        setMapType(isDarkMode ? "hybrid" : "roadmap");
        console.log('mapType changed:', isDarkMode ? "hybrid" : "roadmap");
    }, [darkMode]);


    const containerStyle = {
        width: '100vw',
        height: '100vh',
        margin: 'auto',

    };


    return (
        <>
            {isLoaded && currentPosition ? (
                <>
                    <Header />


                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={{
                            lat: currentPosition.coords.latitude,
                            lng: currentPosition.coords.longitude
                        }}
                        zoom={8}
                        style={{ zIndex: 0 }}
                        options={{
                            gestureHandling: 'cooperative',
                            streetViewControl: false,
                            mapTypeId: `${mapType}`
                        }}
                        onLoad={(map) => { setMap(map) }}
                    // onUnmount={onUnmount}
                    >

                        {direction && (
                            <DirectionsRenderer directions={direction} />
                        )}
                        <div className="row text-center d-flex align-items-center head-carte p-2">
                            <div className={`duration col-sm-12 col-md-5 my-2 ${darkMode ? 'bg-dark text-light' : ''}`} data-bs-theme="dark">
                                <h5>Duration :</h5>
                                <div className="d-flex justify-content-center">
                                    <div className="mode mx-2 w-100">

                                        <p className="d-inline"><FaCar /></p>
                                        <p><i>{duration.driving}</i></p>
                                    </div>
                                    <div className="mode mx-2 w-100">
                                        <p style={{ marginBottom: 0 }} className="text-center d-inline"><FaWalking /></p>
                                        <p><i>{duration.walking}</i></p>
                                    </div>
                                </div>
                            </div>
                            <div className={`distance text-center col-sm-12 col-md-5 my-2 ${darkMode ? 'bg-dark text-light' : ''}`}>
                                <h5>Distance:  </h5>
                                <p><i>{distance}</i></p>
                                
                            </div>
                            <div className={`col-sm-12 col-md-1 arrow-icon ${darkMode ? 'bg-dark text-light' : ''}`} onClick={() => {
                                map.panTo({
                                    lat: currentPosition.coords.latitude,
                                    lng: currentPosition.coords.longitude,
                                    
                                });
                            }}>
                                <FaLocationArrow />
                            </div>
                        </div>
                    </GoogleMap>


                </>
            ) : <></>}
        </>
    )

}