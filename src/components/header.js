import { React } from "react";


export const Header = ({displayData, displaySearchBox}) => {
    return(
        <div class=" dark:bg-gray-900 dark:text-gray-400 bg-white shadow-sm h-20 flex justify-between md:px-10 px-2 py-4 overflow-hidden w-full fixed left-0 z-20">
            <div class="flex flex-1">
                { /**Logo */}
                <div class="text-2xl font-lobster mt-2 cursor-pointer"><a href="/">BookCabinet</a></div>

                { /** Search Input */}

                <div onMouseOver={displaySearchBox} class="bg-gray-50 dark:bg-gray-700 md:ml-10 md:w-2/3 w-40 md:h-12 ml-2 flex rounded-full md:px-4">
                    <span><svg class="w-8 ml-2 md:mt-2 mt-2 inline text-gray-200 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg></span>
                    <input type="text" name="" id="" placeholder="Search Books" class="bg-transparent w-full outline-none"/>
                </div>

            </div>

            { /** Add book button */}
            <div onClick={displayData}>
                <button class="dark:text-gray-400 dark:bg-gray-700 absolute right-8 flex w-40 invisible md:visible bg-primaryColor rounded-full outline-none py-3 px-5 hover:bg-blue-400 transition-all ease-in-out">
                <span>
                <svg class="w-6 text-white dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </span>
                <div class="text-white dark:text-gray-400 font-rubik">Add Book</div>
                </button>

                 { /* Mobile add button */}
                 <button onClick={displayData} className="dark:bg-gray-700 flex absolute right-3 w-auto md:invisible bg-primaryColor rounded outline-none py-1 px-1 mt-2 hover:bg-blue-400 transition-all ease-in-out">
                 <span className="">
                 <svg className="w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 </span>
                 <div className="text-white font-rubik"></div>
                 </button>
            </div>
        </div>
    )
}