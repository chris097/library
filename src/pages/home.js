import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Url} from "../routes/localhost"
import { Cards } from '../components/cards';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { MobileSidebar } from '../components/sidebarMobile';
import { SubHeader } from '../components/subHeader';
import { PostData } from '../modal/postData';


export const Home = () => {
    const [ mobSidebar, setMobSidebar ] = useState(false);
    const [showSidebar, setShowSidebar ] = useState(true);
    const [ card, setCard ] = useState([]);
    const [ postData, setPostData ] = useState('')

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

    // Fuction to display post data form input
    const displayData = () => {
        console.log('something was clicked ...')
        setPostData(<PostData />)
    }
    return(
        <>
        <Header displayData={displayData} />
        <SubHeader card={card} getSidebarMobile={getSidebarMobile} />
        {!showSidebar ? <MobileSidebar /> : showSidebar}
        <Sidebar />
        { card }
        { postData }
        </>
    )
}