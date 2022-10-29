import React from "react";

export class HeaderComponent extends React.Component<any, any> {
    render() {
        return (
            <header className="flex justify-between items-center h-16 mb-5">
                <div className="navbar bg-neutral text-neutral-content" dir={"rtl"}>
                    <a className="btn btn-ghost normal-case text-xl">sajjadmrx</a>
                </div>
            </header>
        )
    }
}