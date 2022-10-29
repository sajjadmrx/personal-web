import React from "react";
import {Avatar} from "flowbite-react";


export class SocialMediaComponent extends React.Component<any, any> {
    render() {
        const username: string = 'sajjadmrx'
        return (
            <div>
                <div className="flex flex-row-reverse mb-6">
                    <a href={`https://www.instagram.com/${username}`} target="_blank" rel={'noreferrer'}>
                        <svg className="icon m-1 text-gray-300" fill="none" height="24"
                             stroke="currentColor"
                             strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                             viewBox="0 0 24 24"
                             width="24"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect height="20" rx="5" ry="5" width="20" x="2" y="2"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                    </a>
                    <a href={`https://twitter.com/${username}`} target="_blank" rel={'noreferrer'}>
                        <svg className=" icon m-1 text-gray-300" fill="none" height="24"
                             stroke="currentColor"
                             strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                             viewBox="0 0 24 24"
                             width="24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                        </svg>
                    </a>
                    <a href={`https://inkedin.com/in/${username}`} target="_blank" rel={'noreferrer'}>
                        <svg className="icon m-1 text-gray-300" fill="none" height="24"
                             stroke="currentColor"
                             strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                             viewBox="0 0 24 24"
                             width="24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect height="12" width="4" x="2" y="9"/>
                            <circle cx="4" cy="4" r="2"/>
                        </svg>
                    </a>
                    <a href={`https://github.com/${username}`} target="_blank" rel={'noreferrer'}>
                        <svg className="icon m-1 text-gray-300" height="32" viewBox="0 0 172 172" width="32"
                             x="0px"
                             xmlns="http://www.w3.org/2000/svg"
                             y="0px">
                            <g fill="none" fillRule="nonzero" fontFamily="none" fontSize="none"
                               fontWeight="normal"
                               stroke="none" strokeDasharray="" strokeDashoffset="0" strokeLinecap="butt"
                               strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="1"
                               style={{'mixBlendMode': 'normal'}}>
                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                <g fill="#cccccc">
                                    <path
                                        d="M80.625,10.75c-38.59082,0 -69.875,31.24219 -69.875,69.74902c0,30.82227 20.03027,56.98341 47.78711,66.22169c3.48534,0.62987 5.96289,-2.93946 5.96289,-5.62696c0,-1.6377 0.04199,-3.61132 0,-9.40625c-19.44239,4.19922 -25.53125,-9.40625 -25.53125,-9.40625c-3.19141,-8.0625 -7.05469,-10.37207 -7.05469,-10.37207c-6.34082,-4.32519 0.46192,-4.19922 0.46192,-4.19922c7.0127,0.46192 10.62402,6.50879 10.62402,6.50879c5.375,9.40625 17.51074,8.48243 21.5,6.71875c0,-4.2832 0.46192,-7.39062 1.6377,-9.36426c-21.96192,-3.86328 -33.92969,-16.54492 -33.8877,-34.09766c0.04199,-10.37206 3.61133,-18.43456 9.40625,-24.39746c-2.51953,-3.19141 -4.24121,-14.10937 0.92383,-20.82812c12.97558,0 20.70215,9.36426 20.70215,9.36426c0,0 6.08886,-2.64551 17.30078,-2.64551c11.25391,0 17.30078,2.51953 17.30078,2.51953c0,0 7.76855,-9.23828 20.74414,-9.23828c5.16504,6.71875 3.44336,17.63672 1.42774,20.61817c5.54297,5.83692 8.94433,13.89942 8.94433,24.60742c0,17.55274 -11.92578,30.23438 -33.8457,34.05567c1.38574,2.09961 1.5957,5.03906 1.5957,9.40625c0,9.32227 0,17.84668 0,20.15625c0,2.6875 2.43555,6.29883 6.00489,5.62696c27.75683,-9.28028 47.74511,-35.39942 47.74511,-66.22169c0,-38.50683 -31.28418,-69.74902 -69.875,-69.74902z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <a href={`https://virgool.io/@${username}`} target="_blank" rel={'noreferrer'}>
                        <svg className="icon m-1 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                             height={31}>
                            <g fill="none" fillRule="nonzero" fontFamily="none" fontSize="none"
                               fontWeight="normal"
                               stroke="none" strokeDasharray="" strokeDashoffset="0" strokeLinecap="butt"
                               strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="1"
                               style={{'mixBlendMode': 'normal'}}>
                                <g fill="#cccccc">
                                    <path
                                        d="M11.214 0A9.646 9.646 0 0 0 8.97.522C5.462 1.787 3.438 4.448 3.167 8.234c-.261 3.647 1.388 6.36 4.45 8.236.777.48 1.683.742 2.564 1.109-.811 1.134-1.666 2.311-2.53 3.524 1.431.977 2.818 1.929 4.232 2.897.13-.166.21-.27.288-.375 1.378-1.902 2.783-3.795 4.144-5.715 1.186-1.684 2.39-3.367 3.473-5.121 1.073-1.736 1.265-3.69.907-5.68-.549-3.06-2.968-5.926-6.281-6.85-.688 1.163-1.679 2.853-1.99 3.366.505.171 1.027.28 1.478.51 1.79.914 2.817 2.362 2.827 4.403.013 2.123-1.007 3.7-2.907 4.548-3.21 1.442-6.176-.664-6.822-3.173-.286-1.092-.263-2.197.271-3.209.53-1.023 1.129-2.007 1.724-3.003z"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        )
    }
}