import  React from "react";
import filterIcon from "../icons/filter-icon.svg";
import useDarkMode from "../hooks/useDarkMode";

export const DarkModeMobile = () => {
    const [colortheme, setColorTheme] = useDarkMode()

    return(
        <div className="bg-white dark:bg-gray-900 shadow-xl w-auto h-14 md:invisible visible fixed right-4 mt-12 p-2">
            <div className="flex">
                <div className="dark:bg-gray-600 dark:text-gray-300 flex bg-white w-28 mr-10 rounded-full px-2 h-9">
                    <img className="w-6" src={filterIcon} alt=""/>
                    <span className="ml-2 mt-1.5">Filter</span>
                </div>
                <div className="dark:bg-gray-700 bg-white p-3 rounded-full h-9 w-9 right-4">
                    <span onClick={() => setColorTheme(colortheme)}>
                    { colortheme === 'dark' ?
                        <div className="text-gray-500 w-7 -mt-2 -ml-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        </div> :
                        <div className="text-gray-200 w-8 -mt-2.5 -ml-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                        </div>}
                    </span>
                </div>
            </div>
        </div>
    )
}