import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import {DiscordActivity, DiscordPresence} from "../../shared/interfaces/discordActivity.interface";
import {DiscordAppIconComponent} from "./components/app-icon.component";
import {DiscordAppDetailsComponent} from "./components/app-details.component";
import {DiscordAppTimerComponent} from "./components/app-timer.component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {Badge} from "react-daisyui";

const serverUrl: string = "wss://api.sajjadmrx.ir"
const socket = io(serverUrl);
const actKey = 'Custom Status'

export function DiscordActivityComponent() {
    const [isConnected, setConnected] = useState<boolean>(socket.connected);
    const [discordPresence, setDiscordPresence] = useState<DiscordPresence>({} as any)
    const [activity, setActivity] = useState<DiscordActivity | undefined>(undefined)
    useEffect(() => {
        socket.on('connect', () => {
            console.log("Connected")
            setConnected(true);
        });

        socket.on('disconnect', () => {
            setConnected(false);
        });

        socket.on("presenceUpdated", (data: DiscordPresence) => {
            setDiscordPresence(data)
            // const activity: DiscordActivity | undefined = data.activities[data.activities.length - 1]
            const activity: DiscordActivity | undefined = data.activities.find((act) => act.name != actKey)
            setActivity(activity)
        })
    }, []);


    return (
        <div>
            {isConnected && discordPresence.avatar ? <div className={"mt-10"}>
                <div className="mb-12" id="discord">
                    <div className="flex items-center ">
                        <span className="fab fa-discord text-2xl mr-2"></span>
                        <Badge className={"p-4 mr-2 mx-2 text-2xl"} color={"ghost"}>👷</Badge>
                        <h5 className="mx-2 text-2xl font-semibold">
                            فعالیت در حال انجام
                        </h5>
                    </div>


                    <div className="flex flex-col" id="working" style={{"direction": "ltr"}}>
                        <div className=" border border-gray-900 shadow-lg  rounded-3xl p-4 m-4">
                            <div className="flex-none sm:flex">
                                <div className=" relative h-32 w-32   sm:mb-0 mb-3">
                                    <DiscordAppIconComponent discordPresence={discordPresence} activity={activity}/>
                                </div>
                                <div className="flex-auto sm:ml-5 justify-evenly">
                                    <div className="flex items-center justify-between sm:mt-2">
                                        <div className="flex items-center">
                                            <div className="flex flex-col">
                                                <DiscordAppDetailsComponent activity={activity}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex pt-2  text-sm text-gray-400">
                                        <DiscordAppTimerComponent activity={activity}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div> : <div>

            </div>
            }

        </div>


    );
}
