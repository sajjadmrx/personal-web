import React, {useEffect, useState} from "react";
import {
    DiscordActivity,
    DiscordTimeStamps
} from "../../../shared/interfaces/discordActivity.interface";

interface Props {
    activity: DiscordActivity | undefined
}

let interval: any;

export function DiscordAppTimerComponent(props: Props) {
    const [timer, setTimer] = useState<string>("")
    const actKey = 'Custom Status'
    const activity: DiscordActivity | undefined = props.activity
    const timestamps: DiscordTimeStamps | null = activity?.timestamps || null
    useEffect(() => {
        if (timestamps) {
            updateTimestampsApp(timestamps, setTimer)
        }
        if (activity?.name == actKey) {
            setTimer("")
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [activity]);
    if (activity && timestamps) {
        return (
            <div>
                <div className="flex-1 inline-flex items-center">
                    <div className="font-semibold">
                        {timer}
                    </div>
                </div>
            </div>
        )
    }
    return <div></div>
}

function updateTimestampsApp(time: DiscordTimeStamps, setTimer: any) {
    //remove Interval
    const start: Date = time.start as Date
    clearInterval(interval);
    const startMs = new Date(start).getTime();
    const currentMs = new Date().getTime();
    let elapsedMs = currentMs - startMs;
    let elapsed = new Date(elapsedMs).toISOString().substr(11, 8);
    setTimer(`${elapsed}`);
    interval = setInterval(() => {

        //update 1second to elapsed
        elapsedMs = elapsedMs + 1000;
        elapsed = new Date(elapsedMs).toISOString().substr(11, 8);
        setTimer(`${elapsed}`);
    }, 1000);


}