import React, { useState } from "react";
import { Loading } from "./loading/initLoading";
import { Home } from "./pages/home";
import { Skeleton } from "./skeleton/skeleton";


export default function App() {
    const [ loading, setLoading ] = useState(<Loading />)
    const [ loadPage, setLoadPage ] = useState(<Skeleton />)

    setTimeout(() => {
        setLoading(loadPage)
    }, 2500);

    setTimeout(() => {
        setLoadPage(<div class="dark:bg-gray-900 transition duration-500 relative"><Home /></div>)
    }, 3000);


    return (
        <>
            { loading }
        </>
    );
}