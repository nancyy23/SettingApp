import React from 'react';
import { useState } from 'react';

import './App.css';
import SettingsPage from './components/SettingsPage';
import { Route , Routes} from 'react-router-dom';

import AboutPhone from './components/Settings/About/AboutPhone';
import Device from './components/Settings/About/Device';
import Storage from './components/Settings/About/Storage';
import Award from './components/Settings/About/Award';
import Legal from './components/Settings/About/Legal';
import Status from './components/Settings/About/Uptodate';
import Version from './components/Settings/About/Version';

import AirplaneMode from './components/Settings/Airplane/AirplaneMode';

import Connections from './components/Settings/Connection/Connections';
import Dns from './components/Settings/Connection/Dns';
import Nfc from './components/Settings/Connection/Nfc';
import Screencast from './components/Settings/Connection/Screencast';
import Vpn from './components/Settings/Connection/Vpn';

import DisplayBrightness from './components/Settings/Display/DisplayBrightness';
import  Auto from './components/Settings/Display/Auto';
import  Autoscreen from './components/Settings/Display/Autoscreen';
import  Eye from './components/Settings/Display/Eye';
import  Video from './components/Settings/Display/Video';
import  Wallpapers from './components/Settings/Display/Wallpapers';

import SoundVibration from './components/Settings/Sound/SoundVibration';
import Advanced from './components/Settings/Sound/Advanced';
import Do from './components/Settings/Sound/Do';
import Dolby from './components/Settings/Sound/Dolby';
import Haptic from './components/Settings/Sound/Haptic';
import Live from './components/Settings/Sound/Live';
import Message from './components/Settings/Sound/Message';
import Notification from './components/Settings/Sound/Notification';
import Ringtone from './components/Settings/Sound/Ringtone';
import Vibration from './components/Settings/Sound/Vibration';
import Default from './components/Settings/Sound/Default';
import Volume from './components/Settings/Sound/Volume';

import UrlDisplay from './components/Settings/UrlDisplay/UrlDisplay';
import Uptodate from './components/Settings/About/Uptodate';





function App() {
  const [brightnessLevel, setBrightnessLevel] = useState(100);

  const brightnessStyle = {
    filter: `brightness(${brightnessLevel}%)`,
  };
  return (
    <div style={brightnessStyle}>
      <Routes>
        <Route path = '/' Component={SettingsPage}/>

        <Route path = '/about' Component={AboutPhone}/>
        <Route path = '/Device' Component={Device}/>
        <Route path = '/Storage' Component={Storage}/>
        <Route path = '/Award' Component={Award}/>
        <Route path = '/Legal' Component={Legal}/>
        <Route path = '/Uptodate' Component={Uptodate}/>
        <Route path = '/Version' Component={Version}/>

        <Route path = '/airplane' Component={AirplaneMode}/>

        <Route path = '/connections' Component={Connections}/>
        <Route path = '/Nfc' Component={Nfc}/>
        <Route path = '/Vpn' Component={Vpn}/>
        <Route path = '/Dns' Component={Dns}/>
        <Route path = '/Screencast' Component={Screencast}/>

        <Route path = '/display' Component={DisplayBrightness}/>
        <Route path = '/Auto' Component={Auto}/>
        <Route path = '/Autoscreen' Component={Autoscreen}/>
        <Route path = '/Eye' Component={Eye}/>
        <Route path = '/Video' Component={Video}/>
        <Route path = '/Wallpapers' Component={Wallpapers}/>

        <Route path = '/sound' Component={SoundVibration}/>
        <Route path = '/Advanced' Component={Advanced}/>
        <Route path = '/Do' Component={Do}/>
        <Route path = '/Dolby' Component={Dolby}/>
        <Route path = '/Haptic' Component={Haptic}/>
        <Route path = '/Live' Component={Live}/>
        <Route path = '/Message' Component={Message}/>
        <Route path = '/Notification' Component={Notification}/>
        <Route path = '/Ringtone' Component={Ringtone}/>
        <Route path = '/Vibration' Component={Vibration}/>
        <Route path = '/Default' Component={Default}/>
        <Route path = '/Volume' Component={Volume}/>

        <Route path = '/UrlDisplay' Component={UrlDisplay}/>
      </Routes>
      </div>
  );
}

export default App;

