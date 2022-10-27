import React from "react";
import {ProfileComponent} from "../../components/profile";
import {BiographyComponent} from "../../components/biography";
import {SkillsComponent} from "../../components/skills";
import {skills} from "../../components/skills/skills";

export class HomePage extends React.Component<any, any> {
    render() {
        return (
            <div className={"max-w-7xl mx-auto"}>
                <div className="flex flex-col shadow-md rounded-3xl lg:flex-row dark:bg-zinc-900/95">
                    <aside className="bg-secondary rounded-3xl p-8 dark:bg-[#131313]">

                        <ProfileComponent/>


                    </aside>

                    <main className=" p-6 lg:py-8 lg:px-10 rounded-3xl dark:bg-zinc-900/95">
                        <BiographyComponent/>
                        <SkillsComponent skills={skills}/>
                    </main>
                </div>
            </div>
        );

    }
}