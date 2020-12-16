import React, {useEffect, useState} from 'react';
import {isMobile} from 'react-device-detect';
import { Helmet } from 'react-helmet'
import logo from './logo.svg';
import './App.css';

import videoHD from './musokuso_comingsoon.mp4';
import videoMobile from './musokuso_comingsoon_Mobile.mp4';
import loadingImage from './loadingImg.jpeg';
import loadingImageMobile from './loadingImg_mobile.jpeg'

function App() {
    const [isMuted, setIsMuted] = useState(true);
    const [isMutedMobile, setIsMutedMobile] = useState(true);

    return (
    <div className="App">
        <Helmet>
            <title>{ '𝗠𝗨𝗦𝗢 𝗞𝗨𝗦𝗢®' }</title>
        </Helmet>
        {(isMobile)?
            <div className="bg-video bg-video__LD">
                <video className="bg-video__content" onClick={() => setIsMutedMobile(!isMutedMobile)} id="video2"
                       poster={loadingImageMobile} autoPlay={true} muted={true} loop={true} playsinline={true}
                       playsinline={true}>
                    <source src={videoMobile} type="video/mp4"/>
                    Your browser is not supported
                </video>
            </div>
            :
            <div className={"bg-video bg-video__HD"}>
                <video className={'bg-video__content'} id={"video"} onClick={() => setIsMuted(!isMuted)}
                       poster={loadingImage} autoPlay={true} muted={true} loop={true} playsinline={true}
                       playsinline={true}>
                    <source src={videoHD} type="video/mp4"/>
                    Your browser is not supported
                </video>
            </div>
        }
    </div>
  );
}

export default App;
