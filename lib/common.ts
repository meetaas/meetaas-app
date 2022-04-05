export enum Priority {
    Low = "low",
    Medium = "medium",
    High = "high",
    Urgent = "urgent"
}

export module Utils {
    export function GetPriorityValuesMap() {
        return Object.keys(Priority).map((key: string) => {
            return {value: Priority[key], label: key}
        });
    }
}

export const PriorityValuesMap = Utils.GetPriorityValuesMap();

export const PriorityColorsMap = {
    [Priority.Low]: "gray",
    [Priority.Medium]: "yellow",
    [Priority.High]: "orange",
    [Priority.Urgent]: "red",
}