import React from 'react';

export const DeleteBook = ({removeDeleteModal, yesDeleteBook}) => {
    return(
        <>
            <div class="fixed w-screen h-screen bg-gray-900 left-0 top-0 opacity-40 transition ease-in-out delay-1000 z-40"></div>
            <div class="self-center justify-center flex font-rubik-400 font-medium">
            <div class="absolute top-64 bg-white shadow-2xl px-4 md:w-2/5 h-auto z-50 transition-transform m-auto overflow-hidden rounded-md">
                <div class="text-center py-5">
                <div onClick={removeDeleteModal}><svg class="w-5 mr-3 text-gray-500 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg></div>
                    <div class="text-xl text-gray-500 mb-4">Are sure you want to delete...</div>
                    <button onClick={yesDeleteBook} class="bg-red-500 p-2 text-lg text-white rounded-full w-36 hover:bg-red-700" type="button">Delete</button>
                </div>
            </div>
        </div>
        </>
    )
}