import React from "react"

export const GetBookById = ({author, title}) => {
    return(
        <>
            <div className="fixed w-screen h-screen bg-gray-900 left-0 top-0 opacity-40 transition ease-in-out delay-1000 z-40"></div>
            <div>
                <div class="bg-white shadow-md w-36 h-52 z-50 fixed top-24 left-20">
                    <p>{author}</p>
                    <p>{title}</p>
                </div>
            </div>
        </>
    )
}