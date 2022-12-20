import React from "react";
import {DiscordActivity, DiscordPresence} from "../../../shared/interfaces/discordActivity.interface";
import {Avatar, Badge, Tooltip} from "react-daisyui";
import {StatusAttribute} from "../interfaces/statusColor.interface";
import {statusAttributes} from "../constants/statusAttribute.constant";

interface Props {
    activity: DiscordActivity | undefined
    discordPresence: DiscordPresence
}


export function DiscordAppIconComponent(props: Props) {
    const activity = props.activity
    if (activity && activity.assets) {
        const applicationId: string | null = activity.applicationId || ""
        const largeIconId: string | null = activity.assets.largeImage
        const smallIconId: string | null = activity.assets.smallImage
        const baseUrl: string = "https://cdn.discordapp.com/app-assets"
        const largeIconUrl: string = `${baseUrl}/${applicationId}/${largeIconId}`
        const smallIconUrl: string = `${baseUrl}/${applicationId}/${smallIconId}`
        return (
            <div>
                <Tooltip message={activity.assets?.largeText || "Custom App"}>
                    <img alt="working" className=" w-32 h-32 object-cover rounded-2xl"
                         src={largeIconUrl}/>
                </Tooltip>
                {
                    smallIconId && <div
                        className="absolute -right-1 bottom-[-10px]  -ml-3  p-1 text-xs  tracking-wider ease-in "
                    >
                        <Tooltip message={activity.name || "hey!"}>
                            <Avatar src={smallIconUrl} size={25} shape={"circle"} border={true}
                                    borderColor={"ghost"}></Avatar>
                        </Tooltip>

                    </div>
                }
            </div>

        )
    } else {
        const discordPresence: DiscordPresence = props.discordPresence
        const statusAttribute: StatusAttribute = statusAttributes[discordPresence.status]
        return (
            <div>
                <Tooltip message={"discord avatar"}>
                    <img alt="working" className=" w-32 h-32 object-cover rounded-2xl"
                         src={discordPresence.avatar}/>
                </Tooltip>
                <a className="absolute right-1 bottom-1 h-4 w-4  -ml-3  text-white p-1 text-xs  font-medium tracking-wider rounded-full transition ease-in duration-300"

                   id="userStatus">
                    <Tooltip message={discordPresence.status}>
                        <Badge color={statusAttribute.color} className={"border-gray-700 border-2 h-5 w-5"}>
                            <span className={"mt-1"}>{statusAttribute.icon}</span>
                        </Badge>
                    </Tooltip>
                </a>
            </div>

        )
    }


}
