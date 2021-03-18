import React from "react";



export const GetDataLoading = () => {
    return(
        <>
        <div className="fixed w-screen h-screen bg-gray-900 left-0 top-0 opacity-40 transition ease-in-out delay-1000 z-40"></div>
        <div><svg className="text-white absolute z-50 w-10 animate-spin duration-100 top-1/2 md:left-1/2 left-36" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg></div>
        </>
    )
}