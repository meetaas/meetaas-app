import { nanoid } from 'nanoid';
import create from 'zustand'
import { Priority } from './common';
import { createPoint, isValidPoint, PointFormModel, PointModel } from './point';
import { object, optional, string, array, size, Infer, enums } from 'superstruct';
import { createContext } from 'react';

export enum DiscussionStatus {
  Open = "open",
  Canceled = "cancelled",
  Completed = "completed",
}

export interface DiscussionModel {
    id: string,
    title: string,
    context?: string,
    status?: DiscussionStatus,
    priority?: Priority,
    points: PointModel[]
}

export const DiscussionFormModel = object({
  id: optional(string()),
  title: size(string(), 5, 30),
  context: optional(size(string(), 0, 500)),
  status: optional(enums(Object.values(DiscussionStatus))),
  priority: optional(enums(Object.values(Priority))),
  points: array(PointFormModel)
});

export type DiscussionFormModel = Infer<typeof DiscussionFormModel>

export function createDiscussion(discussion: DiscussionModel): DiscussionModel{
  discussion.id = discussion.id  || nanoid();
  if(discussion.context?.length === 0) {
    discussion.context = undefined;
  }
  discussion.priority = discussion.priority || Priority.Low;
  discussion.status = discussion.status ||  DiscussionStatus.Open
   if (discussion.points) {
    discussion.points = discussion.points.filter(isValidPoint).map(createPoint)
   }
  return discussion;
}

export interface DiscussionState {
  discussions: DiscussionModel[];
  getDiscussion: (id: string) => DiscussionModel | undefined;
  addDiscussion: (discussion: DiscussionModel) => void;
  updateDiscussion: (discussion: DiscussionModel) => void;
  removeDiscussion: (id: string) => void;
}

export const useDiscussionStore = create<DiscussionState>((set, get) => ({
  // initial state
  discussions: [],
  getDiscussion: (id: string) => {
    return get().discussions.find((discussion) => discussion.id === id);
  },
  // methods for manipulating state
  addDiscussion: (discussion: DiscussionModel) => {
    set((state) => ({
      discussions: [
        ...state.discussions,
        createDiscussion(discussion)
      ],
    }));
  },
  updateDiscussion: (updated: DiscussionModel) => {
    set((state) => {
      const index = state.discussions.findIndex((discussion) => discussion.id === updated.id );
      state.discussions[index] = createDiscussion(updated);
      return state;
    });
  },
  removeDiscussion: (id) => {
    set((state) => ({
      discussions: state.discussions.filter((discussion) => discussion.id !== id),
    }));
  },
}));

export module DiscussionErrors {
  export const NOT_FOUND = "Discussion is not found";
  export const ID_REQUIRED = "Discussion Id is required";
} 

export function defaultDiscussion(): DiscussionModel {
  return {title: "", id: nanoid(), points: []};
}

export const DiscussionContext = createContext({discussion: defaultDiscussion(), page: ""});

export class DiscussionError extends Error {
  constructor(message: string) {
    super(message);
  }
}