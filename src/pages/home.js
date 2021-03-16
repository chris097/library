import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Url} from "../routes/localhost"
import { Cards } from '../components/cards';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { MobileSidebar } from '../components/sidebarMobile';
import { SubHeader } from '../components/subHeader';


export const Home = () => {
    const [ mobSidebar, setMobSidebar ] = useState(false);
    const [showSidebar, setShowSidebar ] = useState(true);
    const [ card, setCard ] = useState([]);

    /** Fetching data from th RestApi using Get all method. */
    useEffect(() => {
        axios.get(Url)
        .then(res => {
            const books = res.data;
            setCard(<Cards books={ books } />)
        })
        .catch(err => console.error(`Unable to access book cabinet ..., ${err.message}`));
    }, [])

    // Sidebar query
    const getSidebarMobile = () => {
        // console.log('something was clicked...')
        setMobSidebar(!mobSidebar)
        setShowSidebar(!showSidebar)
    }
    return(
        <>
        <Header />
        <SubHeader card={card} getSidebarMobile={getSidebarMobile} />
        {!showSidebar ? <MobileSidebar /> : showSidebar}
        <Sidebar />
        { card }
        </>
    )
}