import React, { useState } from "react";
import filterIcon from "../icons/filter-icon.svg";
import useDarkMode from '../hooks/useDarkMode'
import { DarkModeMobile } from "../modal/optionMobile";


export const SubHeader = ({getSidebarMobile}) => {

    const [colortheme, setColorTheme] = useDarkMode()
    const [ darkModeMobile, setDarkMoodeMobile ] = useState(false);
    const [ show, setShow ] = useState(true)

    //Display dark mode
    const displayDarkMode = () => {
        setColorTheme(colortheme)
        setDarkMoodeMobile([])
    }

    const displayDarkModeMobile = () => {
        setDarkMoodeMobile(!darkModeMobile)
        setShow(!show)
    }
   
    return(
        <div class="flex justify-between font-rubik bg-gray-50 md:px-10 px-2 py-2 cursor-pointer w-full">
            <div class="flex mt-1">

                { /* Mobile view : hambuger */}
                <div onClick={getSidebarMobile}>
                    <svg class="w-9 md:invisible left-2 absolute text-gray-400 -mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>

                <div class="text-xl md:ml-0 ml-10">Category</div>
                    <div class="ml-20 text-primaryColor bg-gray-100 px-10 rounded-full pt-1 h-8 text-center md:visible invisible">Fiction</div>
                <div>
                    <svg class="mx-5 w-5 mt-2 text-gray-500 invisible md:visible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
                <div class="md:mt-2 mt-1.5 absolute md:relative md:left-0 left-40 dark:text-gray-300">Showing <span class="font-bold">2</span> Result(s)</div>
            </div>
                <div class="flex">
                    <div class="dark:bg-gray-600 dark:text-gray-300 flex bg-white w-28 mr-10 rounded-full px-2 h-9 md:visible invisible">
                        <img class="w-6" src={filterIcon} alt=""/>
                        <span class="ml-2 mt-1.5">Filter</span>
                    </div>
                    <div class="dark:bg-gray-700 bg-white p-3 rounded-full h-9 w-9 invisible right-4 md:visible">
                    <span onClick={displayDarkMode}>
                    { colortheme === 'dark' ?
                        <div class="text-gray-500 w-7 -mt-2 -ml-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        </div> :
                        <div class="text-gray-200 w-8 -mt-2.5 -ml-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                        </div>}
                    </span>
                    </div>
                    { /* mobile */}
                    <svg onClick={displayDarkModeMobile} class="absolute right-1 mt-1 text-gray-400 hover:text-gray-600 w-7 md:relative md:invisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </div>
                {!show ? <DarkModeMobile /> : show }
            </div>
    )
}