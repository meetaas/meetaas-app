import { nanoid } from "nanoid";
import { object, optional, string, size, Infer, enums, array } from 'superstruct';
import { isEmpty, isNil } from 'rambda';
import { Priority } from "./common";

export enum PointStatus {
    Open = "open",
    Discussed = "discussed"
};

export interface PointModel {
    id: string,
    title?: string,
    context?: string,
    priority: Priority,
    status?: PointStatus,
    subpoints?: SubpointModel[],
};

export interface SubpointModel {
    title?: string,
    status?: PointStatus,
}
export const SubpointFormModel = object({
    title: optional(size(string(), 0, 50)),
    status: optional(enums(Object.values(PointStatus))),
});

export type SubpointFormModel = Infer<typeof SubpointFormModel>;

export const SubpointsFormModel = object({
    subpoints: optional(array(SubpointFormModel))
});
export type SubpointsFormModel = Infer<typeof SubpointsFormModel>;

export const PointFormModel = object({
    id: optional(string()),
    title: optional(size(string(), 0, 50)),
    context: optional(size(string(), 0, 200)),
    priority: enums(Object.values(Priority)),
    status: optional(enums(Object.values(PointStatus))),
});

export type PointFormModel = Infer<typeof PointFormModel>;

export function defaultPoint(): PointModel {
    return { id: nanoid(), priority: Priority.Low };
}

export function defaultSubpoint(): SubpointModel {
    return { title: "" };
}

export function createPoint(point: PointModel): PointModel {
    point.id = nanoid()
    point.priority = point.priority || Priority.Low;
    point.status = point.status || PointStatus.Open;
    return point;
}

export function isValidPoint(point?: PointModel | SubpointModel): boolean {
    return !isNil(point) && !isEmpty(point?.title);
}