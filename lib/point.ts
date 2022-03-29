import { nanoid } from "nanoid";
import { Priority } from "./common";
import { object, optional, string, size, Infer, enums } from 'superstruct';


export enum PointStatus {
    Open = "open",
    Answered = "answered"
}

export interface PointModel {
    id?: string,
    title?: string,
    context?: string,
    priority?: Priority,
    status?: PointStatus,
}

export const PointFormModel = object({
    id: optional(string()),
    title: optional(size(string(), 0, 30)),
    context: optional(size(string(), 0, 200)),
    priority: optional(enums(Object.values(Priority))),
    status: optional(enums(Object.values(PointStatus))),
  });
  
export type PointFormModel = Infer<typeof PointFormModel>

export function defaultPoint(): PointModel {
    return { id: nanoid()};
}

export function createPoint(point: PointModel): PointModel{
    point.id = nanoid()
    point.priority = point.priority || Priority.Low;
    point.status = point.status || PointStatus.Open;
    return point;
}

export function isValidPoint(point?: PointModel): boolean {
    return !!point && !!point.title && point.title.length > 0; 
}