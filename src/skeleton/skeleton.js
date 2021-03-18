import React from 'react';


export const Skeleton = () => {
    return(
        <>
            { /** Header */ }

            <div class="md:px-10 px-6 bg-white shadow-sm fixed flex self-stretch h-20 py-4 w-full animate-pulse top-0 left-0 z-20">
                <div class="text-2xl pt-2 font-lobster text-gray-400">BookCabinet</div>
                    
                <div class="md:w-4/5 bg-gray-50 md:mx-20 rounded-full px-4 md:visible invisible">
                    <span><svg class="w-6 inline text-gray-200 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg></span>
                    <input class="w-5/6 bg-transparent outline-none h-full placeholder-gray-200" type="search" name="search" id="search" placeholder="Search books"/>
                </div>
                    
                <div class="text-lg bg-gray-50 px-2 md:rounded-full h-10 mt-1 w-44 rounded-md ml-14">
                    <div class="bg-white h-4 w-full mt-3 md:rounded-full"></div>
                </div>
            </div>

            { /** Nested Header */ }

            <div class="md:px-10 px-6 bg-gray-50 h-16 py-3 flex justify-between fixed mt-20  w-full z-30">
                <div class="flex">
                    <div class="text-lg bg-white px-2 rounded-full h-8 w-44">
                    <div class="bg-gray-50 h-4 w-full mt-2 rounded-full"></div>
                    </div>
                    <div class="text-lg bg-white px-2 rounded-full h-8 md:w-44 w-20 md:ml-24 md:10 invisible md:visible">
                    <div class="bg-gray-50 h-4 w-full mt-2 rounded-full"></div>
                    </div>
                </div>
                <div class="flex md:mr-0">
                    <div class="text-lg bg-white px-2 rounded-full h-8 md:w-20 md:mr-4 mt-1 invisible md:visible">
                    <div class="bg-gray-50 h-4 w-full mt-2 rounded-full"></div>
                    </div>
                    <div class="bg-white py-2 px-2 text-center rounded-full h-8 w-8 md:mt-1 mt-0">
                    <div class="bg-gray-200 h-4 w-4 rounded-full"></div>
                    </div>
                </div>
            </div>

            { /** Sidebar */ }

            <div class="bg-white shadow-lg h-screen w-64 fixed mt-24 overflow-hidden animate-pulse md:visible invisible pt-9">
                <div class="mt-2 px-10">
                <div class="pt-4 hover:bg-gray-100"><div class="bg-gray-200 w-5/6 h-4 mt-3 ml-3 rounded-full"></div></div>
                <div class="pt-2 hover:bg-gray-100"><div class="bg-gray-200 w-2/3 h-4 ml-3 rounded-full"></div></div>
                </div>
                <ul class="mt-4 text-gray-300 overflow-visible">
                    <li class="py-4 hover:bg-gray-100 px-10"><div class="bg-gray-200 w-4/5 h-4 mt-3 ml-3 rounded-full"></div></li>
                    <li class="py-4 hover:bg-gray-100 px-10"><div class="bg-gray-200 w-4/5 h-4 mt-3 ml-3 rounded-full"></div></li>
                    <li class="py-4 hover:bg-gray-100 px-10"><div class="bg-gray-200 w-4/5 h-4 mt-3 ml-3 rounded-full"></div></li>
                    <li class="py-4 hover:bg-gray-100 px-10"><div class="bg-gray-200 w-4/5 h-4 mt-3 ml-3 rounded-full"></div></li>
                    <li class="py-4 hover:bg-gray-100 px-10"><div class="bg-gray-200 w-4/5 h-4 mt-3 ml-3 rounded-full"></div></li>
                    <li class="py-4 hover:bg-gray-100 px-10"><div class="bg-gray-200 w-4/5 h-4 mt-3 ml-3 rounded-full"></div></li>
                </ul>
            </div>

            {/** Cards container */}

            <div class="h-screen overflow-hidden">
                <div class="cards-container mt-40">
                    <div class="md:w-52 md:h-72 h-60 w-40 bg-white dark:bg-gray-700 shadow-xl md:mt-4 md:ml-4 ml-2 rounded-lg">
                        <div class="bg-gray-200 w-full h-44 rounded-tr-lg rounded-tl-lg"></div>
                        <div class="bg-gray-200 w-3/4 h-4 mt-3 ml-3 rounded-full"></div>
                        <div class="bg-gray-200 w-1/2  h-3 mt-3 ml-3 rounded-full"></div> 
                    </div>
                    <div class="md:w-52 md:h-72 h-60 w-40 bg-white dark:bg-gray-700 shadow-xl md:mt-4 md:ml-4 ml-2 rounded-lg">
                        <div class="bg-gray-200 w-full h-44 rounded-tr-lg rounded-tl-lg"></div>
                        <div class="bg-gray-200 w-3/4 h-4 mt-3 ml-3 rounded-full"></div>
                        <div class="bg-gray-200 w-1/2 h-3 mt-3 ml-3 rounded-full"></div> 
                    </div>
                    <div class="md:w-52 md:h-72 h-60 w-40 bg-white dark:bg-gray-700 shadow-xl md:mt-4 md:ml-4 ml-2 mt-4 rounded-lg">
                        <div class="bg-gray-200 w-full h-44 rounded-tr-lg rounded-tl-lg"></div>
                        <div class="bg-gray-200 w-3/4 h-4 mt-3 ml-3 rounded-full"></div>
                        <div class="bg-gray-200 w-1/2 h-3 mt-3 ml-3 rounded-full"></div> 
                    </div>
                    <div class="md:w-52 md:h-72 h-60 w-40 bg-white dark:bg-gray-700 shadow-xl md:mt-4 md:ml-4 ml-2 mt-4 rounded-lg">
                        <div class="bg-gray-200 w-full h-44 rounded-tr-lg rounded-tl-lg"></div>
                        <div class="bg-gray-200 w-3/4 h-4 mt-3 ml-3 rounded-full"></div>
                        <div class="bg-gray-200 w-1/2 h-3 mt-3 ml-3 rounded-full"></div> 
                    </div>
                    <div class="md:w-52 md:h-72 h-60 w-40 bg-white dark:bg-gray-700 shadow-xl md:mt-4 md:ml-4 ml-2 mt-4 rounded-lg">
                        <div class="bg-gray-200 w-full h-44 rounded-tr-lg rounded-tl-lg"></div>
                        <div class="bg-gray-200 w-3/4 h-4 mt-3 ml-3 rounded-full"></div>
                        <div class="bg-gray-200 w-1/2 h-3 mt-3 ml-3 rounded-full"></div> 
                    </div>
                </div>
            </div>
        </>
    )
}