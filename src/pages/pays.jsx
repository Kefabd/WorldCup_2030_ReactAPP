// Pays.jsx
import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import VillesListe from "../components/explore/VillesListe";
import ArtSection from "../components/explore/ArtSection";
import Header from "../components/header/header";
import Video from "../components/explore/Video";
import ProcessComponent from "../components/explore/ProcessComponent";
import Footer from '../components/footer/Footer';
import TextLinkSection from "../components/explore/TextLinkSection";
function Pays() {
  const { id } = useParams();
  


  return (
    <>
      <Header></Header>
      <Video countryId={id}></Video>
      <VillesListe countryId={id}></VillesListe>
      <ProcessComponent countryId={id} />
      <ArtSection countryId={id} showMonumentsPage={false}></ArtSection>
      <TextLinkSection countryId={id} />
      <Footer></Footer>
    </>
  );
}

export default Pays;
