import {Presence, Activity} from "discord.js"

export interface DiscordPresence extends Pick<Presence, "activities" | "status"> {
    readonly avatar: string
}

export interface DiscordActivity extends Activity {
}

export interface DiscordTimeStamps {
    start: Date | null,
    end: Date | null
}