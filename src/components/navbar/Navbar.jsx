import React from 'react'
import "./navbar.css"
import {add_video, bars, bell_icon, home, mic_icon, search_icon, shorts, subscriptions, user_icon, you, youtube_logo} from '../../assets/icons/icons'
import Card from '../card/Card'

const Navbar = () => {
  return (
    <div className='navContainer'>
        <div className="sidebar">
            <div className="sidebarIcons">
                <div className="sidebarIcon">
                    <img src={bars} alt="bars" />
                </div>
                <div className="sidebarIcon">
                    <img src={home} alt="home" />
                    <p>Home</p>
                </div>
                <div className="sidebarIcon">
                    <img src={shorts} alt="shorts" />
                    <p>Shorts</p>
                </div>
                <div className="sidebarIcon">
                    <img src={subscriptions} alt="subscriptions" />
                    <p>Subscriptions</p>
                </div>
                <div className="sidebarIcon">
                    <img src={you} alt="you" />
                    <p>You</p>
                </div>
            </div>
        </div>
        <div className="main-nav">
            <div className="logoContainer">

                <div className="mainLogo">
                    <img src={youtube_logo} alt="youtube_logo" />
                </div>

                <div className="search">
                    <input type="text" placeholder='Search' />
                    <img className='search-icon' src={search_icon} alt="search_icon" />
                    <img className='mic-icon' src={mic_icon} alt="mic_icon" />
                </div>

                <div className="userIcons">
                    <img src={add_video} alt="add_video" />
                    <img src={bell_icon} alt="bell_icon" />
                    <img src={user_icon} alt="user_icon" />
                </div>

            </div>

            <div className="contentContainer">
                <Card />
            </div>

        </div>
    </div>
  )
}

export default Navbar