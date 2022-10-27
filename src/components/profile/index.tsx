import React from "react";
import {DetailsComponent} from "./details.component";
import {SocialMediaComponent} from "./socialMedia.component";
import {InfoComponent} from "./info.component";

export class ProfileComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div className="flex flex-col justify-center items-center sticky top-8 lg:w-[260px]">
                    <DetailsComponent/>
                    <SocialMediaComponent/>
                    <InfoComponent/>
                </div>
            </div>
        )
    }
}