import React from "react";

export class HeaderComponent extends React.Component<any, any>{
    render() {
        return (
            <header className="flex justify-between items-center h-16">
                <button
                    className="z-20 text-gray-600 mr-2 hover:text-black hover:cursor-pointer sm:hidden dark:text-gray-300"
                    data-toggle="false"
                    id="toggleMenu">
                    <svg className="icon" fill="none" height="24" id="menuIcon" stroke="currentColor"
                         strokeLinecap="round"
                         strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <line x1="3" x2="21" y1="12" y2="12"/>
                        <line x1="3" x2="21" y1="6" y2="6"/>
                        <line x1="3" x2="21" y1="18" y2="18"/>
                    </svg>
                    <svg className="hidden bg-white text-slate-900 rounded-full w-8 h-8 justify-center items-center"
                         fill="none"
                         height="24" id="closeIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <line x1="18" x2="6" y1="6" y2="18"/>
                        <line x1="6" x2="18" y1="6" y2="18"/>
                    </svg>
                </button>
                <div className="pr-2 hidden sm:flex sm:items-center">
                    <a className="flex items-center ml-4" draggable="false" href="/">
                        <img alt="logo" className="h-9 w-auto ml-4 drag-none rounded-lg" draggable="false"
                             src="/assets/images/logo.svg"/>
                    </a>
                </div>
                <div className="flex flex-row-reverse px-2 items-center gap-x-2">
                    <button className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                            id="toggleDarkMode">
                        <svg className="icon hidden" fill="none" height="24" id="moonIcon" stroke="currentColor"
                             strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                             width="24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                        </svg>
                        <svg className="icon hidden" fill="none" height="24" id="sunIcon" stroke="currentColor"
                             strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                             width="24"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="5"/>
                            <line x1="12" x2="12" y1="1" y2="3"/>
                            <line x1="12" x2="12" y1="21" y2="23"/>
                            <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"/>
                            <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"/>
                            <line x1="1" x2="3" y1="12" y2="12"/>
                            <line x1="21" x2="23" y1="12" y2="12"/>
                            <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"/>
                            <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"/>
                        </svg>
                    </button>

                </div>
            </header>
        )
    }
}