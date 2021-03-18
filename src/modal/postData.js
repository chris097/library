import React from 'react';

export const PostData = () => {
    return(
        <>
            <div class="fixed w-screen h-screen bg-gray-900 left-0 top-0 opacity-40 ease-in-out transition duration-1000 z-50"></div>
                <div class="self-center justify-center flex font-rubik">
                    <div class="absolute dark:bg-gray-700 dark:text-gray-300 md:top-5 top-10 bg-white shadow-2xl md:w-96 h-auto z-50 transition-transform m-auto overflow-hidden rounded-md w-5/6">
                        <div class="flex dark:bg-gray-700 justify-between px-3 py-2 bg-gray-50 ">
                            <div class="ml-4">Add a book</div>
                            <div  class=""><svg class="w-5 text-gray-500 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg></div>
                        </div>
                        <form action="" class="px-7 font-rubik">
                            <div class="mt-5">
                                <label class="block" htmlFor="title">Title</label>
                                <input class="input-box" type="text" id="title" placeholder="Book title" required/>
                            </div>
                            <div class="mt-2">
                                <label class="block" htmlFor="author">Author</label>
                                <input  class="input-box" type="text" id="author" placeholder="Author name" required/>
                            </div>
                            <div class="mt-2">
                                <label class="block" htmlFor="BookUrl">Book Url</label>
                                <input  id="bookUrl" class="input-box" type="text" placeholder="https://www.mybook.com" required/>
                            </div>
                            <div class="mt-2">
                                <label class="block" htmlFor="publishName">Published</label>
                                <input id="isPublished" class="input-box" type="text" placeholder="Publisher Name"/>
                            </div>
                            <div class="mt-2">
                                <label class="block" htmlFor="imageUrl">Image Url</label>
                                <input  id="imageUrl" class="input-box" type="text" placeholder="Optional"/>
                            </div>
                            <div class="mt-2">
                                <label class="block" htmlFor="description">Description</label>
                                <textarea id="description" class="w-full border dark:bg-gray-600 border-gray-200 px-1 h-16 outline-none placeholder-gray-200" placeholder="Write a text"></textarea>
                            </div>
                            <button class="w-full dark:bg-gray-600 bg-primaryColor my-2 rounded-sm p-2 text-white hover:bg-blue-700 transition-all delay-200 ease-in-out" type="submit">Add </button>
                        </form>
                    </div>
                </div>          
        </>
    )
}