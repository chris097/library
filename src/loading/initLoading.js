import React from "react";
import initLoading  from '../animatedIcon/Gear.svg';

export const Loading = () => {
    return(
        <div class="object-center self-center text-center align-middle content-center mt-56">
            <img class="w-28 mx-auto" src={initLoading} alt="Initial_loading"/>
            <div class="text-3xl font-lobster">BookCabinet.io</div>
        </div>
    )
}