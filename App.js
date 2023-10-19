// src/App.js
import React from 'react';
import './App.css';
import SettingsPage from './components/SettingsPage';
import { Route , Routes} from 'react-router-dom';
import AboutPhone from './components/Settings/About/AboutPhone';
import Device from './components/Settings/About/Device';
import Storage from './components/Settings/About/Storage';
import AirplaneMode from './components/Settings/Airplane/AirplaneMode';
import Connections from './components/Settings/Connection/Connections';
import DisplayBrightness from './components/Settings/Display/DisplayBrightness';
import SoundVibration from './components/Settings/Sound/SoundVibration';
import UrlDisplay from './components/Settings/UrlDisplay/UrlDisplay';


function App() {
  return (
      <Routes>
        <Route path = '/' Component={SettingsPage}/>
        <Route path = '/about' Component={AboutPhone}/>
        <Route path = '/Device' Component={Device}/>
        <Route path = '/Storage' Component={Storage}/>
        <Route path = '/airplane' Component={AirplaneMode}/>
        <Route path = '/connections' Component={Connections}/>
        <Route path = '/display' Component={DisplayBrightness}/>
        <Route path = '/sound' Component={SoundVibration}/>
        <Route path = '/UrlDisplay' Component={UrlDisplay}/>
      </Routes>
  );
}

export default App;

