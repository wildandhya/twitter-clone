import React from 'react'

import '../styles/Home.scss'

import LeftContent from '../components/Home/LeftContent'
import RightContent from '../components/Home/RightContent'
import MainContent from '../components/Home/MainContent'

function Home() {
    return (
        <div className="home-container">
            <LeftContent/>
            <MainContent/>
            <RightContent/>
        </div>
    )
}

export default Home
