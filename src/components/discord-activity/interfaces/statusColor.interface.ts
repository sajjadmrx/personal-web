import {PresenceStatus} from "discord.js";

export interface StatusAttribute {
    color: any,
    icon: string
}

export type StatusAttributeType = { [key in PresenceStatus]: StatusAttribute }