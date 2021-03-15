import React, { useState } from "react";
import { Home } from "./pages/home";
// import { Skeleton } from "./skeleton/skeleton";


export default function App() {
    // const [ loading, setLoading ] = useState('loading ...')
    // const [ loadPage, setLoadPage ] = useState(<Skeleton />)

    // setTimeout(() => {
    //     setLoading(loadPage)
    // }, 2000);

    // setTimeout(() => {
    //     setLoadPage('Homepage ...')
    // }, 2500);


    return (
        <>
        {/* loading */}
        <Home />
        </>
    );
}