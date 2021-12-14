import React from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'
import { useState, useEffect } from 'react'

const Main = ({selectedPunk, punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])

    },[punkListData,selectedPunk])
    return (
        <div className="main">
            <div className="mainContent">
                <div className="punkHighlight">
                    <div className="punkContainer">
                    <img className="selectedPunk" src={activePunk.image_original_url}></img>
                    </div>
                </div>
                <div className="punkDetails" style={{color : '#fff'}}>
                    <div className="title">
                        {activePunk.name}
                        <span className="itemNumber">&#183;#{activePunk.token_id}</span>
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerImageContainer">
                            <img src={activePunk.owner.profile_img_url}></img>
                        </div>
                        <div className="ownerNameAndHandle">
                            <div className="ownerAddress">{activePunk.owner.address}</div>
                            <div className="ownerHandle">@prasann-28</div>
                            
                        </div>
                        <div className="ownerLink">
                                <img src={instagramLogo}></img>
                            </div>
                            <div className="ownerLink">
                                <img src={twitterLogo}></img>
                            </div>
                            <div className="ownerLink">
                                <img src={moreIcon}></img>
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Main
