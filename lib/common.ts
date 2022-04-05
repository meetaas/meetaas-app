export enum Priority {
    Low = "low",
    Medium = "medium",
    High = "high",
    Urgent = "urgent"
}

export module Utils {
    export function GetPriorityMap() {
        return Object.keys(Priority).map((key: string) => {
            return {value: Priority[key], label: key}
        });
    }
}

export const PriorityMap = Utils.GetPriorityMap();