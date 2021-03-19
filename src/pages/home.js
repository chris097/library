import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {prodUrl} from "../routes/prod"
import { Cards } from '../components/cards';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { MobileSidebar } from '../components/sidebarMobile';
import { SubHeader } from '../components/subHeader';
import { PostData } from '../modal/postData';
import { NotFound } from '../errors/not_found';


export const Home = () => {
    const [ mobSidebar, setMobSidebar ] = useState(false);
    const [showSidebar, setShowSidebar ] = useState(true);
    const [ card, setCard ] = useState([]);
    const [ postData, setPostData ] = useState('')
    const [ length, setLenght ] = useState(0)
    const [ noData, setNoData] = useState('')

    /** Fetching data from th RestApi using Get all method. */
    useEffect(() => {
        axios.get(prodUrl)
        .then(res => {
            const books = res.data;
            setLenght(books.length)
            setCard(<Cards books={ books } />)

            if(books.length === 0){
                setNoData(<NotFound />)
            }
        })
        .catch(err => console.error(`Unable to access book cabinet ..., ${err.message}`));
    }, [])

    // Sidebar query for mobile
    const getSidebarMobile = () => {
        // console.log('something was clicked...')
        setMobSidebar(!mobSidebar)
        setShowSidebar(!showSidebar)
    }

    // This function will remove post data input modal
    const removePostData = () => {
        // console.log('you click ..')
        setPostData('')
    }

    // Fuction to display post data form input
    const displayData = () => {
        // console.log('something was clicked ...')
        setPostData(<PostData removePostData={removePostData} />)
    }

    return(
        <>
            <Header displayData={displayData} />
            <SubHeader getSidebarMobile={getSidebarMobile} length={length} />
            {!showSidebar ? <MobileSidebar /> : showSidebar}
            <Sidebar />
            { card }
            { postData }
            { noData }
        </>
    )
}