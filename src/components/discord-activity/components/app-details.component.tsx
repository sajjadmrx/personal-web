import React from "react";
import {DiscordActivity} from "../../../shared/interfaces/discordActivity.interface";
import {Avatar} from "react-daisyui";

interface Props {
    activity: DiscordActivity | undefined
}

export function DiscordAppDetailsComponent(props: Props) {
    const activity: DiscordActivity | undefined = props.activity
    let item = {
        name: activity?.name || "☕ Coffee Time",
        details: activity?.details || "",
        state: activity?.state || ""
    }
    console.log(activity)
    return (
        <div>
            <div
                className="w-full flex-none mx-2 text-2xl font-semibold dark:text-gray-100"
                id="nameApp">
                {item.name}
            </div>
            <div className="flex-auto text-gray-400 my-1">
                <div>
                    {item.details}
                </div>
                <br/>
                <span
                    className={"text-sm "}>{item.state}
                </span>
            </div>
        </div>
    )
}