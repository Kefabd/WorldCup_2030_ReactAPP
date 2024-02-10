import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import Header from "../components/header/header";
import worlCup from '../dependecies/images/worldcup.jpg'
import StadiumsPresent from "../components/Stadiums/stadiumsPresent";
import StadiumsMarkers from "../components/Stadiums/StadiumsMarkers";
import Footer from "../components/footer/Footer";

export default function Stadium() {
    const { country } = useParams();
    
    return (
        <>
            <Header />
            
            <img src={worlCup} style={{ width: '100%' }} />

            <StadiumsPresent pays={country}  />
            
            <StadiumsMarkers pays= {country}/>

            <Footer />

            

        </>

    )

}


