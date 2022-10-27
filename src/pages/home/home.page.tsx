import React from "react";
import {ProfileComponent} from "../../components/profile";

export class HomePage extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div className="flex flex-col shadow-md rounded-3xl lg:flex-row dark:bg-zinc-900/95">
                    <aside className="bg-secondary rounded-3xl p-8 dark:bg-[#131313]">

                        <ProfileComponent/>


                    </aside>
                </div>
            </div>
        );

    }
}

