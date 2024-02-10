import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home.jsx';
import VillesListe from './components/explore/VillesListe.jsx';
import Pays from './pages/pays.jsx';
import Stadium from "./pages/Stadiums.jsx";
import CarteGeo from './components/Stadiums/carteGeo.jsx';
import Header from './components/header/header.js';


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/home' element={<Home />} />
      {/* <Route path='/explore/morocco/:id' element={<VillesListe />} /> */}
      <Route path='/stadium/:country' element={<Stadium />} />
      <Route path='/localisation/:latitude/:longitude'
        element={
          <>
            <Header />
            <CarteGeo />
          </>
        }
      />
      <Route path='/pays/:id' element={<Pays />} />
    </Routes >

  );
}

export default App;
