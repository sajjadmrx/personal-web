import React from "react";

export class HeaderComponent extends React.Component<any, any> {
    render() {
        return (
            <div className="navbar bg-base-100" >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>

                            </li>
                        </ul>
                    </div>
                </div>

                <div className="navbar-end ml-3">

                    <div>
                        <img
                            src="/assets/icons/logo.png"
                            className="mr-3 h-6 sm:h-9 rounded"
                            alt="sajjadmrx Logo"
                        />
                    </div>
                </div>
            </div>
        )
    }
}