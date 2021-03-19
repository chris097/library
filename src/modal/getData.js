import React, { useState } from "react";
import loveIcon from "../icons/love-icon.svg";
import delIcon from '../icons/del-icon.png';
import editIcon from '../icons/edit-icon.png';

export const GetBookById = ({
    id,
    author, 
    title, 
    bookUrl, 
    description,
    isPublished,
    imageUrl,
    removeBookId,
    deleteData,
    updateData,
    updateLike
}) => {
    
    const [ likes, setLikes ] = useState(0);

    const clickedLike = () => {
        // console.log('something was clicked ...')
        setLikes( !likes ? likes +1 : likes -1 )
    }


    return(
        <>
            <div className="fixed w-screen h-screen bg-gray-900 left-0 top-0 opacity-40 transition ease-in-out delay-1000 z-40"></div>
            <div class="object-center self-center justify-center flex font-rubik px-8">
                <div class="bg-white shadow-md md:w-3/6 w-full h-auto z-50 object-center fixed top-4 dark:bg-gray-900 rounded-lg px-4 py-3 mx-4 cursor-pointer">
                    <div class="flex justify-between">
                        <div class="font-lobster text-xl bold">{title}</div>
                        <div onClick={removeBookId}><svg className="w-5 mr-3 text-gray-500 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg></div>
                    </div>
                    <div class="flex mt-3">
                        <div>
                            <img class="bg-gray-200 md:w-44 w-32 h-52 rounded" src={imageUrl !== "" ? imageUrl : loveIcon} alt="book_image"/>
                            <div class="mt-5 overflow-x-auto md:w-full md:h-auto fixed w-32">
                                <div class="whitespace-nowrap">Author: <span class="bg-blue-400 text-white p-1 text-sm rounded-full">{author}</span></div>                            
                                <div class="whitespace-nowrap mt-2">Published: <span class="bg-blue-400 text-white p-1 text-sm rounded-full">{isPublished}</span></div>                            
                                <div class="whitespace-nowrap mt-2">Publisher: <span class="bg-blue-400 text-white p-1 text-sm rounded-full">{author}</span></div>                            
                                <div class="whitespace-nowrap mt-2">BookUrl: <span class="bg-blue-400 text-white p-1 text-sm rounded-full">{bookUrl}</span></div>                            
                            </div>
                        </div>
                        <div class="md:ml-6 ml-4">
                            <div class="md:w-96 w-48 break-all h-64 overflow-auto">{description}</div>
                            <div class="flex justify-between mt-5 md:mx-4">
                                <div onClick={updateLike} class="flex z-50 relative"><img class="hover:bg-red-400 rounded-full" onClick={clickedLike} src={loveIcon} alt=""/> <span class="text-gray-500 -mt-1 ml-1 text-xs">{likes}</span></div>
                                <div class="flex md:mr-4 ml-10 relative">
                                    <div onClick={() => updateData(id)} class="hover:bg-gray-400 mr-7  w-6 h-6"><img src={editIcon} alt="edit_icon"/></div>
                                    <div onClick={() => deleteData(id)} class="hover:bg-red-400 w-7 h-7 rounded-full p-1"><img src={delIcon} alt="delete_icon"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:mt-16 mt-20">
                        <div>32 Comments</div>
                        <div class="flex mt-2">
                            <img class="bg-gray-200 p-1 rounded-full" src={loveIcon} alt=""/>
                           <input class="rounded border border-gray-200 w-full outline-none ml-2" type="text" name="" id="comment" placeholder="Write a comment"/>
                        </div>
                        <div class="flex mt-2">
                            <img class="bg-gray-200 w-6 h-6 p-1 rounded-full" src={loveIcon} alt=""/>
                           <div class="ml-2 w-full">
                                <div>Christian <span class="ml-5 text-sm text-gray-500">26 Aug at 8:09</span></div>
                                <textarea class="rounded border border-gray-200 w-full outline-none h-12 whitespace-pre-wrap p-2 text-gray-500" type="text" name="" id="comment">
                                    nisi mollit deserunt non. Pariatur fugiat cillum irure elit sint nisi ad ipsum culpa deserunt cupidatat esse consequat laboris.
                                </textarea>
                           </div>
                        </div>
                        <div class="ml-8 text-gray-500">
                            <button class="text-sm">Edit</button>
                            <button class="text-sm ml-4">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}