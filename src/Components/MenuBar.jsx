import {URL} from "../Configurations/constants.jsx"
import MenuButton from "./MenuButton.jsx";
import './styles/MenuBar.css'
import React, { useState } from 'react';
const MenuBar = ({sty}) => {

    const [hover, setHover] = useState(false);

    const mBarStyle = {
        borderBottom: hover ? '5px solid #fdb515' : '5px solid white',
        borderRadius: '10px 10px 0 0'
    };


    return (
        <>
            <div className="container" style={mBarStyle}>
                <div className="image-container">
                    <img src="/images/noteworthy%20bear-01.png" alt="Failed to load it." style={{width: '100%', height: '100%'}}/>
                </div>
                <div className="menu-bar-container">
                    <div id='m-bar' style={
                        sty
                    }>
                        <MenuButton
                            text='Home'
                            margin='10px'
                            path={URL.HOME_ENDPOINT}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        />
                        <MenuButton
                            text='About us'
                            margin='10px'
                            path={URL.ABOUT_US_HOME_ENDPOINT}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        />
                        <MenuButton
                            text='Videos'
                            margin='10px'
                            path={URL.FAVOURITE_VIDEOS_HOME_ENDPOINT}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        />
                        <MenuButton
                            text='Members'
                            margin='10px'
                            path={URL.MEMBERS_ENDPOINT}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default MenuBar