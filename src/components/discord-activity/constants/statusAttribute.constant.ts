import {StatusAttributeType} from "../interfaces/statusColor.interface";

export const statusAttributes: StatusAttributeType = {
    "online": {
        color: "success",
        icon: ""
    },
    offline: {
        color: "ghost",
        icon: ""
    },
    dnd: {
        color: "error",
        icon: "⛔"
    },
    idle: {
        color: "warning",
        icon: "🌙"
    },
    invisible: {
        color: "ghost",
        icon: "🔘"
    }
}
