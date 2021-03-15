import React, { useState } from 'react';
import { Cards } from '../components/cards';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { MobileSidebar } from '../components/sidebarMobile';
import { SubHeader } from '../components/sub-header';

export const Home = () => {
    const [ mobSidebar, setMobSidebar ] = useState(false)
    const [showSidebar, setShowSidebar ] = useState(true)

    const getSidebarMobile = () => {
        // console.log('something was clicked...')
        setMobSidebar(!mobSidebar)
        setShowSidebar(!showSidebar)
    }
    return(
        <>
        <Header />
        <SubHeader getSidebarMobile={getSidebarMobile} />
        {!showSidebar ? <MobileSidebar /> : showSidebar}
        <Sidebar />
        <Cards />
        </>
    )
}