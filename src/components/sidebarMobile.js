import React  from "react";

export const MobileSidebar = () => {
    return(
        <div className="bg-white dark:bg-gray-700 shadow-lg h-screen w-screen fixed left-0 font-rubik mt-36">
            <div className="overflow-y-auto h-3/4 scrollbar scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-600">
                <div className="mt-2 px-10">
                    A curated list of every book ever written
                </div>
                    <ul className="mt-4 text-gray-300 overflow-visible">
                        <li className="py-4 hover:bg-gray-100 dark:hover:bg-gray-600 px-10"><span className="text-gray-400 font-semibold">FA</span> Fantasy</li>
                        <li className="py-4 hover:bg-gray-100 dark:hover:bg-gray-600 px-10"><span className="text-gray-400 font-semibold">AD</span> Adventure</li>
                        <li className="py-4 hover:bg-gray-100 dark:hover:bg-gray-600 px-10"><span className="text-gray-400 font-semibold">RO</span> Romance</li>
                        <li className="py-4 hover:bg-gray-100 dark:hover:bg-gray-600 px-10"><span className="text-gray-400 font-semibold">CO</span> Contemporary</li>
                        <li className="py-4 hover:bg-gray-100 dark:hover:bg-gray-600 px-10"><span className="text-gray-400 font-semibold">MY</span> Mystery</li>
                        <li className="py-4 hover:bg-gray-100 dark:hover:bg-gray-600 px-10"><span className="text-gray-400 font-semibold">HO</span> Horror</li>
                        <li className="py-4 hover:bg-gray-100 dark:hover:bg-gray-600 px-10"><span className="text-gray-400 font-semibold">TH</span> Thriller</li>
                        <li className="py-4 hover:bg-gray-100 dark:hover:bg-gray-600 px-10"><span className="text-gray-400 font-semibold">FA</span> Fantasy</li>
                        <li className="py-4 hover:bg-gray-100 dark:hover:bg-gray-600 px-10"><span className="text-gray-400 font-semibold">FA</span> Fantasy</li>
                        <li className="py-4 hover:bg-gray-100 dark:hover:bg-gray-600 px-10"><span className="text-gray-400 font-semibold">FA</span> Fantasy</li>
                        <li className="py-4 hover:bg-gray-100 dark:hover:bg-gray-600 px-10"><span className="text-gray-400 font-semibold">FA</span> Fantasy</li>
                        <li className="py-4 hover:bg-gray-100 dark:hover:bg-gray-600 px-10"><span className="text-gray-400 font-semibold">FA</span> Fantasy</li>
                        <li className="py-4 hover:bg-gray-100 dark:hover:bg-gray-600 px-10"><span className="text-gray-400 font-semibold">FA</span> Fantasy</li>
                    </ul>
                </div>
        </div>
    )
}